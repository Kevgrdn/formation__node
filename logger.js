import  pino  from "pino";
import  pretty  from "pino-pretty";
import { createWriteStream } from "fs";

const logLevel = process.env.NODE_ENV === "production" ? "warn": "trace"
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
    dedupe:true
}
const logger = pino({
    level: logLevel
}, pino.multistream(streams, opts))

export default logger