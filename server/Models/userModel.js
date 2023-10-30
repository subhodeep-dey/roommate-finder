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
      default: null  // Set default value to null
    },
    lastname: {
      type: String,
      default: null  // Set default value to null
    },
    regnum: {
      type: String,
      default: null  // Set default value to null
    },
    gender: {
      type: String,
      default: null  // Set default value to null
    },
    rank: {
      type: Number,
      default: null  // Set default value to null
    },
    year: {
      type: Number,
      default: null  // Set default value to null
    },
    mobile: {
      type: Number,
      default: null  // Set default value to null
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    profilePicture: {
      type: String,
      default: null  // Set default value to null
    },
    coverPicture: {
      type: String,
      default: null  // Set default value to null
    },
    about: {
      type: String,
      default: null  // Set default value to null
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    emailToken: {
      type: String,
      default: null  // Set default value to null
    },
    followers: {
      type: Array,
      default: []  // Set default value to an empty array
    },
    following: {
      type: Array,
      default: []  // Set default value to an empty array
    },
    likesRoommate: {
      type: Array,
      default: []  // Set default value to an empty array
    },
    likesRoom: {
      type: Array,
      default: []  // Set default value to an empty array
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
