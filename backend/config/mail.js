const { Resend } = require("resend");
require("dotenv").config();

const apiKey = process.env.RESEND_API_KEY?.trim();

const resend = apiKey ? new Resend(apiKey) : null;

const emailFrom =
  process.env.EMAIL_FROM?.trim() ||
  "Gupta Cab Service <onboarding@resend.dev>";

const adminEmail = process.env.ADMIN_EMAIL?.trim();

const sendEmail = async ({ to, subject, html, replyTo }) => {
  const recipient = to?.trim();

  if (!recipient) {
    return {
      success: false,
      error: new Error("Recipient email is missing"),
    };
  }

  if (!resend) {
    return {
      success: false,
      error: new Error("RESEND_API_KEY is not configured"),
    };
  }

  if (!adminEmail) {
    console.warn("⚠️ ADMIN_EMAIL is not configured.");
  }

  try {
    const payload = {
      from: emailFrom,
      to: recipient,
      subject,
      html,
    };

    if (replyTo?.trim()) {
      payload.replyTo = replyTo.trim();
    }

    const result = await resend.emails.send(payload);

    if (result?.error) {
      throw new Error(result.error.message || "Resend email failed");
    }

    console.log(`✅ Email sent successfully to ${recipient}`);

    return {
      success: true,
      data: result?.data || null,
    };
  } catch (error) {
    console.error(`❌ Email Error (${recipient}):`, error.message);

    return {
      success: false,
      error,
    };
  }
};

const verifyMail = async () => {
  if (!apiKey) {
    console.warn("⚠️ RESEND_API_KEY is not configured.");
    return false;
  }

  console.log("✅ Resend API configured");
  console.log(`📧 Email sender: ${emailFrom}`);

  return true;
};

module.exports = {
  resend,
  sendEmail,
  verifyMail,
  emailFrom,
  adminEmail,
};
