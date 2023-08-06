module.exports = {
    getIndex: (req, res) => {
        res.render("../views/whereami.ejs", {latitude: 'lats dude', longitude: "longtudesilver"})
    }
}

