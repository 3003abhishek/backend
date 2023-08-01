const express = require("express");


const DataRouter = express.Router();



DataRouter.get("/", (req, res) => {
    res.send("This is the dummy data you wanted");
});


module.exports =DataRouter;