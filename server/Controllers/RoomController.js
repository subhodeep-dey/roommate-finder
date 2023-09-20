import needRoomModel from "../Models/needRoom.js";

// Create new Room
export const createRoom = async (req, res) => {
  const id = req.params.userid;
  const { userId } = req.body;
  const newRoom = new needRoomModel(req.body);

  try {
    if (id === userId) {
      await newRoom.save();
      res.status(200).json("Room created!");
    } else {
      res.status(403).json("Action forbidden");
    }
  }
  catch (error) {
    res.status(500).json(error);
  } 
};

// Get Room

export const getRoom = async (req, res) => {
  const id = req.params.userid;
  const { userId } = req.body;

  try {
    if (id === userId) {
      const Room = await needRoomModel.find({userId: id});
      res.status(200).json(Room);
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all Rooms

export const getAllRoom = async (req, res) => {
  try {
    const rooms = await needRoomModel.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(403).json("Action forbidden 403");
  }
};

// Update a Room
export const updateRoom = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const Room = await needRoomModel.findById(id);
    if (Room.userId === userId) {
      await Room.updateOne({ $set: req.body });
      res.status(200).json("Room Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Room
export const deleteRoom = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const Room = await needRoomModel.findById(id);
    if (Room.userId === userId) {
      await Room.deleteOne();
      res.status(200).json("Room deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};