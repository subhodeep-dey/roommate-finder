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

import nodemailer from 'nodemailer';

function createMailTransporter() {
    const transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
            user: "sdeysocial@gmail.com",
            pass: process.env.SENDINLBUE_API_KEY,
        },
    });

    return {
        sendMail: function (mailOptions) {
            return new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                });
            });
        }
    };
}

export { createMailTransporter };