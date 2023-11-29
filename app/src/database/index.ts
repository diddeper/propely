import mongoose from "mongoose"

const DB_URL = "mongodb://db:27017/propely"

export const initDB = async () => {
  await mongoose.connect(DB_URL)
}
