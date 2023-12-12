export const CORSProtection  = async (req, res, next) => {
    // Check if the request has an 'Origin' header
    const url = req.get('Origin');
    console.log('Domain:', url);

    // Check if User-Agent contains 'Postman'
    const userAgent = req.get('User-Agent') || '';
    const stopPostman = userAgent.includes('Postman') || userAgent.trim() === '';

    if (process.env.NODE_ENV === 'production' && stopPostman) {
        return res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
    }
      
    if (process.env.NODE_ENV === 'production' && url !== process.env.CLIENT_URL) {
        return res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
    }

    next();
};
  