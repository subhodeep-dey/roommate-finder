import { createMailTransporter } from "./createMailTransporter.js";

export function sendPasswordResetMail(user) {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "RoomMate Dhoondho <cdac-kolkata@outlook.com>",
    to: user.username,
    subject: "Password Reset email - RoomMate Dhoondho",
    html: `Hello ${user.username},<br/><br/>Reset your password by clicking this link: <a href='${process.env.CLIENT_URL}/updatePassword?Email=${user.username}&emailToken=${user.emailToken}'>Reset Your Password</a>`,
    // http://localhost:3000/updatePassword?Email=test@example.com&emailToken=yourEmailTokenHere
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Password Reset email sent: " + info.response);
    }
  });
}
