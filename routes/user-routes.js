const express = require('express');
const userRoutes = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user-model');

//edit user
userRoutes.put('/users/:id', (req, res, next) => {
   //récupérer le user logué
   const user = req.session.currentUser;

   //vérifier que le user est logué
   if (!user) {
      res.status(401).json({ message: 'Merci de vous identifier' });
      return;
   }
   //vérifier que le user logué est le owner de la fiche
   if (req.params.id !== user._id) {
      res.status(403).json({ message: 'Merci de vous identifier' });
      return;
   }
   //récupérer les données du formulaire en front qqsoit le type de user
   const {
      username,
      password,
      location,
      expertise,
      profilePic,
      description,
      logo,
      avaibility_start_date,
      avaibility_end_date,
      cause, 
   } = req.body;

   User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => {
         res.json({ message: `L'utilisateur ${req.params.id} a été mis à jour` });
      })
      .catch((err) => res.json({ message: 'Utilisateur introuvable' }));
});

//delete user
userRoutes.delete('/users/:id', (req, res, next) => {
   const user = req.session.currentUser;
   //vérifier que le user est logué
   if (!user) {
      res.status(401).json({ message: 'Merci de vous identifier' });
      return;
   }
   //vérifier que le user logué est le owner de la fiche
   if (req.params.id !== user._id) {
      console.log(req.params.id);
      res.status(403).json({ message: 'Merci de vous identifier' });
      return;
   }
   User.findByIdAndRemove(req.params.id)
      .then((user) => res.json({ message: `L'utilisateur ${user._id} has been deleted.` }))
      .catch(() => res.json({ message: 'Utilisateur introuvable' }));
});

//afficher user
userRoutes.get('/users/:id', (req, res, next) => {
   const user = req.session.currentUser;
   //vérifier que le user est logué
   if (!user) {
      res.status(401).json({ message: 'Merci de vous identifier' });
      return;
   }
   //vérifier que le user logué est le owner de la fiche
   console.log('req.params.id', req.params.id);
   if (req.params.id !== user._id) {
      console.log(req.params.id);
      res.status(403).json({ message: 'Merci de vous identifier' });
      return;
   }
   User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch(() => res.json({ message: 'Utilisateur introuvable' }));
});

module.exports = userRoutes;
