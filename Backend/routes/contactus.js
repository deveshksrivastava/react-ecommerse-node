var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.post("/insertdata", function (req, res, next) {
  console.log(req.body.name);
  pool.query(
    "insert into contact(name,email,message)values(?,?,?)",
    [
      req.body.name,
      req.body.email,
      req.body.message,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ result: false });
      } else {
        console.log(result);
        return res.status(200).json({ result: true });
      }
    }
  );
});

module.exports = router;