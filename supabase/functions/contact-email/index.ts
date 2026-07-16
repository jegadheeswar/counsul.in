const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json; charset=utf-8" },
  });
}

function cleanText(value: unknown, maxLength: number): string {
  return String(value ?? "").trim().slice(0, maxLength);
}

function validateContactPayload(value: unknown): ContactPayload | undefined {
  if (!value || typeof value !== "object") return undefined;
  const fields = value as Record<string, unknown>;
  const payload = {
    name: cleanText(fields.name, 100),
    email: cleanText(fields.email, 255),
    phone: cleanText(fields.phone, 40),
    subject: cleanText(fields.subject, 150),
    message: cleanText(fields.message, 1500),
  };
  if (payload.name.length < 2) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return undefined;
  if (payload.subject.length < 3) return undefined;
  if (payload.message.length < 10) return undefined;
  return payload;
}

function buildContactText(payload: ContactPayload): string {
  return [
    "New website enquiry",
    "",
    "Name: " + payload.name,
    "Email: " + payload.email,
    "Phone: " + (payload.phone || "Not provided"),
    "Subject: " + payload.subject,
    "",
    payload.message,
  ].join("\n");
}

function resendErrorMessage(body: string): string {
  try {
    const parsed = JSON.parse(body) as { message?: string; error?: string; name?: string };
    return parsed.message || parsed.error || parsed.name || "Resend rejected the email request.";
  } catch {
    return body || "Resend rejected the email request.";
  }
}

Deno.serve(async (request) => {
  try {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== "POST") {
      return jsonResponse({ message: "Method not allowed" }, 405);
    }

    const payload = validateContactPayload(await request.json().catch(() => undefined));
    if (!payload) {
      return jsonResponse({ message: "Please check the contact form fields." }, 400);
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    const from = Deno.env.get("RESEND_FROM") ?? "Sowkathali Website <onboarding@resend.dev>";
    const to = Deno.env.get("CONTACT_TO") ?? "sowkathaliabdulkhader@counsul.in";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY secret");
      return jsonResponse({ message: "Email service is missing the RESEND_API_KEY secret." }, 500);
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: "Website enquiry: " + payload.subject,
        text: buildContactText(payload),
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      const message = resendErrorMessage(body);
      console.error("Resend email failed", response.status, message);
      return jsonResponse({ message }, 500);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact email function crashed", error);
    return jsonResponse({ message: "Contact email function crashed. Check Supabase function logs." }, 500);
  }
});
