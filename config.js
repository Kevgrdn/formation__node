// import { config } from "dotenv"
const dotenv = require("dotenv")
dotenv.config()


module.exports =  {
    port : process.env.PORT || 3000,
    logLevel : process.env.NODE_ENV === "production" ? "warn": "trace"
}