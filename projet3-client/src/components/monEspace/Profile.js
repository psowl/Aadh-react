import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GrStatusGoodSmall } from 'react-icons/gr';
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

   const styleTextStatus = (status) => {
      let styleText;
      if (status === 'Disponible') {
         styleText = { color: 'green', textShadow: '1px 1px white' };
      } else if (status === 'En mission') {
         styleText = { color: 'red', textShadow: '1px 1px white' };
      } else {
         styleText = { color: 'orange', textShadow: '1px 1px white' };
      }
      return styleText;
   };

   const styleIconStatus = (status) => {
      let color;
      if (status === 'Disponible') {
         color = 'green';
      } else if (status === 'En mission') {
         color = 'red';
      } else {
         color = 'orange';
      }
      return color;
   };

   return (
      <div className='profile'>
         <div className='user_details'>
            <div className='location'>
               <HiOutlineLocationMarker size={40} color='white' /> <h4>{props.user.location}</h4>
            </div>
            <ul className='status'>
               <GrStatusGoodSmall size={20} color={styleIconStatus(props.user.status)} />
               <h4 style={styleTextStatus(props.user.status)}>{props.user.status}</h4>
            </ul>

            <ul className='list_non_modifiable'>
               <li>
                  <p>Inscription faite le </p>
                  <h4>{formatDate(props.user.createdAt)}</h4>
               </li>
               <li>
                  <p>Type de compte</p>
                  <h4 style={{ textTransform: 'capitalize' }}>{props.user.userType}</h4>
               </li>
               {props.user.userType === 'solliciteur' && (
                  <li>
                     <p>Nombre d'annonces postées</p>
                     <h4>{props.missions.length}</h4>
                  </li>
               )}
               {props.user.userType === 'bénévole' && (
                  <li>
                     <p>Nombre de missions effectuées</p>
                     {/* filtrer les missions dont le volonteerSelected est l'id du user */}
                     <h4>{countMissions()}</h4>
                  </li>
               )}
               <li>
                  <p>Email</p> <h4>{props.user.email}</h4>
               </li>
            </ul>
            {props.loggedInUser._id === props.user._id && (
               <Link to={`/users/${props.user._id}/edit`}>
                  <FaRegEdit size={40} />
               </Link>
            )}
            <ul className='list_modifiable'>
               <li>
                  <p>Mot de passe</p> <h4>*************</h4>
               </li>
               {props.user.userType === 'solliciteur' && (
                  <li>
                     <p>Cause défendue</p> <h4>{props.user.cause}</h4>
                  </li>
               )}
               {props.user.userType === 'bénévole' && (
                  <div>
                     <li>
                        <p>Expertise</p>
                        <h4>{props.user.expertise}</h4>
                     </li>
                     <li>
                        <p>Date de début de disponibilité</p>
                        <h4>{formatDate(props.user.availability_start_date)}</h4>
                     </li>
                     <li>
                        <p>Date de fin de disponibilité</p>
                        <h4>{formatDate(props.user.availability_end_date)}</h4>
                     </li>
                     <li>
                        <p>Rythme de disponibilité</p>
                        <h4>{props.user.availability_frequency}</h4>
                     </li>
                  </div>
               )}
            </ul>
            <div className='description'>
               <p>Description</p> <h4>{props.user.description}</h4>
            </div>
         </div>
      </div>
   );
};

export default Profile;
