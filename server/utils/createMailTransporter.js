import nodemailer from 'nodemailer';

const createMailTransporter = async () => {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "cdac-kolkata@outlook.com",
            pass: process.env.EMAIL_PASS,
        },
        port: 465,
        host: "smtp.office365.com",
        secure: true, // true for 465, false for other ports
    });

    // Verify connection configuration
    await new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    return transporter;
};

export { createMailTransporter };
