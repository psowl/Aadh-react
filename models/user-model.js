const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: [true, 'Le username est requis'],
      },
      email: {
         type: String,
         match: [/.*@.*\..*/, 'Please use a valid email address.'],
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: [true, 'Le mot de passe est requis'],
      },
      userType: {
         type: String,
         required: true,
         enum: ['demandeur', 'bénévole'],
      },
      location: {
         type: String,
         required: [true, 'La localisation est requise'],
      },
      profilePic: String,
      dashboard: { type: Schema.Types.ObjectId, ref: 'Mission' },
      expertise: {
         type: String,
         required: [true, 'Merci de sélectionner une expertise'],
         enum: [
            "Droits de l'Homme et l'enfant",
            'Soutien des associations',
            'Etudes de droit comparé',
            'Formation',
         ],
      },
      description: {
         type: String,
         required: [true, 'Merci de vous décrire vous ou votre organisation en quelques mots'],
      },
      logo: String,
      avaibility_start_date: {
         type: Date,
         required: [true, 'Merci de remplir vos dates de disponibilités'],
      },
      avaibility_end_date: {
         type: Date,
         required: [true, 'Merci de remplir vos dates de disponibilités'],
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
