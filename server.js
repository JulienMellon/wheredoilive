const express = require("express")
const mainRoutes = require("./routes/main")
const app = express()
const PORT = 3001

//static folder
app.use(express.static("public"))


//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT || PORT}, catch up or else!`);
});