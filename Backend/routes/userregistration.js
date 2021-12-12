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

  router.post('/chkadminlogin', function(req, res, next) {
    pool.query("select * from userregistration where email=? and password=?",
    [req.body.email,req.body.password],function(error,result){
     if(error)
     { res.status(500).json({result:false})}
    else
    {  if(result.length==1)
         res.status(200).json({result:true})
      else
       res.status(200).json({result:false})
    }
  
    })
  });

  module.exports = router;