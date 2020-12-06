import React from 'react';

class DashboardSearch extends React.Component {
   render() {
      return (
         <div className='dashboardSearch'>
            <ul>
               <li>
                  <h2>Pourvue</h2>
               </li>
               <li>
                  <h2>Disponible</h2>
               </li>
               <li>
                  <h2>Terminée</h2>
               </li>
            </ul>
            <input placeholder='Saisir le mot clé'></input>
         </div>
      );
   }
}

export default DashboardSearch;
