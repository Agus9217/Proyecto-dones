import { connect } from "mongoose"

export const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI
    const db = await connect(DB_URI)
    console.log(`### DATABASE IS RUNNING ### ==> *** ${db.connection.name} ***`)
  } catch (e) {
    console.log(`### DATABASE ERROR ### ==> ${e.message}`)
  }
}


