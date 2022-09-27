import  pino  from "pino";
import  pretty  from "pino-pretty";
import { createWriteStream } from "fs";
import config from "./config.js"

const prettyOpt = {
    colorize : true,
    translateType: "HHH:MM:ss Z",
    ignore: "pid,hostname"
}
const streams =[
    {level: "trace", stream: pretty(prettyOpt),},
    {level: "warn", stream: createWriteStream("logs/warn.log")}
]

const opts = {
    levels: {
        fatal: 60,
        error: 50,
        warn:40,
        info: 30,
        debug: 20,
        trace: 10
    },
    dedupe: process.env.NODE_ENV === "production"
}

 const logger = pino({
    level: config.logLevel
}, pino.multistream(streams, opts))

export default logger