const express = require('express');
const authRoutes = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = require('../models/user-model');

//signup
authRoutes.post('/signup', (req, res, next) => {
   const {
      username,
      userType,
      email,
      password,
      location,
      expertise,
      description,
      avaibility_start_date,
      avaibility_end_date,
   } = req.body;
   //validations
   if (!email || !password) {
      console.log(email, password);
      res.status(400).json({ message: "Merci d'entrer un email et un mot de passe" });
      return;
   }

   if (password.length < 7) {
      res.status(400).json({
         message: 'Merci de choisir un mot de passe contenant au moins 8 caractères.',
      });
      return;
   }

   //vérification si user existe déjà
   User.findOne({ email })
      .then((foundUser) => {
         if (foundUser) {
            //comprends pas pourquoi 2 fois IF
            res.status(400).json({ message: 'Email or password is not valid' });
            return;
         }
         //validation mot de passe
         const salt = bcrypt.genSaltSync(10);
         const hashPass = bcrypt.hashSync(password, salt);

         console.log(
            avaibility_start_date,
            new Date(avaibility_start_date),
            avaibility_end_date,
            new Date(avaibility_end_date)
         );
         const aNewUser = new User({
            email: email,
            username: username,
            password: hashPass,
            userType: userType,
            location: location,
            expertise: expertise,
            description: description,
            avaibility_start_date: new Date(avaibility_start_date),
            avaibility_end_date: new Date(avaibility_end_date),
         });

         aNewUser
            .save()
            .then(() => {
               req.session.currentUser = aNewUser;
               res.status(200).json(aNewUser);
            })
            .catch((err) => {
               if (err instanceof mongoose.Error.ValidationError) {
                  console.log(err);
                  res.status(400).json({ message: 'Merci de compléter votre inscription' });
               } else {
                  res.status(400).json({ message: 'User not created' });
               }
            });
      })
      .catch((err) => {
         res.status(500).json({ message: 'Signup route not found' });
      });
});

//login
authRoutes.post('/login', (req, res, next) => {
   const { email, password } = req.body;
   User.findOne({ email })
      .then((user) => {
         if (!user) {
            res.status(400).json({
               message: 'Aucun compte relié à cet email',
            });
            return;
         }
         // compareSync
         if (bcrypt.compareSync(password, user.password) !== true) {
            res.status(400).json({ message: 'Mot de passe incorrect' });
         } else {
            req.session.currentUser = user;
            res.json(user);
         }
      })
      .catch((err) => {
         res.status(500).json({ message: 'Login route was not found' });
      });
});

//loggedin
authRoutes.get('/loggedin', (req, res, next) => {
   console.log('route loggedin');
   if (req.session.currentUser) {
      res.status(200).json(req.session.currentUser);
      return;
   }
   res.status(403).json({ message: 'Unauthorized' });
});

//logout
authRoutes.post('/logout', (req, res, next) => {
   req.session.destroy();
   res.json({ message: "Vous n'êtes plus connecté à votre compte" });
});

module.exports = authRoutes;
