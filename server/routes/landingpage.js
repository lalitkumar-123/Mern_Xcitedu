const express = require("express");
const router = express.Router();
const Testimonial = require("../models/testimonials");
const Team = require("../models/team");
const Slider = require("../models/slider");
const Application = require('../models/application')
var path = require('path')


//  GET Testimonials #########


router.get("/api/v1/testimonials", (req, res) => {
  Testimonial.find().then((data) => {
    res.json(data);
  });
});

router.get("/api/v1/teams", (req, res) => {
  Team.find().then((data) => {
    res.json(data);
  });
});

router.get("/api/v1/sliders", (req, res) => {
  Slider.find().then((data) => {
    res.json(data);
  });
});

router.post("/api/v1/submit/application", (req, res) => {
  var application = new Application({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    jposition: req.body.jposition,
    imgUrl: imageUrl(req)
  });
  application.save().catch((error)=> {return res.send('-1' + error)}).then((data) => {res.send('1')});
})

router.get('/uploads/:folder/:file', (req,res) => {
  var p = path.join(__dirname, '../') + 'assets/uploads/' + req.params.folder + req.params.file;
  res.sendFile(p)
})


function imageUrl(req) {
  console.log(req.body)
  console.log(req.files)

  let File;
  let uploadPath;

   if (!req.files || Object.keys(req.files).length === 0) {
    
    var fallbackurl = "ydhyghghk"
    return fallbackurl
  }

  
  File = req.files.cv;
  uploadPath = path.join(__dirname, '../') + 'assets/uploads/'+ req.body.fname + " " + req.body.lname  + " " + req.body.email + '/'  + File.name;
  returnuploadpath = '/uploads/'+ req.body.fname + " " + req.body.lname  + " " + req.body.email + '/'  + File.name

  File.mv(uploadPath, function(err) {
      if (err) {
          console.log(error)
      }
    });

  return returnuploadpath
}


module.exports = router;
