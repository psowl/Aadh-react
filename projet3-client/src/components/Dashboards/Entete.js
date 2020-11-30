import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

function Entete(props) {
   return (
      <div>
         <div>
            <img src={props.user.logo} alt='logo' />
            <h2>{props.user.email}</h2>
         </div>
         <FaRegEdit />
      </div>
   );
}

export default Entete;
