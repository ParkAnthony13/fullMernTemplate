const mongoose = require("mongoose")

const CatSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"CAT NAME MUST BE SUPPLIED"]
    },
    age: {
        type: Number,
        min: [0, "YOU CAN'T HAVE NEGATIVE NUBMERS"]
    },
    breed: {
        type: String,
        required: [true,"BREED IS REQUIRED"]
    }
}, {timestamps : true})

const Cat = mongoose.model("CatSchema", CatSchema)
module.exports = Cat