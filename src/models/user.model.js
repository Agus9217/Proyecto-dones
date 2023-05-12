import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name : {
    type : String,
    required : true,
    trim: true,
  },

  lastname : {
    type : String,
    required : true,
    trim: true,
  },

  email : {
    type : String,
    required : true,
    trim: true,
  },

  roles : {
    ref: 'Roles',
    type : Schema.Types.ObjectId
  }
})

export const User = model('User', userSchema)
