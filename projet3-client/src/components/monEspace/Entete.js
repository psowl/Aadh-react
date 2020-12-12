import React from 'react';

function Entete(props) {
   return (
      <div className='mon_espace_top'>
         <div>
         
            <img src={props.user.profilePic} alt='profilePic' />
            <h2>{props.user.username}</h2>
         </div>
      </div>
   );
}

export default Entete;
