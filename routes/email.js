var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

var ourEmail="blkchainworks@gmail.com"
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ourEmail,
    pass: process.env.blkchainworkspw
  }
});




/* GET home page. */
router.post('/', function(req, res, next) {
  var about= req.body.email;
  
  var mailOptions = {
    from: 'blkchainworks@gmail.com',
    to: 'blkchainworks@gmail.com',
    subject: about+' is interested',
    text: 'Now we need to send them details about blkchainworks'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info.response)
    }
  });
});

module.exports = router;
