const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      username: String,
      email: String,
      password: String,
      userType: {
         type: String,
         enum: ['demandeur', 'bénévole'],
      },
      location: String,
      profilePic: String,
      dashboard: { type: Schema.Types.ObjectId, ref: 'Mission' },
      expertise: {
         type: String,
         enum: [
            "Droits de l'Homme et l'enfant",
            'Soutien des associations',
            'Etudes de droit comparé',
            'Formation',
         ],
      },
      description: String,
      logo: String,
      avaibility_start_date: Date,
      avaibility_end_date: Date,
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
