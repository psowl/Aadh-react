import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

function Entete(props) {
   return (
      <div className='mon_espace_top'>
         <div>
            <img src={props.user.logo} alt='logo' />
            <h2>{props.user.username}</h2>
         </div>
         <FaRegEdit size={25} />
      </div>
   );
}

export default Entete;
