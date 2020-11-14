const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missionSchema = new Schema(
   {
      title: String,
      expertise_required: {
         type: String,
         enum: [
            "Droits de l'Homme et l'enfant",
            'Soutien des associations',
            'Etudes de droit comparé',
            'Formation',
         ],
      },
      requester_id: { type: Schema.Types.ObjectId, ref: 'User' },
      location: String,
      imageURL: String,
      description: String,
      start_date: Date,
      end_date: Date,
      required_availibility: String,
      availibility_frequency: {
         type: String,
         enum: ['Régulier', 'Ponctuel', 'Temps plein'],
      },
      status: {
         type: String,
         enum: ['Disponible', 'Déjà engagé', 'Disponible dans 1 mois'],
      },
   },
   {
      timestamps: true,
   }
);

const Mission = mongoose.model('Mission', missionSchema);
module.exports = Mission;
