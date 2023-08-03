module.exports = {
    getIndex: (req, res) => {
        res.sendFile("../public/index.html")
    }
}

