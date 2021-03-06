var express = require("express");
var v1Router = require("./v1/");

var router = express.Router();

router.get("/", function(req, res) {
    res.send("/");
});

router.use("/v1", v1Router);

module.exports = router;