const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./config/mongoose.config")

const catRoutes = require('./routes/cat.routes')
catRoutes(app)

app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port}`))