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

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Storm Defender Briefing</title>
    <style>
        body { background-color: #000000; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 1px solid rgba(230, 57, 70, 0.2); padding-bottom: 20px; }
        .brand { font-size: 24px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; color: #e63946; }
        .title { font-size: 14px; font-weight: bold; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 0.3em; margin-top: 10px; }
        .secure-box { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 30px; margin-bottom: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 10px; font-weight: bold; color: #e63946; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 5px; }
        .value { font-size: 16px; color: #ffffff; }
        .message-box { background: rgba(0, 0, 0, 0.3); border-left: 3px solid #e63946; padding: 15px; margin-top: 25px; font-size: 14px; line-height: 1.6; color: rgba(255, 255, 255, 0.8); }
        .footer { text-align: center; font-size: 10px; color: rgba(255, 255, 255, 0.3); text-transform: uppercase; letter-spacing: 0.1em; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">Storm Defender®</div>
            <div class="title">Briefing Request Terminal</div>
        </div>
        
        <div class="secure-box">
            <div class="field">
                <div class="label">Organization</div>
                <div class="value">${organization}</div>
            </div>
            <div class="field">
                <div class="label">Representative</div>
                <div class="value">${full_name} (${role || 'N/A'})</div>
            </div>
            <div class="field">
                <div class="label">Contact Endpoint</div>
                <div class="value">${email}</div>
            </div>
            <div class="field">
                <div class="label">Interest Area</div>
                <div class="value">${interest_area}</div>
            </div>
            
            <div class="label">Operational Intelligence (Message)</div>
            <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
        
        <div class="footer">
            Generated Internal Report // ${new Date().toISOString()}<br>
            Secure Packet Transmission Confirmed
        </div>
    </div>
</body>
</html>
        `.trim();

        const { data, error } = await resend.emails.send({
            from: "Storm Defender® <info@se7eninc.com>",
            to: toField,
            subject: `STORM DEFENDER // Briefing Request: ${organization}`,
            html: htmlContent,
            text: `
STORM DEFENDER® BRIEFING REQUEST
-------------------------------
Organization: ${organization}
Name: ${full_name}
Role: ${role || "N/A"}
Email: ${email}
Interest: ${interest_area}

Message:
${message}
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
