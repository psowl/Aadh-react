const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Mission = require('../models/mission-model');

//Create a mission 

router.post('/missions', (req, res, next) => {
// Check if user logged-in
// if (!req.session.currentUser) {
//   res.status(401).json({
//     message: "Merci de vous connecter avant de publier une mission"
//   });
//   return;
// }

  Mission.create({
    title: req.body.title,
    sector: req.body.sector,
    expertise_required: req.body.expertise_required,
    description: req.body.description,
    peopleRequired: req.body.peopleRequired, 
    location:req.body.location,
    start_date: req.body.start_date, 
    end_date: req.body.end_date,
    availability_frequency: req.body.availability_frequency,
    status: req.body.status,
    requiredSkills: req.body.requiredSkills,
    // requester_id: req.session.currentUser._id
  })
    .then(response => {
      console.log("response🌠", response)
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/missions', (req, res, next) => {

  Mission.find()
    .then(allTheMissions => {
      console.log("allTheMissions🎇", allTheMissions)
      res.json(allTheMissions);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;



