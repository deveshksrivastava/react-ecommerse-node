var express = require('express');
var router = express.Router();
var pool=require('./pool')


router.post("/insertdata", function (req, res, next) {
  console.log(req.body)
    pool.query(
      "insert into userregistration(fname,lname,email,mobileno,password)values(?,?,?,?,?)",
      [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.mobileno,
        req.body.password,
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