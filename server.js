import express from "express"

const app = express()

/**
 * CRUD
 * 
 * req = Données de la requête provenant du front.
 * res = Données de la réponse renvoyée au front.
 * 
 */

app.get("/", (req, res) => {
    //Log de la requete
    console.log(req.ip, req.body, req.params,  req.headers);

    const result = {
        ip:req.ip
    }

    res.json(result)
})

app.get("/filters", (req, res) => {
    //Log de la requete
    console.log(req.query);

    const result = {
        ip:req.ip
    }

    res.json({
        queryy: req.query
    })
})

//Route d'erreur.
app.get("/error", (req, res) => {
    //Log de la requete
    console.log(req.ip, req.method,  req.headers);

    res.status(400).json({
        error_code: "EMPTY_FIELD"
    })
})