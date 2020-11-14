const express = require('express');
const authRoutes = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user-model');

//signup
authRoutes.get('/signup', (req, res, next) => {
   console.log('hello');
   res.json('hello');
});

authRoutes.post('/signup', (req, res, next) => {
   const {
      username,
      email,
      password,
      userType,
      location,
      dashboard,
      expertise,
      description,
      avaibility_start_date,
      avaibility_end_date,
   } = req.body;

   //validations
   if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
   }

   if (password.length < 7) {
      res.status(400).json({
         message: 'Please make your password at least 8 characters long for security purposes.',
      });
      return;
   }

   ///vérification si user existe déjà
   User.findOne({ email })
      .then((foundUser) => {
         if (foundUser) {
            //comprends pas pourquoi 2 fois IF
            res.status(400).json({ message: 'Username or email or password is not valid' });
            return;
         }
         //validation mot de passe
         const salt = bcrypt.genSaltSync(10);
         const hashPass = bcrypt.hashSync(password, salt);

         const aNewUser = new User({
            username: username,
            password: hashPass,
         });

         aNewuser
            .save()
            .then(() => {
               req.session.currentUser = aNewUser;
               res.status(200).json(NewUser);
            })
            .catch((err) => {
               res.status(400).json({ message: 'User not created' });
            });
      })
      .catch((err) => {
         res.status(500).json({ message: 'Signup route not found' });
      });
});

//login

//loggedin

//logout

module.exports = authRoutes;
