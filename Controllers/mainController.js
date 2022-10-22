const path = require('path');
const fs = require('fs');
const featured = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/featured.json"), "utf-8"));

const mainController = {
    index: (req, res) =>{
        res.render("index", {featured});
    }
};

module.exports = mainController;