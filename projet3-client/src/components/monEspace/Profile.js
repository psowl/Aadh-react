import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = (props) => {
   const formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   return (
      <div className='profile'>
         <div className='user_details'>
            <div>
               <HiOutlineLocationMarker size={40} color='white' /> <p>{props.user.location}</p>
            </div>
            <ul>
               <li>
                  <p>Inscription faite le </p>
                  <p>{formatDate(props.user.createdAt)}</p>
               </li>
               <li>
                  <p>Nombre d'annonces postées depuis l'inscription</p>
                  <p>{props.missions.length}</p>
               </li>
               <li>
                  <p>Email</p> <p>{props.user.email}</p>
               </li>
            </ul>
            <Link to={`/users/${props.user._id}/edit`}>
               <FaRegEdit size={40} />
            </Link>
            <ul>
               <li>
                  <p>Mot de passe</p> <p>*************</p>
               </li>
               <li>
                  <p>Cause défendue</p> <p>{props.user.cause}</p>
               </li>
            </ul>
            <div className='description'>
               <p>Description</p> <p>{props.user.description}</p>
            </div>
         </div>
      </div>
   );
};

export default Profile;
