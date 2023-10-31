// import nodemailer from 'nodemailer';

// const createMailTransporter = async () => {
//     try {
//         console.log("Creating transporter...");
//         const transporter = nodemailer.createTransport({
//             service: "hotmail",
//             auth: {
//                 user: "cdac-kolkata@outlook.com",
//                 pass: process.env.EMAIL_PASS,
//             },
//             port: 587, // Port for secure TLS
//             host: "smtp.office365.com", // Hostname for Outlook
//             secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
//             requireTLS: true, // Force TLS
//         });

//         // Verify connection configuration
//         await new Promise((resolve, reject) => {
//             transporter.verify((error, success) => {
//                 if (error) {
//                     console.error(error);
//                     reject(error);
//                 } else {
//                     console.log("Server is ready to take our messages");
//                     resolve(success);
//                 }
//             });
//         });

//         console.log("Transporter created:", transporter);
//         return transporter;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

// export { createMailTransporter };

// import nodemailer from 'nodemailer';

// async function createMailTransporter() {
//     try {
//         const transporter = await nodemailer.createTransport({
//             // host: "smtp.gmail.com",
//             service: "gmail", // no need to set host or port etc.
//             // port: 587,
//             auth: {
//                 user: "sdeysocial@gmail.com",
//                 pass: process.env.GMAIL_APP_PASS,
//             },
//         });

//         return {
//             sendMail: function (mailOptions) {
//                 return new Promise(async (resolve, reject) => {
//                     try {
//                         const info = await transporter.sendMail(mailOptions);
//                         resolve(info);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 });
//             }
//         };
//     } catch (error) {
//         throw error;
//     }
// }

// export { createMailTransporter };

import nodemailer from 'nodemailer';

async function createMailTransporter() {
    try {
        const transporter = await nodemailer.createTransport({
            // host: "smtp-relay.brevo.com",
            service: "gmail", // no need to set host or port etc.
            // port: 587,
            auth: {
                user: "roommate.dhoondho@gmail.com",
                pass: process.env.GMAIL_APP_PASS,
            },
        });

        return {
            sendMail: function (mailOptions) {
                return new Promise(async (resolve, reject) => {
                    try {
                        const info = await transporter.sendMail(mailOptions);
                        resolve(info);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        };
    } catch (error) {
        throw error;
    }
}

export { createMailTransporter };