const nodemailer = require("nodemailer");
require("dotenv").config();

const emailUser = process.env.EMAIL_USER?.trim();
const emailPassword = process.env.EMAIL_PASSWORD?.trim();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

const verifyMail = async () => {
  if (!emailUser || !emailPassword) {
    console.warn("⚠️ Gmail is not configured. Set EMAIL_USER and EMAIL_PASSWORD in backend/.env");
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

transporter.verify = transporter.verify.bind(transporter);

module.exports = transporter;
module.exports.verifyMail = verifyMail;
