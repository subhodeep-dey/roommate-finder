import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    urlParameter: { 
        type: String, 
        required: true,
        unique: true
    },
    visibility: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    severity: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    privateInfo: {
        type: String,
        required: false
    },
  },
  {
    timestamps: true,
  }
);

var serverMessageModel = mongoose.model("serverMessages", postSchema);
export default serverMessageModel;
