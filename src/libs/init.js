import { Roles } from "../models/roles.model.js";

export const createRole = async () => {
  try {
    const count = await Roles.estimatedDocumentCount()
    if(count > 0) {
      return
    } else {
      const values = await Promise.all([
        new Roles({ name: "admin" }).save(),
        new Roles({ name: "user" }).save(),
        new Roles({ name: "moderator" }).save()
      ])

      console.log(values)
    }
  } catch (e) {
    console.error(e)
  }
}
