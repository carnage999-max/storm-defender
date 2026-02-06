"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAILS = (process.env.CONTACT_TO_EMAIL || "info@stormdefender.com")
    .split(",")
    .map(email => email.trim())
    .filter(Boolean);

export async function sendBriefing(formData: FormData) {
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const role = formData.get("role") as string;
    const interest_area = formData.get("interest_area") as string;
    const message = formData.get("message") as string;
    const honeypot = formData.get("honeypot") as string;

    // Anti-spam checks
    if (honeypot) return { success: false, error: "Spam detected." };
    if (!full_name || !email || !organization || !message) {
        return { success: false, error: "Missing required fields." };
    }
    if (message.length < 30) {
        return { success: false, error: "Message too short (min 30 chars)." };
    }

    // Final cleanup and validation of recipients
    const validRecipients = TO_EMAILS.filter(email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        /^.+ <[^\s@]+@[^\s@]+\.[^\s@]+>$/.test(email)
    );

    if (validRecipients.length === 0) {
        console.error("Recipient Error: No valid emails found in TO_EMAILS:", TO_EMAILS);
        return { success: false, error: "System configuration error: No valid recipients defined." };
    }

    try {
        const toField = validRecipients.length === 1 ? validRecipients[0] : validRecipients;
        console.log("Operational: Sending briefing to:", JSON.stringify(toField));

        const { data, error } = await resend.emails.send({
            from: "Storm Defender® <info@se7eninc.com>",
            to: toField,
            subject: `Storm Defender Briefing Request — ${organization || full_name}`,
            text: `
Full Name: ${full_name}
Email: ${email}
Organization: ${organization}
Role: ${role || "N/A"}
Interest Area: ${interest_area}

Message:
${message}

---
Timestamp: ${new Date().toISOString()}
User Agent: Server Action
      `.trim(),
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: "Failed to send email. Please try again later." };
        }

        return { success: true };
    } catch (err) {
        console.error("Submission Error:", err);
        return { success: false, error: "An unexpected error occurred." };
    }
}
