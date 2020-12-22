import React from 'react';
import { Link } from 'react-router-dom';
import MissionCard from './MissionCard';
import { FiRefreshCcw } from 'react-icons/fi';

const MissionTable = (props) => {
   const displaySingular = () => {
      if (props.missions.length >= 2) {
         return props.missions.length + ' missions disponibles';
      } else {
         return props.missions.length + ' mission disponible';
      }
   };

   return (
      <div className='missionTable'>
         <div>
            <h2>
               {displaySingular()} <span></span>
               <FiRefreshCcw className='refreshMissions' onClick={props.displayAll} />
            </h2>

            <ul className='cardContainer'>
               {props.missions.map((mission) => (
                  <li key={mission._id} className='missionCard'>
                     <MissionCard mission={mission} />
                     <Link to={`/missions/${mission._id}`}>
                        <h3>Voir les détails</h3>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default MissionTable;
