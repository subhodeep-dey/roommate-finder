export const vitMailFormat = (req, res, next) => {
    const { username } = req.body;
  
    // Validate that the username (email) is well-formed and does not contain spaces
    const emailRegex = /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/;
  
    if (!emailRegex.test(username)) {
      return res.status(400).json({ message: "Invalid email address format." });
    }

    next();
};
