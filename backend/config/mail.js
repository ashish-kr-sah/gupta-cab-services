const nodemailer = require("nodemailer");
require("dotenv").config();

const emailUser = process.env.EMAIL_USER?.trim();
const emailPassword = process.env.EMAIL_PASSWORD?.trim();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: emailUser,
    pass: emailPassword,
  },

  requireTLS: true,

  tls: {
    minVersion: "TLSv1.2",
  },
});

const verifyMail = async () => {
  if (!emailUser || !emailPassword) {
    console.warn(
      "⚠️ Gmail is not configured. Set EMAIL_USER and EMAIL_PASSWORD in backend/.env"
    );

    return false;
  }

  try {
    await transporter.verify();

    console.log("✅ Gmail SMTP Connected");

    return true;
  } catch (error) {
    console.error("❌ Gmail SMTP Error:", error.message);

    return false;
  }
};

module.exports = transporter;
module.exports.verifyMail = verifyMail;