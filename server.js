// import express from "express"
// import config from "./config.js"


const express = require("express")
const config = require("./config.js")
const router = require("./router")
const registerRoutes = require("./routes")

const app = express()

//MiddleWares

app.use((req, res, next) => {
    // console.log("MW APP", req.url)
    next()
})

//Parser de body car express ne lit pas le corps de la requete par defaut.
app.use(express.json())

// Parser d'url
app.use(express.urlencoded({extended: true}))
app.use("v0/", router)

registerRoutes(app)

app.listen(config.port, (err) => {
    if (!err) {
        console.log(`Listening on http://127.0.0.1:${config.port}`);
    }
})

exports.app = app