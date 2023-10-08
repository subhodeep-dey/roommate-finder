import { createMailTransporter } from "./createMailTransporter.js";

export async function sendPasswordResetMail(user) {
  const transporter = await createMailTransporter();

  const mailOptions = {
    from: "RoomMate Dhoondho <cdac-kolkata@outlook.com>",
    to: user.username,
    subject: "Password Reset email - RoomMate Dhoondho",
    html: `Hello ${user.username},<br/><br/>Reset your password by clicking this link: <a href='${process.env.CLIENT_URL}/updatePassword?Email=${user.username}&emailToken=${user.emailToken}'>Reset Your Password</a>`,
    // http://localhost:3000/updatePassword?Email=test@example.com&emailToken=yourEmailTokenHere
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("Password Reset email sent: " + info.response);
  } catch (error) {
    console.error(error);
    throw error;
  }
}