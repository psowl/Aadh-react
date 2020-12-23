const express = require('express');
const mongoose = require('mongoose');
const missionRoutes = express.Router();

const Mission = require('../models/mission-model');

//Create a mission
missionRoutes.post('/missions', (req, res, next) => {
   // Check if user logged-in

   if (!req.session.currentUser) {
      res.status(401).json({
         message: 'Merci de vous connecter avant de publier une mission',
      });
      return;
   }

   Mission.create({
      title: req.body.title,
      sector: req.body.sector,
      expertise_required: req.body.expertise_required,
      description: req.body.description,
      location: req.body.location,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      availability_frequency: req.body.availability_frequency,
      requiredSkills: req.body.requiredSkills,
      requester_id: req.session.currentUser._id,
   })
      .then((response) => {
         res.json(response);
      })
      .catch((err) => {
         res.status(500).json(err);
      });
});

// Displaying missions & Filtering from backend
missionRoutes.get('/missions', (req, res, next) => {
   const {
      searchfield,
      availability_frequency,
      expertise_required1,
      expertise_required2,
      expertise_required3,
      expertise_required4,
      location,
      start_date,
      end_date,
   } = req.query;

   let dbquery = {};

   if (searchfield) {
      dbquery.title = { $regex: req.query.searchfield, $options: 'i' };
   }

   if (availability_frequency) {
      dbquery.availability_frequency = req.query.availability_frequency;
   }

   if (expertise_required1 === 'true') {
      dbquery.expertise_required = "Droits de l'Homme et de l'enfant";
   }

   if (expertise_required2 === 'true') {
      dbquery.expertise_required = 'Soutien des associations et des ESS';
   }

   if (expertise_required3 === 'true') {
      dbquery.expertise_required = 'Etudes de droit comparé';
   }

   if (expertise_required4 === 'true') {
      dbquery.expertise_required = 'Formation';
   }

   if (location) {
      dbquery.location = { $regex: req.query.location, $options: 'i' };
   }
   //use lgt
   if (start_date) {
      dbquery.start_date = { $gte: new Date(req.query.start_date) };
   }

   if (end_date) {
      dbquery.end_date = { $lte: new Date(req.query.end_date) };
   }

   Mission.find(dbquery)
      .sort({ createdAt: -1 })
      .then((allTheMissions) => {
         console.log('🤶 dbquery', dbquery);
         res.json(allTheMissions);
      })
      .catch((err) => {
         console.log('error', err);
         res.status(500).json(err);
      });
});

// GET route => to get a specific mission view
missionRoutes.get('/missions/:id', (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
   }
   Mission.findById(req.params.id)
      .populate('requester_id')
      .then((response) => {
         res.status(200).json(response);
         //redirect to the mission details?
      })
      .catch((err) => {
         res.json(err);
      });
});

// GET route => to get missions view with userId
missionRoutes.get('/missions/user/:userId', (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
      res.status(400).json({ message: 'Specified userId is not valid' });
      return;
   }
   Mission.find({
      $or: [
         { requester_id: req.params.userId }, //if user is solliciteur
         { volonteerSelected: req.params.userId }, //if user is benevole
         { candidates: { $in: req.params.userId } }, //if user is benevole
      ],
   })
      .populate('candidates')
      .populate('volonteerSelected')
      .populate('requester_id')
      .then((missionsFromDb) => {
         res.status(200).json(missionsFromDb);
      })
      .catch((err) => {
         console.log('err dans la route populate', err);
         res.json(err);
      });
});

// PUT route => to update a specific mission
missionRoutes.put('/missions/:id', (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
   }

   Mission.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
         res.json({
            message: `La mission avec l'id ${req.params.id} été mise à jour avec ${req.body}`,
         });
      })
      .catch((err) => {
         res.json(err);
      });
});

//route pour qu'il y ait plusieurs candidats
//get la mission (find) et dans candidate pusher le nouvel id et save
missionRoutes.get('/:missionId/addCandidate', (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.missionId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
   }

   Mission.findById(req.params.missionId)
      .then((mission) => {
         const candidateId = req.session.currentUser._id;
         mission.candidates.push(candidateId);
         mission.status = 'En attente de confirmation';
         mission.save();
         res.status(200).json(mission);
      })
      .catch((err) => {
         res.json(err);
      });
});

// DELETE route => to delete a specific mission
missionRoutes.delete('/missions/:id', (req, res, next) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
   }

   Mission.findByIdAndRemove(req.params.id)
      .then(() => {
         res.json({
            message: `La mission avec l'id ${req.params.id} a été supprimée.`,
         });
      })
      .catch((err) => {
         res.json(err);
      });
});

module.exports = missionRoutes;
