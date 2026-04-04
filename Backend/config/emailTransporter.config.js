import nodemailer from "nodemailer";
import dns from "dns";

// 🔥 Force IPv4 (fix for Render ENETUNREACH error)
dns.setDefaultResultOrder("ipv4first");

export function getTransporter() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ✅ use host instead of service
    port: 587,              // ✅ secure port
    secure: false,           // ✅ required for 465
    auth: {
      user: process.env.YOUR_MAIL,
      pass: process.env.EMAIL_PASSWORD, // ⚠️ no spaces in app password
    },
  });

  return transporter;
}
