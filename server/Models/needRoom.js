import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    rank: {
      type: Number,
      required: true,
      min: 1,
      max: 99999,
    },
    username: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/,
    },
    gender: {
      type: String,
      required: true,
      enum: ['M', 'F'],
    },
    preferredBed: {
      type: Number,
      required: true,
      min: 0,
      max: 9,
    },
    preferredBlock: {
      type: String,
      required: false,
      validate: {
        validator: function (v) {
          return v.length <= 10;
        },
        message: 'Preferred block should have a maximum length of 10 characters',
      },
    },
    remaining: {
      type: Number,
      required: false,
      min: 0,
      max: 9,
    },
    phone: {
      type: Number,
      required: true,
      min: 10000000,
      max: 999999999999999,
    },
    year: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length === 1 && /^\d+$/.test(v);
        },
        message: 'Year should be a single digit number',
      },
    },
    habits: String,
    desc: {
      type: String,
      validate: {
        validator: function (v) {
          return v.length <= 1030;
        },
        message: 'Description should have a maximum length of 1030 characters',
      },
    },
  },
  {
    timestamps: true,
  }
);

var needRoomModel = mongoose.model("needRooms", postSchema);
export default needRoomModel;
