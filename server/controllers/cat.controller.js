const Cat = require('../models/cat.model')

module.exports.test = (req, res) => {
    res.json({
        message : "TEST MESSAGE"
    })
}


// GET ALL CATS
module.exports.allCats = (req, res) => {
    Cat.find()
        .then(allCats => res.json({allCats})) // what we shud be getting back is allCats (new var)
        .catch(err => res.json({err}))
}

module.exports.createCat = (req,res) => {
    console.log("HITTING THE CREATE CAT CONTROLLER")
    console.log(req.body)
    Cat.create(req.body)
        .then(newCat => res.json({newCat}))
        .catch(err => res.status(400).json(err))
}