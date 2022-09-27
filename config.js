import { config } from "dotenv"
config()


export default  {
    logLevel : process.env.NODE_ENV === "production" ? "warn": "trace"
}