// import { createMailTransporter } from "./createMailTransporter.js";

// export async function sendVerificationMail(user) {
//   const transporter = await createMailTransporter();

//   const mailOptions = {
//     from: "RoomMate Dhoondho <sdeysocial@gmail.com>",
//     to: user.username,
//     subject: "Verify your email - RoomMate Dhoondho",
//     html: `Hello ${user.username},<br/><br/>Verify your email by clicking this link: <a href='${process.env.CLIENT_URL}/verifyEmail?emailToken=${user.emailToken}'>Verify Your Email</a>`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);

//     console.log("Verification email sent: " + info.response);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// // import { sendEmailWithSendinBlue } from "./createMailTransporter.js";

// // export async function sendVerificationMail(user) {
// //   const recipientEmail = user.username;
// //   const recipientName = user.username;
// //   const subject = "Verify your email - RoomMate Dhoondho";
// //   const html = `Hello ${user.username},<br/><br/>Verify your email by clicking this link: <a href='${process.env.CLIENT_URL}/verifyEmail?emailToken=${user.emailToken}'>Verify Your Email</a>`;

// //   try {
// //     const sendSmtpEmail = {
// //       to: [{ email: recipientEmail, name: recipientName }],
// //       subject: subject,
// //       html: html,
// //     };

// //     await sendEmailWithSendinBlue(sendSmtpEmail);
// //     console.log("Verification email sent successfully.");
// //   } catch (error) {
// //     console.error("Error sending verification email:", error);
// //     throw error;
// //   }
// // }

import { createMailTransporter } from "./createMailTransporter.js";

export async function sendVerificationMail(user) {
  const transporter = await createMailTransporter();

  const mailOptions = {
    from: "RoomMate Dhoondho <roommate.dhoondho@gmail.com>",
    to: user.username,
    subject: "Verify your email - RoomMate Dhoondho",
    html: `Hello ${user.username},<br/><br/>Verify your email by clicking this link: <a href='${process.env.CLIENT_URL}/verifyEmail?emailToken=${user.emailToken}'>Verify Your Email</a>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("Verification email sent: " + info.response);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
