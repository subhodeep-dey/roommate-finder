import serverMessageModel from "../Models/serverMessage.js";
import mongoose from 'mongoose';

export const getServerMessage = async (req, res) => {
    // Check if the request has an 'Origin' header
    const url = req.get('Origin');
    console.log('Domain:', url);

    if (process.env.NODE_ENV === 'production' && url !== process.env.CLIENT_URL) {
        res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
        return;
    }

    const { urlParameter } = req.params;

    try {
        const serverMessage = await serverMessageModel.findOne({ urlParameter });

        if (!serverMessage) {
            return res.status(404).json();
        }

        const serverDetails = serverMessage._doc;
        delete serverDetails.privateInfo;
        delete serverDetails.__v;
        delete serverDetails._id;
        delete serverDetails.userId;
        delete serverDetails.createdAt;
        delete serverDetails.updatedAt;

        if (!serverDetails.visibility) {
            return res.status(200).json();
        }
        delete serverDetails.visibility;

        res.status(200).json(serverDetails);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createServerMessage = async (req, res) => {
    const { userId, visibility, title, severity, desc, urlParameter, privateInfo } = req.body;
    // Check if the request has an 'Origin' header
    const url = req.get('Origin');
    console.log('Domain:', url);
    if (process.env.NODE_ENV === "production" && url !== process.env.CLIENT_URL) {
        res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
        return;
    }
    try {
        // Check if the urlParameter is unique
        const existingMessage = await serverMessageModel.findOne({ urlParameter });

        if (existingMessage) {
            return res.status(400).json({ error: 'Duplicate urlParameter' });
        }

        const newServerMessage = new serverMessageModel({
            userId,
            visibility,
            title,
            severity,
            desc,
            urlParameter,
            privateInfo,
        });

        const savedMessage = await newServerMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateServerMessage = async (req, res) => {
    const urlParameter = req.params.urlParameter;
    const { userId, visibility, title, severity, desc, privateInfo } = req.body;
    // Check if the request has an 'Origin' header
    const url = req.get('Origin');
    console.log('Domain:', url);
    if (process.env.NODE_ENV === "production" && url !== process.env.CLIENT_URL) {
        res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
        return;
    }
    
    try {
        const updatedMessage = await serverMessageModel.findOneAndUpdate(
            { urlParameter: urlParameter },
            {
                userId,
                visibility,
                title,
                severity,
                desc,
                privateInfo,
            },
            { new: true }
        );

        if (!updatedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteServerMessage = async (req, res) => {
    const urlParameter = req.params.urlParameter;
    // Check if the request has an 'Origin' header
    const url = req.get('Origin');
    console.log('Domain:', url);
    if (process.env.NODE_ENV === "production" && url !== process.env.CLIENT_URL) {
        res.status(403).json({ message: `${process.env.ACCESS_FORBIDDEN_MSG}` });
        return;
    }
    
    try {
        const deletedMessage = await serverMessageModel.findOneAndDelete({ urlParameter });

        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
