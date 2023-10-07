import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {                 // username is email
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: false
        },
        lastname : {
            type: String,
            required: false
        },
        regnum: {
            type: String,
            required: false
        },
        gender: String,
        rank : {
            type: Number,
            required: false
        },
        year : {
            type: Number,
            required: false
        },                   // year of study
        mobile : {
            type: Number,
            required: false
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        isVerified: {
            type: Boolean,
            default: false,
        },
        emailToken: String,
        followers: [],
        following: [],
        likesRoommate: [],
        likesRoom: []
    },
    {timestamps: true}
)

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel
