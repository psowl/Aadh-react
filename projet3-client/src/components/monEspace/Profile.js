import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = (props) => {
   const formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   //pour les bénévoles: compter le nbre de mission faites (missions avec ID du user dans volonteerSelected)
   const countMissions = () => {
      let missions = props.missions.map((el) => el.volonteerSelected === props.user._id);
      return missions.length;
   };

   return (
      <div className='profile'>
         <div className='user_details'>
            <div>
               <HiOutlineLocationMarker size={40} color='white' /> <p>{props.user.location}</p>
            </div>
            {props.user.userType === 'bénévole' && (
               <div>
                  {/* {props.user.status === "Disponible" && } */}
                  <p>{props.user.status}</p>
               </div>
            )}
            <ul className='list_non_modifiable'>
               <li>
                  <h3>Inscription faite le </h3>
                  <p>{formatDate(props.user.createdAt)}</p>
               </li>
               <li>
                  <h3>Type de compte</h3> <p>{props.user.userType}</p>
               </li>
               {props.user.userType === 'solliciteur' && (
                  <li>
                     <h3>Nombre d'annonces postées depuis l'inscription</h3>
                     <p>{props.missions.length}</p>
                  </li>
               )}
               {props.user.userType === 'bénévole' && (
                  <li>
                     <h3>Nombre de missions effectuées depuis l'inscription</h3>
                     {/* filtrer les missions dont le volonteerSelected est l'id du user */}
                     <p>{countMissions()}</p>
                  </li>
               )}
               <li>
                  <h3>Email</h3> <p>{props.user.email}</p>
               </li>
            </ul>
            <Link to={`/users/${props.user._id}/edit`}>
               <FaRegEdit size={40} />
            </Link>
            <ul className='list_modifiable'>
               <li>
                  <h3>Mot de passe</h3> <p>*************</p>
               </li>
               {props.user.userType === 'solliciteur' && (
                  <li>
                     <h3>Cause défendue</h3> <p>{props.user.cause}</p>
                  </li>
               )}
               {props.user.userType === 'bénévole' && (
                  <div>
                     <li>
                        <h3>Expertise</h3>
                        <p>{props.user.expertise}</p>
                     </li>
                     <li>
                        <h3>Date de début de disponibilité</h3>
                        <p>{props.user.availibility_start_date}</p>
                     </li>
                     <li>
                        <h3>Date de fin de disponibilité</h3>
                        <p>{props.user.availibility_end_date}</p>
                     </li>
                     <li>
                        <h3>Rythme de disponibilité</h3>
                        <p>{props.user.availibility_frequency}</p>
                     </li>
                  </div>
               )}
            </ul>
            <div className='description'>
               <h3>Description</h3> <p>{props.user.description}</p>
            </div>
         </div>
      </div>
   );
};

export default Profile;
