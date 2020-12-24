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
         // required: [true, 'Merci de sélectionner votre profil'],
         enum: ['solliciteur', 'bénévole', 'administrateur'],
      },
      location: {
         type: String,
         // required: [true, 'La localisation est requise'],
      },
      profilePic: {
         type: String,
         default: 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png',
      },
      dashboard: { type: Schema.Types.ObjectId, ref: 'Mission' },
      expertise: {
         type: [String],
         // required: [true, 'Merci de sélectionner une expertise'],
         enum: [
            '', //pour solliciteur, cette propriété n'a pas à etre complétée
            "Droits de l'Homme et de l'enfant",
            'Soutien des associations et des ESS',
            'Etudes de droit comparé',
            'Formation',
         ],
         default: '',
      },
      description: {
         type: String,
         // required: [true, 'Merci de vous décrire vous ou votre organisation en quelques mots'],
      },
      logo: {
         type: String,
         default:
            'https://cdn.superlawyers.com/image/upload/q_auto,f_auto,w_200/v20201006/resources/superlawyers/profiles/firmlogo-placeholder.png',
      },
      availability_start_date: {
         type: Date,
         default: new Date(null), //pour solliciteur, que le user soit créé meme si les dates sont vides
      },
      availability_end_date: {
         type: Date,
         default: new Date(null), //pour solliciteur, que le user soit créé meme si les dates sont vides
      },
      availability_frequency: {
         type: [String],
         enum: ['', 'Régulier', 'Ponctuellement', 'Temps plein'], //'': pour solliciteur, cette propriété n'a pas à etre complétée
      },
      cause: String,
      status: {
         type: String,
         enum: ['Disponible', 'En mission', 'Bientôt disponible'],
         default: 'Disponible',
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
