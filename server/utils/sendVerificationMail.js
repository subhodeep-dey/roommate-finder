import { createMailTransporter } from "./createMailTransporter.js";

export async function sendVerificationMail(user) {
  const transporter = await createMailTransporter();

  const mailOptions = {
    from: "RoomMate Dhoondho <cdac-kolkata@outlook.com>",
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
