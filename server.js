const express = require("express")
const mainRoutes = require("./routes/main")
const app = express()
const PORT = 3001
const mapsController = require("./controllers/maps")

// I don't believe in secrets, but some things are private by necessity
require("dotenv").config({path: ".config/.env"})

// i like ejs for views, don't judge me
app.set("view engine", "ejs")

//static folder
app.use(express.static("public"))



//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes)

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT || PORT}, let's see if it can catch some rats!!`);
});