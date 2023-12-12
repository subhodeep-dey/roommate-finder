export const nameFormat = (req, res, next) => {
    const { firstname, lastname } = req.body;
  
    // Regular expression to check if the name contains only characters
    const nameRegex = /^[a-zA-Z. ]+$/;
  
    if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
      return res.status(400).json({ message: "Invalid name format. Name should contain only characters." });
    }
  
    next();
  };
  