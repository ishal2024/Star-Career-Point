import { getTransporter } from "../config/emailTransporter.config.js";
import { Resend } from 'resend'

async function enquireNowByMail(req, res) {
    try {
        const { name, userEmail, contact, address, message } = req.body;

        // 🔹 Validations
        if (!name || !userEmail || !message) {
            return res.status(400).json({
                status: false,
                message: "Name, Email and Message are required",
            });
        }

        // Contact validation (optional but recommended)
        if (contact && contact.length < 10) {
            return res.status(400).json({
                status: false,
                message: "Invalid contact number",
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const mail = {
            from: process.env.RESEND_MAIL,
            to: process.env.ADMIN_MAIL,
            subject: "New Enquiry",

            text: `
                    New Enquiry Received:

                    Name: ${name}
                    Email: ${userEmail}
                    Contact: ${contact || "Not provided"}
                    Address: ${address || "Not provided"}

                    Message:
                    ${message}
                  `,

            reply_to: userEmail,
        };

        const info = await resend.emails.send(mail);

        if (info.error) {
            return res.status(400).json({
                status: false,
                message: info.error.message,
            });
        }

        return res.status(200).json({
            status: true,
            message: "Email sent Successfully",
            data: info,
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            data: error.message,
        });
    }
}


export default enquireNowByMail