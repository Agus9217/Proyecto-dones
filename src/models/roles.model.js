import { Schema, model } from "mongoose";


const rolesSchema = new Schema({
  name: {
    type: String,

  }
})


export const Roles = model('Roles', rolesSchema)
