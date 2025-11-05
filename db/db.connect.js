// GET CONNECTION STRING
require("dotenv").config()
const mongodbUri = process.env.MONGODB

// CONNECT WITH DB SETUP
const mongoose = require("mongoose")
async function connectWithDatabase() {
  await mongoose
    .connect(mongodbUri)
    .then(() => console.log("Connect with Database"))
    .catch((error) => console.log("Connection Failed", error))
}

module.exports = connectWithDatabase