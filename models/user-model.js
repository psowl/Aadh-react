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
      link: {
         type: String,
      },
      password: {
         type: String,
         required: [true, 'Le mot de passe est requis'],
      },
      userType: {
         type: String,
         required: [true,'Merci de sélectionner votre profil'],
         enum: ['solliciteur', 'bénévole'],
      },
      location: {
         type: String,
         required: [true, 'La localisation est requise'],
      },
      profilePic: String,
      dashboard: { type: Schema.Types.ObjectId, ref: 'Mission' },
      expertise: {
         type: [String],
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
      availability_start_date: {
         type: Date,
      },
      availability_end_date: {
         type: Date,
         required: [true, 'Merci de remplir vos dates de disponibilités'],
      },
      availability_frequency: {
         type: String,
         enum: ['Régulier', 'Ponctuellement', 'Temps plein'],
         required: [true, "Le rythme d'intervention est requis"],
      },
      status: {
         type: String,
         enum: ['Disponible', 'En mission', 'Bientôt disponible'],
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
