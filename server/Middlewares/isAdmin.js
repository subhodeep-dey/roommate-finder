import UserModel from "../Models/userModel.js";

export const isAdmin = async (req, res, next) => {
    const { userId } = req.body;

    try {
        const user = await UserModel.findById(userId);

        if (!user || !user.isAdmin) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
