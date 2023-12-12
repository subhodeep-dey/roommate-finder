import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    firstname: {
      type: String,
      default: null,
      minlength: 1,
      maxlength: 20,
    },
    lastname: {
      type: String,
      default: null,
      minlength: 1,
      maxlength: 20,
    },
    regnum: {
      type: String,
      default: null,
      minlength: 7,
      maxlength: 12,
    },
    gender: {
      type: String,
      default: null,
    },
    rank: {
      type: Number,
      default: null,
      min: 1,
      max: 5,
    },
    isRankVerified : {
      type: Boolean,
      default: false,
    },
    year: {
      type: Number,
      default: null,
      min: 1,
      max: 8,
    },
    mobile: {
      type: Number,
      min: 10000000,
      max: 999999999999999,
    },
    isAdmin: {
      type: Boolean,
      default: false,
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
      default: false,
    },
    emailToken: {
      type: String,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    likesRoommate: {
      type: Array,
      default: [],
    },
    likesRoom: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
