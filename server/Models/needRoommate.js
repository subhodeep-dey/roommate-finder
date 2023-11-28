import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    rank: {
      type: Number,
      required: true
    },
    username: String,
    gender: String,
    preferredBed: {
      type: Number,
      required: true
    },
    preferredBlock: String,
    remaining: {
      type: Number,
      required: false
    },
    phone: {
      type: Number,
      required: true
    },
    year: String,   
    habits: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

var needRoommateModel = mongoose.model("needRoommates", postSchema);
export default needRoommateModel;
