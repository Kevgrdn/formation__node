const { Router} = require("express")
const agendaRouter = require("./agenda/agenda.router")

const router = Router()

router.use("/agenda", agendaRouter)


/**
 * CRUD
 * 
 * req = Données de la requête provenant du front.
 * res = Données de la réponse renvoyée au front.
 * 
 */

router.use((req, res, next) => {
    console.log("Router MW");
    next()
})

 router.get("/", (req, res) => {
    //Log de la requete
    console.log(req.ip, req.body, req.params,  req.headers);

    const result = {
        ip:req.ip
    }

    res.json(result)
})

router.post("/", (req, res) => {

    res.json({
        body: req.body
    })
})

router.get("/filters", (req, res) => {
    //Log de la requete
    console.log(req.query);

    res.json({
        queryy: req.query
    })
})

//Route d'erreur.
router.get("/error", (req, res) => {
    //Log de la requete
    console.log(req.ip, req.method,  req.headers);

    res.status(400).json({
        error_code: "EMPTY_FIELD"
    })
})



module.exports= router