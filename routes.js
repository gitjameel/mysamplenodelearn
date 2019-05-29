var express= require('express');
var sqlquery = require('./sql.js');
var router = express.Router();

/* /sample/   */
router.get("/", (req,res) => {
    res.send("Ping successful");
});

/* /sample/getdata   */
router.get("/getdata", sqlquery);

/* /sample/details   */
router.get('/details',(req,res) => res.send("testing /details end point"))

module.exports= router