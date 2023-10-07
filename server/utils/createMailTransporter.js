import nodemailer from 'nodemailer';

const createMailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "cdac-kolkata@outlook.com",
            pass: process.env.EMAIL_PASS,
        },
    });
    return transporter;
};

export { createMailTransporter };
