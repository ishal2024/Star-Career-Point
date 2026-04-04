import nodemailer from "nodemailer";


export function getTransporter() {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Must be false for 587
  auth: {
    user: process.env.YOUR_MAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // This is often required in cloud environments to bypass local DNS/Proxy issues
    rejectUnauthorized: false,
    minVersion: "TLSv1.2"
  }
});

  return transporter;
}
