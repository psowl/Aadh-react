require('dotenv').config({
   path: require('path').resolve(__dirname, '../.env'),
}); //pour faire le seeds depuis heroku (utiliser la console heroku)

const mongoose = require('mongoose');

const User = require('../models/user-model.js');

const DB_NAME = 'projet-3-react';
mongoose
   .connect(process.env.MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log('Connected to the DB !');
   });

const users = [
   //bénévoles
   {
      username: 'Patrick Hyanus',
      email: 'patrick@gmail.com',
      password: 'patrick@gmail.com',
      userType: 'bénévole',
      location: 'Paris',
      profilePic:
         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Soutien des associations et des ESS'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '10/7/20',
      availibility_end_date: '10/17/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Delphine Gigi',
      email: 'delphine@gmail.com',
      password: 'delphine@gmail.com',
      userType: 'bénévole',
      location: 'Marseille',
      profilePic:
         'https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Formation'],
      description:
         "Titulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nDans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).",
      availibility_start_date: '9/18/19',
      availibility_end_date: '3/19/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Yann Biuo',
      email: 'Yann@gmail.com',
      password: 'Yann@gmail.com',
      userType: 'bénévole',
      location: 'Amiens',
      profilePic:
         'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Formation', 'Etudes de droit comparé'],
      description:
         "Titulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.",
      availibility_start_date: '8/29/18',
      availibility_end_date: '8/19/20',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Jeanne Roniul',
      email: 'jeanne@gmail.com',
      password: 'jeanne@gmail.com',
      userType: 'bénévole',
      location: 'Nantes',
      profilePic:
         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      expertise: [
         "Droits de l'Homme et de l'enfant",
         'Formation',
         'Etudes de droit comparé',
         'Soutien des associations et des ESS',
      ],
      description:
         "Après avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n",
      availibility_start_date: '8/9/17',
      availibility_end_date: '9/7/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Nadia Paquer',
      email: 'nadia@gmail.com',
      password: 'nadia@gmail.com',
      userType: 'bénévole',
      location: 'Nantes',
      profilePic:
         'https://images.unsplash.com/photo-1571844305128-244233caa679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "Après avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.",
      availibility_start_date: '7/20/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Baptiste Biplu',
      email: 'baptiste@gmail.com',
      password: 'baptiste@gmail.com',
      userType: 'bénévole',
      location: 'Nantes',
      profilePic:
         'https://images.unsplash.com/photo-1605235793874-408684446a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '7/1/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Edouard Ramirez',
      email: 'edouard@gmail.com',
      password: 'edouard@gmail.com',
      userType: 'bénévole',
      location: 'Nantes',
      profilePic:
         'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Soutien des associations et des ESS'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '6/11/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Eliott Watson',
      email: 'eliott@gmail.com',
      password: 'eliott@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Formation'],
      description:
         "Titulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nDans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).",
      availibility_start_date: '5/22/20',
      availibility_end_date: '10/13/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Marcus Macriod',
      email: 'marcus@gmail.com',
      password: 'marcus@gmail.com',
      userType: 'bénévole',
      location: 'Toulouse',
      profilePic:
         'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Formation'],
      description:
         "Titulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.",
      availibility_start_date: '5/2/19',
      availibility_end_date: '10/7/20',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Jef Taflert',
      email: 'jef@gmail.com',
      password: 'jef@gmail.com',
      userType: 'bénévole',
      location: 'Toulouse',
      profilePic:
         'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
      expertise: ["Droits de l'Homme et de l'enfant"],
      description:
         "Après avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n",
      availibility_start_date: '4/13/20',
      availibility_end_date: '10/12/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Isabelle Adurni',
      email: 'isabelle@gmail.com',
      password: 'isabelle@gmail.com',
      userType: 'bénévole',
      location: 'Brest',
      profilePic:
         'https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Soutien des associations et des ESS'],
      description:
         "Après avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.",
      availibility_start_date: '3/24/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Lise Berand',
      email: 'lise@gmail.com',
      password: 'lise@gmail.com',
      userType: 'bénévole',
      location: 'Brest',
      profilePic:
         'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '3/4/09',
      availibility_end_date: '10/15/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Frédéric Calvier',
      email: 'frederic@gmail.com',
      password: 'frederic@gmail.com',
      userType: 'bénévole',
      location: 'Brest',
      profilePic:
         'https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Etudes de droit comparé'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '2/13/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Marianne Mauros',
      email: 'marianne@gmail.com',
      password: 'marianne@gmail.com',
      userType: 'bénévole',
      location: 'Brest',
      profilePic:
         'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé', 'Soutien des associations et des ESS'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '1/24/19',
      availibility_end_date: '12/27/21',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Jean Poiro',
      email: 'jean@gmail.com',
      password: 'jean@gmail.com',
      userType: 'bénévole',
      location: 'Lille',
      profilePic:
         'https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ["Droits de l'Homme et de l'enfant"],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '1/4/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Mike Hyanus',
      email: 'mike@gmail.com',
      password: 'mike@gmail.com',
      userType: 'bénévole',
      location: 'Paris',
      profilePic:
         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Soutien des associations et des ESS'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '10/7/20',
      availibility_end_date: '10/17/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Carmen Gigi',
      email: 'carmen@gmail.com',
      password: 'carmen@gmail.com',
      userType: 'bénévole',
      location: 'Paris',
      profilePic:
         'https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Formation'],
      description:
         "Titulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nDans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).",
      availibility_start_date: '9/18/19',
      availibility_end_date: '3/19/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Georges Biuo',
      email: 'georges@gmail.com',
      password: 'georges@gmail.com',
      userType: 'bénévole',
      location: 'Amiens',
      profilePic:
         'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Formation', 'Etudes de droit comparé'],
      description:
         "Titulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.",
      availibility_start_date: '8/29/18',
      availibility_end_date: '8/19/20',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Marie Roniul',
      email: 'marie@gmail.com',
      password: 'marie@gmail.com',
      userType: 'bénévole',
      location: 'Nantes',
      profilePic:
         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      expertise: [
         "Droits de l'Homme et de l'enfant",
         'Formation',
         'Etudes de droit comparé',
         'Soutien des associations et des ESS',
      ],
      description:
         "Après avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n",
      availibility_start_date: '8/9/17',
      availibility_end_date: '9/7/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Natasha Paquer',
      email: 'Natasha@gmail.com',
      password: 'Natasha@gmail.com',
      userType: 'bénévole',
      location: 'Paris',
      profilePic:
         'https://images.unsplash.com/photo-1571844305128-244233caa679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "Après avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.",
      availibility_start_date: '7/20/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Mickael Biplu',
      email: 'Mickael@gmail.com',
      password: 'Mickael@gmail.com',
      userType: 'bénévole',
      location: 'Nice',
      profilePic:
         'https://images.unsplash.com/photo-1605235793874-408684446a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '7/1/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Pierre Ramirez',
      email: 'Pierre@gmail.com',
      password: 'Pierre@gmail.com',
      userType: 'bénévole',
      location: 'Nancy',
      profilePic:
         'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Soutien des associations et des ESS'],
      description:
         "Dans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      availibility_start_date: '6/11/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Ben Watson',
      email: 'Ben@gmail.com',
      password: 'Ben@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      expertise: ['Formation'],
      description:
         "Titulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nDans le cadre de son activité, j'interviens également dans le domaine du droit de la communication et des médias (droit de la presse et de l’édition). J'interviens dans les contentieux civils et commerciaux importants ainsi qu’en arbitrage, souvent à dimension internationale, ainsi qu’en matière de successions, de contentieux social et de droits de l’Homme.\r\n\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).",
      availibility_start_date: '5/22/20',
      availibility_end_date: '10/13/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Maurice Macriod',
      email: 'Maurice@gmail.com',
      password: 'Maurice@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Formation'],
      description:
         "Titulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.",
      availibility_start_date: '5/2/19',
      availibility_end_date: '10/7/20',
      availibility_frequency: 'Ponctuellement',
   },
   {
      username: 'Martin Taflert',
      email: 'Martin@gmail.com',
      password: 'Martin@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
      expertise: ["Droits de l'Homme et de l'enfant"],
      description:
         "Après avoir passé deux ans au sein du Tribunal Pénal International pour l’Ex Yougoslavie, j'ai rejoint le Cabinet en janvier 2013.  \r\n\r\nTitulaire d’un Master I de Droit international (Université Panthéon Sorbonne Paris I, 2008) et d’un Master in Laws du Trinity College de Dublin (2009), j'exerce principalement dans les domaines du droit pénal international, droit de l’extradition, droit pénal général, droit pénal des affaires et droit de la famille.\r\n\r\nTitulaire d’un Master 1 de Droit privé et sciences criminelles (parcours droit pénal, Université Paris Ouest La Défense, 2008) et d’un Master 2 de Droit pénal et procédure pénale (Université Paris Ouest La Défense, 2009), j'ai rejoint le Cabinet en janvier 2010.\r\n\r\nElle exerce principalement dans les domaines du droit des médias, droit pénal général, droit pénal des affaires et voies d’exécution.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n",
      availibility_start_date: '4/13/20',
      availibility_end_date: '10/12/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Anna Adurni',
      email: 'Anna@gmail.com',
      password: 'Anna@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Soutien des associations et des ESS'],
      description:
         "Après avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.",
      availibility_start_date: '3/24/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Henriette Berand',
      email: 'Henriette@gmail.com',
      password: 'Henriette@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '3/4/09',
      availibility_end_date: '10/15/21',
      availibility_frequency: 'Temps plein',
   },
   {
      username: 'Jean Calvier',
      email: 'Jean@gmail.com',
      password: 'Jean@gmail.com',
      userType: 'bénévole',
      location: 'Annecy',
      profilePic:
         'https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ["Droits de l'Homme et de l'enfant", 'Etudes de droit comparé'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '2/13/20',
      availibility_end_date: '10/7/21',
      availibility_frequency: 'Régulier',
   },
   {
      username: 'Michelle Mauros',
      email: 'Michelle@gmail.com',
      password: 'Michelle@gmail.com',
      userType: 'bénévole',
      location: 'Brest',
      profilePic:
         'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      expertise: ['Etudes de droit comparé', 'Soutien des associations et des ESS'],
      description:
         "A la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.\r\n\r\nAprès avoir effectué un stage au sein du Cabinet de Monsieur le Juge Truchot à la Cour de justice de l’Union européenne en 2010 puis au Pôle financier du Parquet de PARIS en 2012, j'ai rejoint le Cabinet en janvier 2013.\r\n\r\nTitulaire d’un Master en sciences politiques de la Jamia Millia University (New Delhi), d’un Master de Droit économique (mention Contentieux économique et Arbitrage, Sciences Po Paris, 2010) et d’un Master 2 de Droit des relations économiques internationales (Paris II Panthéon-Assas, 2011), j'exerce principalement dans les domaines du droit des affaires, droit pénal des affaires, droit pénal général, propriété intellectuelle et droit des successions.\r\n\r\nA la suite d’un passage au cabinet du Procureur général près la Cour de cassation puis au sein d’un cabinet d’avocats aux Conseils (SCP Waquet, Farge et Hazan), j'ai rejoint le Cabinet en janvier 2015.\r\n\r\nJ'exerce principalement dans les domaines du droit pénal et des libertés fondamentales. Il exerce également en droit de la presse, droit pénal général, droit pénal des affaires, droit de la responsabilité civile, droit du dommage corporel et droit administratif.",
      availibility_start_date: '1/24/19',
      availibility_end_date: '12/27/21',
      availibility_frequency: 'Ponctuellement',
   },

   //solliciteur
   {
      username: 'A.S.A.H',
      email: 'asah@gmail.com',
      password: 'asah@gmail.com',
      userType: 'solliciteur',
      location: 'Paris',
      description:
         "Cette association de loi 1901, à but non lucratif, a été créée en 1996. C’est avant tout un réseau de trente ONG d’inspiration chrétienne, agissant dans l’urgence, le développement, le plaidoyer, l’environnement ou la solidarité au Nord et au Sud. Son objet est de favoriser la réflexion et la collaboration entre ses membres, de mutualiser les compétences et les ressources matérielles, de renforcer l’efficacité et la qualité des actions, et plus largement de faire travailler ensemble tous les acteurs de la solidarité, y compris les ONG non membres, les entreprises, les structures de formation et les organismes publics. Le réseau est présent dans plus de 120 pays.\r\n\r\nA.S.A.H est un lieu d’échange, de créativité et d’ouverture. Elle fournit des services aux acteurs travaillant dans le domaine de la solidarité nationale et internationale. A.S.A.H. pense que la solidarité doit s’appliquer aussi bien «au loin» qu’ «au près» et doit prendre en compte plus que jamais le facteur environnemental. L’association fonde sa démarche sur la collaboration et la synergie entre les différents acteurs afin de mutualiser les connaissances et l’expertise de chacun. Le soutien aux actions de solidarité trouve également ses racines dans l’information et la sensibilisation du grand public.\r\n\r\nA.S.A.H porte les programmes suivants :\r\n\r\nSalon Des Solidarités\r\nPortail-Humanitaire.org\r\nLa collection #Association\r\nEnfin, j'ai développé une activité de conseil auprès de différents Etats, ONG et institutions internationales. Il plaide devant de nombreuses juridictions ordinaires (Cours d’Assises, Tribunaux correctionnels, Tribunaux de grande instance, Cour d’Appel), mais aussi devant les autorités administratives (AMF) et les juridictions régionales (Cour Européenne des Droits l’Homme, Cour de Justice de la CEDEAO, etc.).\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n\r\nTitulaire de trois Diplômes d’Etudes Approfondies (DEA), Finances publiques et fiscalité et Droit des affaires et droit économique (Université Paris II) et Droit anglais et nord-américain des affaires (Université Paris I), j'ai rejoint le Cabinet en janvier 2003 et en est associée depuis 2017.\r\n\r\nElle exerce principalement dans les domaines du droit et du contentieux des affaires, du droit civil et du patrimoine y compris en droit des successions et des voies d’exécution.\r\n",
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_da1999984c430208b946f3759554707f.jpg',
   },
   {
      username: 'ABCIS',
      email: 'abcis@gmail.com',
      password: 'abcis@gmail.com',
      userType: 'solliciteur',
      location: 'Rennes',
      description:
         'ABCIS est la plate-forme multipartenariale des acteurs de la coopération internationale et de la solidarité en Bretagne.\r\n\r\nLa plateforme ABCIS est un réseau d’échange, d’appui et de concertation multi-acteurs (associations, collectivités territoriales, services de l’Etat, établissements publics) dans le domaine de la coopération décentralisée et de la solidarité internationale. Elle a pour objectif d’améliorer la qualité des actions de coopération décentralisée et de solidarité internationale menées en Bretagne, selon une dynamique d’échanges, de travail collaboratif, de concertation et de subsidiarité.\r\n\r\nLa plateforme ABCIS est une structure informelle (au sens où elle n’a pas d’existence juridique autonome) animée par la Région Bretagne. Elle trouve son origine dans l’organisation des Assises régionales de la Solidarité Internationale à Lorient en 2005. Celles-ci ont mobilisé pour leur préparation un comité de pilotage associant des représentants des Collectivités territoriales (Région, Départements, plateforme CBCI) du CESER, des associations de solidarité internationale (CASI Bretagne) et des collectivités. Ces premières rencontres ont fait émerger un réel besoin de concertation. C’est pourquoi ce comité a décidé de poursuivre ses échanges dans un cadre régulier et s’est efforcé de s’élargir à de nouvelles familles d’acteurs (migrants, éducation, enseignement supérieur, agriculture, santé, monde économique, culture et sport).',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_4f5fd845b1b8a26f46f6de21774f504c.jpg',
   },
   {
      username: 'ACTED',
      email: 'acted@gmail.com',
      password: 'acted@gmail.com',
      userType: 'solliciteur',
      location: 'Paris',
      description:
         'ACTED est une ONG française de solidarité internationale. Deuxième ONG française, ACTED a pour vocation de soutenir les populations vulnérables à travers le monde en apportant une réponse humanitaire adaptée aux besoins précis des populations dans les situations de crise et au respect de leur dignité, tout en favorisant et mettant en œuvre des opportunités pour un développement durable, et assurer le lien entre urgence, réhabilitation et développement. Indépendante, privée et à but non lucratif, ACTED œuvre dans le respect d’une impartialité politique et religieuse stricte, selon les principes de non-discrimination et de transparence et les valeurs de responsabilité, d’impact, d’esprit d’entreprise et d’inspiration. ACTED s’engage à répondre aux urgences et à développer la résilience face aux situations de crise, à co-construire une gouvernance efficace et à promouvoir une croissance inclusive et durable. Nos équipes viennent en aide aux populations touchées par les crises grâce à une ap­proche à la fois globale et locale, multidisciplinaire et adap­tée à chaque contexte dans 35 pays afin de faire face aux situations d’urgence, pour soutenir les projets de réhabilitations et accompagner les dynamiques de développement avec plus de 450 projets par an auprès de 8 millions de bénéficiaires.\r\n\r\nLes équipes d’ACTED garantissent que les interventions effectuées en temps de crise soient utiles et pérennes, car seul un soutien sur le long terme – en demeurant sur place après l’urgence et en impliquant les communautés – permet de rompre le cycle de pauvreté et d’accompagner les populations sur la voie du développement.\r\n\r\nSur le terrain, ACTED intervient dans les secteurs suivants : aide humanitaire d’urgence, sécurité alimentaire, promotion de la santé, éducation et formation, développement économique, microfinance, soutien institutionnel et dialogue régional, promotion culturelle.\r\n\r\nForte de son expérience au plus près des besoins et des situations auprès des communautés vulnérables à travers le monde, ACTED contribue aujourd’hui à l’agenda international en faveur des Objectifs de Développement Durable (ODD), grâce à plusieurs initiatives.\r\n\r\nACTED s’engage pour promouvoir et développer des approches et des initiatives innovantes, les principes humanitaires, les nouvelles solidarités et des convergences entre opérateurs privés, acteurs publics et ONG du Nord et du Sud sur des thèmes tels que la microfinance et le social business, l’accès durable au revenu, la prévention et réduction des catastrophes, la promotion de la gouvernance locale, l’évaluation et l’aide à la coordination de l’urgence humanitaire, la culture et le développement, le développement durable, l’accès à la santé dans le continuum humanitaire, etc.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_da1999984c430208b946f3759554707f.jpg',
   },
   {
      username: 'Equilibres et Populations',
      email: 'e@gmail.com',
      password: 'e@gmail.com',
      userType: 'solliciteur',
      location: 'Toulouse',
      description:
         'Créée en 1993, par des médecins et des journalistes, dans le contexte de la conférence internationale sur la population et le développement du Caire, Equilibres & Populations travaille à améliorer les conditions de vie et le statut des femmes, facteur essentiel d’un développement juste et durable.\r\nAdopter une démarche participative\r\nEquilibres & Populations adopte aussi systématiquement que possible une démarche participative dans la conduite de son action. Nous considérons en effet que cette démarche est un gage de qualité, notamment en termes d’appropriation, de responsabilisation, de durabilité, d’ancrage, d’autonomisation et de légitimité.\r\nFondée sur l’instauration d’un dialogue continu, cette démarche a pour objectif principal d’associer étroitement les différentes parties-prenantes à notre action : nos partenaires associatifs, le personnel sanitaire et social, les parlementaires, les décideurs et, bien entendu, les populations des zones d’intervention.\r\n\r\nNouer des partenariats\r\n\r\nAu lieu d’opter pour une croissance interne, Equilibres & Populations a choisi de développer le périmètre et la qualité de ses actions grâce à une stratégie d’alliances et de partenariats multi-acteurs (OSC, parlementaires, journalistes, chercheurs, fonctionnaires, experts techniques,…). Ce mode d’organisation s’appuie sur la complémentarité des savoir-faire et renforce l’adaptabilité et la réactivité.\r\nDepuis plus de dix ans, Equilibres & Populations collabore de manière continue avec des associations ouest-africaines avec lesquelles elle partage une vision commune. Dotés d’une connaissance fine des sociétés et de leurs dynamiques, ces partenaires promeuvent un changement dans leurs pays respectifs. Riches de nos complémentarités, nous avons établi au cours du temps des relations de confiance qui nous permettent de construire et de mener ensemble des programmes auprès des populations ainsi que des actions de plaidoyer adaptés aux situations sociopolitiques locales.\r\n\r\nTravailler en réseaux\r\nEquilibres & Populations a également su créer ou rejoindre des synergies entre acteurs du développement : organisations de solidarité internationales (OSI), structures de recherche et universités, institutions publiques, entreprises…\r\nNous collaborons avec des réseaux d’OSI en France, en Europe et en Afrique francophone subsaharienne. Nous nous y investissons à différents niveaux, en collaborant aux travaux et aux prises de position collectifs, en coordonnant des groupes de travail ou en participant aux organes associatifs (conseil d’administration).',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_6a06c6ff1fbcd51bb2dd2e2c8c2f6599.png',
   },
   {
      username: 'CARE France',
      email: 'c@gmail.com',
      password: 'c@gmail.com',
      userType: 'solliciteur',
      location: 'Paris',
      description:
         'CARE est une association de solidarité internationale, non confessionnelle et apolitique, qui regroupe 14 associations nationales travaillant ensemble à la mise en œuvre de plus de 1000 projets d’urgence et de développement dans plus de 80 pays en Afrique, en Asie, en Amérique latine, au Moyen-Orient et en Europe de l’Est.\r\n\r\nCARE est une des plus importantes organisations de solidarité internationale dans le monde et vient en aide chaque année à près de 122 millions de personnes.\r\n\r\nDes principes : construire, transformer, responsabiliser et rendre autonomes les plus démunis, tout en protégeant leurs droits économiques et sociaux.\r\n\r\nUn objectif : contribuer à la diminution de l’extrême pauvreté. CARE participe au mouvement mondial qui s’est engagé de manière concertée à diminuer de moitié la pauvreté d’ici à 2015.\r\n\r\nVisitez notre site internet -> http://www.carefrance.org\r\n\r\nSuivez-nous sur Facebook -> http://www.facebook.com/CAREFrance',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_f65ce8eb51093aaa7424447610acd1d1.jpg',
   },
   {
      username: 'ATD Quart Monde',
      email: 'atd@gmail.com',
      password: 'atd@gmail.com',
      userType: 'solliciteur',
      location: 'Grenoble',
      description:
         'ATD Quart Monde est un Mouvement international, sans appartenance politique ou confessionnelle. Créé avec des personnes en grande pauvreté, il mène des actions qui visent à détruire la misère par l’accès de tous aux droits fondamentaux.\r\n\r\nIl développe particulièrement des actions d’accès au savoir, à la culture, à la prise de parole (Bibliothèques de rue, Festivals des Arts et des Savoirs, Universités populaires…). Il mène également une activité d’édition et de recherche avec les personnes qui vivent l’exclusion.\r\n\r\nIl se mobilise afin qu’aux plans local, national et international, les personnes démunies soient écoutées et représentées, et que la lutte contre la grande pauvreté soit une priorité (actions auprès des institutions politiques, des professionnels et du grand public).',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_d87419eadf4249387a1e62c99b4b35f8.png',
   },
   {
      username: 'Grdr – Migration-Citoyenneté-Développement',
      email: 'grdr@gmail.com',
      password: 'grdr@gmail.com',
      userType: 'solliciteur',
      location: 'Annecy',
      description:
         'La mobilité est une richesse pour des territoires solidaires\r\n\r\nLe Grdr est une organisation de solidarité internationale à caractère associatif (loi 1901) et à but non lucratif, sans affiliation politique et religieuse.\r\n\r\nEn France tout comme en Afrique de l’Ouest, des femmes et des hommes, étudiants, agriculteurs, migrants, jeunes actifs, retraités ou personnes simplement concernées par la thématique « migration, citoyenneté et développement », se mobilisent aux côtés du Grdr, pour apporter leur soutien, donner de leur temps et proposer leurs compétences bénévolement.\r\n\r\nLe Grdr s’engage depuis 1969 pour la promotion sociale, culturelle et économique des migrants subsahariens en France et de leurs régions d’origine. Depuis deux générations, l’association accompagne ces « travailleurs », pour assurer à leurs familles, villages et pays un meilleur accès à l’éducation, à la santé, à l’eau comme à la production agricole et à la micro-entreprise. Le Grdr c’est aujourd’hui une équipe de 100 salariés et bénévoles de 13 nationalités différentes, qui intervient dans 5 pays (Mali, Mauritanie, Sénégal, Guinée Bissau, France) et une soixantaine de communes, avec une vingtaine de partenaires européens et ouest-africains. Chaque année, des écoles, des dispensaires, des puits, des barrages sont réalisés avec notre appui, tandis qu’en France des associations de migrants qui interviennent notamment auprès des femmes, des migrants les plus âgés et dans la lutte contre les discriminations reçoivent notre soutien…\r\n\r\nL’engagement des adhérents, salariés et partenaires du Grdr lui permet de poursuivre son action auprès des migrants et de leurs régions d’origine et de contribuer au « vivre ensemble » dans une France qui doute de son projet de société. Pour le Grdr, il passe par la reconnaissance de l’apport des migrants en France et en Europe et par la solidarité avec les pays d’origine.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_581a39ee2c0dfbd99381616fac39f191.jpg',
   },
   {
      username: 'Habitat-Cité',
      email: 'h@gmail.com',
      password: 'h@gmail.com',
      userType: 'solliciteur',
      location: 'Nancy',
      description:
         'Habitat-Cité se mobilise contre l’augmentation des inégalités, dans un monde où la misère et les conflits marginalisent une part croissante de l’humanité. Injustices, discriminations, montée du racisme et droits humains bafoués affectent la dignité des personnes et complexifient leur accès aux droits.\r\n\r\nCes inégalités entraînent une précarisation de l’habitat avec la multiplication de logements précaires et insalubres : bidonvilles, squats et occupations de terrain sans droit ni titre.\r\n\r\n> Objectif à long terme \r\n\r\nL’accès à des conditions de vie dignes et à l’autonomie pour tous par l’habitat et l’accès aux droits essentiels.\r\n\r\n> Missions / Axes  \r\n\r\nI – Favoriser l’accès à un habitat décent,  sans discrimination, par :\r\n\r\nla construction / la réhabilitation de logements ;\r\nl’accompagnement vers des solutions pérennes d’hébergement ou de logement ;\r\nou, à défaut, par l’amélioration / la transformation de l’habitat précaire (squats, bidonvilles)\r\nII – Accès aux droits : accompagner les personnes dans leurs démarches d’accès aux droits : droits d’asile et droit à séjourner sur le territoire français, accès aux soins, scolarisation / formation, accès à l’emploi\r\n\r\nIII – Plaidoyer : apporter une expertise, informer et interpeller les autorités publiques et les citoyens sur la problématique de l’habitat précaire, des conditions d’accueil des migrants, de la lutte contre les discriminations et de la solidarité internationale\r\n\r\n \r\n\r\n> Publics\r\n\r\nLes actions d’Habitat-Cité s’adressent à un public confronté au mal logement, à l’exclusion et qui rencontre des difficultés à accéder à ses droits.\r\n\r\nEn France, ses actions s’orientent vers un public migrant principalement russophone et roumanophone, vivant en habitat indigne (bidonville, squat, hébergement d’urgence) ou dépourvu de logement (à la rue), dont une majorité de Tchétchènes et de Roms. A l’international, l’association développe plus particulièrement des projets en faveur des femmes touchées par la précarité (femmes seules avec enfants, femmes victimes de violence).\r\n\r\n \r\n\r\n> Territoires d’action\r\n\r\nHabitat-Cité a développé une expertise d’intervention sur des territoires urbains en marge. En France, l’association concentre son activité en Ile-de-France. A l’international, elle agit prioritairement en Amérique latine et Europe centrale et orientale. Elle mène actuellement un projet depuis plusieurs années à Granada au Nicaragua et des missions de prospection menées en Colombie, en Roumanie et en Arménie doivent donner lieu à de nouveaux projets.\r\n\r\n \r\n\r\n> Champs d’intervention/ Domaines d’action\r\n\r\nHabitat-Cité intervient dans plusieurs domaines de l’économie sociale et solidaire et de la solidarité internationale :\r\n\r\nHabitat, urbanisme et architecture : lutte contre l’habitat indigne, recherche et promotion de techniques de construction respectueuses de l’environnement incluant l’utilisation de matériaux locaux écologiques\r\nAccompagnement social et juridique des personnes en situation d’exclusion et de mal logement : droit d’asile et droit au séjour, accès aux soins, accès à l’hébergement et au logement, accès à l’emploi (formation, insertion professionnelle et mise en place d’activités génératrices de revenus)\r\nGestion de projets de solidarité internationale : diagnostic initial, conception, suivi et évaluation de projets, accompagnement des partenaires locaux dans le renforcement des compétences et la recherche de financements, médiation bailleurs/partenaires\r\nProduction documentaire : production et diffusion de films et de reportages photographiques\r\nCette pluridisciplinarité permet à Habitat-Cité de proposer une approche transversale qui prend en compte la multiplicité des difficultés auxquelles sont confrontées les personnes accompagnées et les partenaires locaux.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_4a7d01fd24d28f2b27ff0041cc938a89.jpg',
   },
   {
      username: 'France Libertés – Fondation Danielle Mitterrand',
      email: 'france@gmail.com',
      password: 'france@gmail.com',
      userType: 'solliciteur',
      location: 'Bordeaux',
      description:
         'Fondée en 1986 par Mme Danielle Mitterrand, France Libertés est une Fondation reconnue d’utilité publique, à but non lucratif, et dotée du statut consultatif auprès du Conseil Economique et Social des Nations Unies depuis 1991.\r\n\r\nFrance Libertés est un acteur du mouvement de solidarité internationale. La Fondation a pour objet de construire un monde plus juste et plus solidaire dans lequel chacun puisse exercer sa liberté dans le respect de l’autre. Les principaux domaines d’action de France Libertés sont la défense du droit des peuples à disposer de leurs richesses et le droit d’accès à l’eau en tant que bien commun de l’humanité.\r\n\r\nFrance Libertés soutient des projets à l’international et en France, et mènent des actions de plaidoyer et de sensibilisation des citoyens, en France et à l’international.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_7264de05accb9eaba31761761398e92c.jpg',
   },
   {
      username: 'AIDES',
      email: 'aides@gmail.com',
      password: 'aides@gmail.com',
      userType: 'solliciteur',
      location: 'Toulouse',
      description:
         'AIDES, membre de la Coalition Internationale Sida – PLUS, est l’une des plus importantes associations européennes de lutte contre le VIH/sida et les hépatites. Toute l’année, des missions de collecte de fonds sont organisées et des postes de recruteurs de donateurs sont à pourvoir partout en France.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_452de32854acaebfb81e115d34106e05.jpg',
   },
   {
      username: 'Agter',
      email: 'agter@gmail.com',
      password: 'agter@gmail.com',
      userType: 'solliciteur',
      location: 'Rennes',
      description:
         'Face au constat de dégradation et d’épuisements des ressources naturelles liés notamment à la perte de contrôle de ces ressources par les populations locales, l’association veut permettre une mise à disposition et un échange d’information sur ces thématiques. Convaincus du lien entre pauvreté et difficultés d’accès aux ressources, nous estimons tout aussi indispensable de construire des alternatives aux politiques actuelles. L’association entend contribuer ainsi à la conception de nouvelles formes de gestion des ressources naturelles et foncières adaptées aux défis du 21ème siècle : le changement climatique, la faim dans le monde, l’accroissement des inégalités et la montée des conflits internes aux pays…\r\n\r\nLes objectifs d’aGter sont alors définis tels que aGter se propose de contribuer à inventer de nouvelles formes de gouvernance des ressources naturelles en mettant en place des dynamiques qui puissent :\r\n\r\naider les organisations paysannes et rurales et les organisations de pêcheurs artisanaux à avoir une meilleure connaissance de leur propre réalité au travers de l’appréhension des différentes expériences au niveau mondial, des contextes dans lesquels elles se sont développées, des acquis et des limites de chacune,\r\nfaciliter des échanges entre acteurs, entre organisations de producteurs de pays et de continents différents d’une part, mais aussi entre organisations payquand il serait prêt.sannes et organisations de pêcheurs et d’autres secteurs de la société ,\r\ndiffuser des informations pertinentes à un public large sur les enjeux de la gouvernance des ressources naturelles.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_0563053db4a30aac3b4464e9f6b8b32a.jpg',
   },
   {
      username: 'Aide et Action',
      email: 'a&a@gmail.com',
      password: 'a&a@gmail.com',
      userType: 'solliciteur',
      location: 'Nice',
      description:
         'Créée en 1981, Aide et Action est une association de solidarité internationale spécialiste de l’éducation. Présente dans 25\r\n\r\npays, elle développe 87 projets en 2014.\r\n\r\nSa mission : favoriser l’accès du plus grand nombre à une éducation de qualité.\r\n\r\nPour atteindre cet objectif, Aide et Action se concentre sur 9 domaines d’intervention prioritaires :\r\n\r\nL’accès et la qualité de l’éducation,\r\nLa petite enfance,\r\nL’éducation des filles et des femmes\r\nL’éducation inclusive,\r\nL’éducation au développement et à la citoyenneté mondiale\r\nL’éducation à la vie,\r\nL’éducation à la santé,\r\nLa migration,\r\nL’urgence et la post-urgence.\r\nDans chacun de ses projets, Aide et Action favorise l’autonomie des communautés dans le respect de leur culture. Tous les acteurs (communautés, Etat, associations locales, parents d’élèves, enseignants…) participent d’un bout à l’autre des projets. L’association les soutient pour qu’ils décident, élaborent, mettent en œuvre et évaluent leurs propres projets de développement.\r\n\r\n \r\n\r\nAide et Action est une association reconnue d’utilité publique, agréée par le ministère de l’Education nationale; Elle est soutenue par environ 50 000 parrains et donateurs réguliers ainsi que plus de 300 bénévoles.\r\n\r\n \r\n\r\nLe public peut soutenir Aide et Action en souscrivant notamment à des parrainages individuels, collectifs ou de projets.',
      logo:
         'http://www.portail-humanitaire.org/wp-content/sabai/File/files/l_af8081ba0f2ca4857c1a7231eb62b5e8.png',
   },
];

User.create(users)
   .then((users) => {
      console.log(`${users.length} users created.`);
   })
   .catch((err) => console.error(err));
