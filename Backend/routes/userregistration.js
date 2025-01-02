var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.post("/insertdata", function (req, res, next) {
  console.log(req.body);
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

router.post("/chkadminlogin", function (req, res, next) {
  pool.query(
    "select * from userregistration where email=? and password=?",
    [req.body.email, req.body.password],
    function (error, result) {
      if (error) {
        res.status(500).json({ result: false });
      } else {
        if (result.length == 1) res.status(200).json({ result: true });
        else res.status(200).json({ result: false });
      }
    }
  );
});

router.post("/chkuserbymobileno", function (req, res, next) {
  pool.query(
    "select * from userregistration where email=?",
    [req.body.email],
    function (error, result) {
      if (error) {
        console.log(error)
        return res.status(500).json({ result: false });
      } else {
        if (result.length === 0) {
          return res.status(200).json({ result: false });
        } else {
          return res.status(200).json({ result: true, data: result[0] });
        }
      }
    }
  );
});

router.post("/insertuserdetails", function (req, res, next) {
  pool.query(
    "insert into userregistration set mobile=?,email=?,fname=?,lname=?,password=?,addressstatus=false",
    [
      req.body.mobile,
      req.body.email,
      req.body.fname,
      req.body.lname,
      req.body.password,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ result: false });
      } else {
        return res.status(200).json({ result: true });
      }
    }
  );
});


router.post("/updateuserdetails", function (req, res, next) {
  pool.query(
    "update userregistration set address1=?,address2=?,state=?,city=?,zipcode=?,addressstatus=true where email=?",
    [
      req.body.address1,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.zipcode,
      req.body.email,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ result: false });
      } else {
        return res.status(200).json({ result: true });
      }
    }
  );
});

module.exports = router;
