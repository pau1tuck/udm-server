import nodemailer from "nodemailer";

export const emailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {},
    logger: Boolean(process.env.DEBUG),
    debug: Boolean(process.env.DEBUG),
});
