import { Resend } from "resend";



export async function sendMail(req,res){
    try {
        const {name , userMail , number , subject , message} = req?.body

        if (!name || !userMail || !subject || !message) {
            return res.status(400).json({
                status: false,
                message: "Name, Email and Message are required",
            });
        }

        const resend = new Resend(process.env.GURGAON_REAL_ESTATE_API_KEY);

        const mail = {
            from: process.env.GURGAON_REAL_ESTATE_RESEND_MAIL,
            to: "mayomi4942@davopa.com",
            subject: "New Enquiry",

            text: `
                    New Enquiry Received:

                    Name: ${name}
                    Email: ${userMail}
                    Contact: ${number || "Not provided"}

                    subject: New Enquiry - ${subject}

                    Message:
                    ${message}
                  `,

            replyTo: userMail,
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