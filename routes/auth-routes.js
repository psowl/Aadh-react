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
      passwordCheck,
      location,
      expertise,
      description,
      availability_start_date,
      availability_end_date,
      availability_frequency,
      cause,
      profilePic,
      logo,
   } = req.body;
   console.log('password', password, 'passwordCheck', passwordCheck);
   
   // validations;
   if (!email || !password) {
      res.status(400).json({ message: "Merci d'entrer un email et un mot de passe" });
      return;
   }

   if (password.length < 7) {
      res.status(400).json({
         message: 'Merci de choisir un mot de passe contenant au moins 8 caractères.',
      });
      return;
   }

   if (password !== passwordCheck) {
      res.status(400).json({
         message: 'Les deux mots de passe ne sont pas identiques',
      });
      return;
   }

   //vérification si user existe déjà
   User.findOne({ email })
      .then((foundUser) => {
         if (foundUser) {
            //comprends pas pourquoi 2 fois IF

            res.status(400).json({ message: 'Email ou mot de passe invalide' });
            return;
         }
         //cryptage mot de passe
         const salt = bcrypt.genSaltSync(10);
         const hashPass = bcrypt.hashSync(password, salt);

         const aNewUser = new User({
            email: email,
            username: username,
            password: hashPass,
            passwordCheck: hashPass,
            userType: userType,
            location: location,
            expertise: expertise,
            description: description,
            availability_start_date: new Date(availability_start_date),
            availability_end_date: new Date(availability_end_date),
            availability_frequency: availability_frequency,
            cause: cause,
            profilePic: profilePic,
            logo: logo,
         });
         aNewUser
            .save()
            .then(() => {
               req.session.currentUser = aNewUser;
               res.status(200).json(aNewUser);
            })
            .catch((err) => {
               if (err instanceof mongoose.Error.ValidationError) {
                  res.status(400).json({ message: 'Merci de compléter votre inscription', err });
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
            return next(new Error('Mot de passe incorrect'));
         } else {
            req.session.currentUser = user;
            res.json(user);
            // res.send("user logged")
         }
      })
      .catch((err) => {
         res.status(500).json({ message: 'Login route was not found' });
      });
});

//loggedin
authRoutes.get('/loggedin', (req, res, next) => {
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

//validation de l'unicité du email -       //pour valider le email dès le step1

// authRoutes.post('/unique', (req, res, next) => {
//    const { email } = req.body;

//    User.findOne({ email })
//       .then((foundUser) => {
//          if (foundUser) {
//             //comprends pas pourquoi 2 fois IF

//             res.status(400).json({ message: 'Email or password is not valid' });
//             return;
//          }
//       })
//       .catch(console.log('catch of route /unique'));
// });

module.exports = authRoutes;
