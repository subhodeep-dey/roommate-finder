import { createMailTransporter } from "./createMailTransporter.js";

export function sendVerificationMail(user) {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "RoomMate Dhoondho <cdac-kolkata@outlook.com>",
    to: user.username,
    subject: "Verify your email - RoomMate Dhoondho",
    html: `Hello ${user.username},<br/><br/>Verify your email by clicking this link: <a href='${process.env.CLIENT_URL}/verifyEmail?emailToken=${user.emailToken}'>Verify Your Email</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification email sent: " + info.response);
    }
  });
}
