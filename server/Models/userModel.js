import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    regnum: {
      type: String,
    },
    gender: {
      type: String,
      default: null
    },
    rank: {
      type: Number,
    },
    year: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    profilePicture: {
      type: String,
    },
    coverPicture: {
      type: String,
    },
    about: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    emailToken: {
      type: String,
    },
    followers: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: [] 
    },
    likesRoommate: {
      type: Array,
      default: [] 
    },
    likesRoom: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
