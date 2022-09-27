const { Router } = require("express")
const { get, create, remove, update, replace} = require("./agenda.controllers")

const router = Router()

router.get("/", get)
router.post("/", create)
router.patch("/id", update)
router.put("/:id", replace)
router.delete("/:id", remove)

module.exports = router