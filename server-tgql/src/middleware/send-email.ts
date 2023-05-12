import nodemailer from "nodemailer";
import { emailTransporter } from "config/nodemailer";

export const sendVerificationEmail = async (recipient: string, url: string) => {
    const info = await emailTransporter.sendMail({
        from: '"Underground Dance Music" <noreply@udmx.net>',
        to: recipient,
        subject: "Confirm email address",
        text: `Click the following link to confirm your email address: ${url}`,
        html: `Click the following link to confirm your email address: ${url}`,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
