const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missionSchema = new Schema(
   {
      title: {
         type: String,
         required: [true, 'Le titre est requis'],
      },
      sector: {
         type: String,
         required: [true, 'Le secteur est requis'],
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
      peopleRequired: {
         type: Number,
         required: [true, 'Le nombre de bénévoles recherchés est requise'],
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
         enum: ['Disponible', 'En attente de confirmation', 'Pourvue', 'Terminée'],
      },
      candidates: { type: [Schema.Types.ObjectId], ref: 'User' },
      volonteerSelected: { type: Schema.Types.ObjectId, ref: 'User' },
      requiredSkills: {
         type: String,
         enum: [
            'Règlement de litiges',
            'Rédaction des statuts ONG  ',
            'Contentieux',
            'Rédaction de contrats',
            'Langue anglaise'
         ],
      },
   },
   {
      timestamps: true,
   }
);

const Mission = mongoose.model('Mission', missionSchema);
module.exports = Mission;
