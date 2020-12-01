const express = require('express');
const mongoose = require('mongoose');
const missionRoutes  = express.Router();

const Mission = require('../models/mission-model');

//Create a mission 
missionRoutes.post('/missions', (req, res, next) => {
  
// Check if user logged-in

if (!req.session.currentUser) {
  res.status(401).json({
    message: "Merci de vous connecter avant de publier une mission"
  });
  return;
}

  Mission.create({
    title: req.body.title,
    sector: req.body.sector,
    expertise_required: req.body.expertise_required,
    description: req.body.description,
    location:req.body.location,
    start_date: req.body.start_date, 
    end_date: req.body.end_date,
    availability_frequency: req.body.availability_frequency,
    requiredSkills: req.body.requiredSkills,
    requester_id: req.session.currentUser._id
  })
    .then(response => {
      console.log("response🌠", response)
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

//display all missions

// missionRoutes.get('/missions', (req, res, next) => {

//   Mission.find().sort({createdAt:-1})
//     .then(allTheMissions => {
//       console.log("allTheMissions🎇", allTheMissions)
//       res.json(allTheMissions);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });


// Displaying missions & Filtering from backend
missionRoutes.get('/missions', (req, res, next) => {
const{searchfield, availability_frequency, expertise_required, location, start_date, end_date } = req.query
console.log('req.query🎒: ',req.query)

let dbquery = {};

//ne filtre pas une lettre saisie, affiche les résultats avec 1 lettre de retard ?

if (searchfield) {
  dbquery.title = {"$regex": req.query.searchfield, "$options":"i"}
  console.log('dbquery ',dbquery)
  console.log('dbquery.title ',dbquery.title)
}

if (availability_frequency) {
  console.log('dbquery.availability_frequency ',dbquery.availability_frequency)
  dbquery.availability_frequency = req.query.availability_frequency
}

if (expertise_required) {
  dbquery.expertise_required = req.query.expertise_required;
}

if (location) {
  dbquery.city = {"$regex": req.query.location, "$options":"i"}
}


if (start_date) {
  dbquery.start_date = req.query.start_date;
}

if (end_date) {
  dbquery.end_date = req.query.end_date;
}

  Mission.find(dbquery).sort({createdAt:-1})
    .then(allTheMissions => {
      // console.log("allTheMissions🎇", allTheMissions)
      const allexpertise = [{name:"Droits de l'Homme et de l'enfant"}, {name:"Soutien des associations et des ESS"}, {name:"Etudes de droit comparé"}, {name:"Formation"}];
      let selected;
      allexpertise.forEach(expertise=> {
        // console.log("all missions types", expertise)
        // console.log("req.query.expertise_required",req.query.expertise_required)
        if (req.query.expertise_required === expertise.name) {
          //expertise.selected = true;
        }
      })
      res.json(allTheMissions);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific mission view
missionRoutes.get('/missions/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Mission.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific mission
missionRoutes.put('/missions/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Mission.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("📍in update",req.params.id,req.body )
      res.json({ message: `La mission avec l'id ${req.params.id} été mise à jour` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific mission
missionRoutes.delete('/missions/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Mission.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `La mission avec l'id ${req.params.id} a été supprimée.` });
    })
    .catch( err => {
      res.json(err);
    })
})



module.exports = missionRoutes;



