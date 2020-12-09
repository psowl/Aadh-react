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
               <div>
                  <HiOutlineLocationMarker size={40} color='white' /> <h3>{props.user.location}</h3>
               </div>
               <Link to=''>
                  <FaRegEdit size={40} />
               </Link>
            </div>
            <ul>
               <li>
                  <p>Inscription faite le:</p> <h3>{formatDate(props.user.createdAt)}</h3>
               </li>
               <li>
                  <p>Nombre d'annonces postées depuis l'inscription</p>
                  <h3>{props.missions.length}</h3>
               </li>
               <li>
                  <p>Email</p> <h3>{props.user.email}</h3>
               </li>
               <li>
                  <p>Changer mon mot de passe</p> <h3>*************</h3>
               </li>
               <li>
                  <p>Cause défendue:</p> <h3>{props.user.cause}</h3>
               </li>
               <li>
                  <p>Description</p> <h3>{props.user.description}</h3>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Profile;
