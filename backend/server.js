// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
// access node packages
const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
require("dotenv").config()
// access models
const db = require("./models")
// access controllers
const userCtrl = require("./controllers/users")
const crystalCtrl = require("./controllers/crystals")
// const reviewCtrl = require("./controllers/reviews")


// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))



// Use controllers for all other routes
app.use('/crystal', crystalCtrl)
app.use('/user', userCtrl)
// app.use('/review', reviewCtrl);
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})