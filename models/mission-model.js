const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missionSchema = new Schema(
   {
      title: {
         type: String,
         required: [true, 'Le titre est requis'],
      },
      expertise_required: {
         type: String,
         enum: [
            "Droits de l'Homme et l'enfant",
            'Soutien des associations',
            'Etudes de droit comparé',
            'Formation',
         ],
         required: [true, "L'experise' est requis"],
      },
      requester_id: { type: Schema.Types.ObjectId, ref: 'User' },
      location: {
         type: String,
         required: [true, 'La localisation est requise'],
      },
      description: {
         type: String,
         required: [true, 'La description est requise'],
      },
      start_date: {
         type: Date,
         required: [true, 'Les dates sont requises'],
      },
      end_date: {
         type: Date,
         required: [true, 'Les dates sont requises'],
      },
      availibility_frequency: {
         type: String,
         enum: ['Régulier', 'Ponctuellement  ', 'Temps plein'],
         required: [true, "Le rythme d'intervention est requise"],
      },
      status: {
         type: String,
         enum: ['Disponible', 'Pourvue', 'Terminée'],
      },
      candidates: { type: [Schema.Types.ObjectId], ref: 'User' }, //array of IDs
      volonteerSelected: { type: Schema.Types.ObjectId, ref: 'User' }, //1 ID
   },
   {
      timestamps: true,
   }
);

const Mission = mongoose.model('Mission', missionSchema);
module.exports = Mission;
