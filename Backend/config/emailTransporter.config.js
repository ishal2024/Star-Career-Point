import nodemailer from 'nodemailer'


export function getTransporter() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.YOUR_MAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    return transporter
}

