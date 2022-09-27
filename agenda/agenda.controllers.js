
//CRUD 
async function get(req, res) {
    req.json({
        list: []
    })
}

async function create(req,res) {

    const newlyCreated = {}
    res.json(newlyCreated)
}

async function replace(req, res) {
    const { id } = req.params

    const replaced = {id}
    res.json(replaced)
}

async function update(req, res) {
    const { id } = req.params

    const updated = {id}

    res.json(updated)
}

async function remove(req, res) {
    const { id } = req.params
    res.status(200).end()
}

exports.create = create
exports.get = get 
exports.update = update
exports.remove = remove
exports.replace = replace