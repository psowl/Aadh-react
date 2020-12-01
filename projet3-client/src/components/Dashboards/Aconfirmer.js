import React from 'react';

class Aconfirmer extends React.Component {
   state = { missions: this.props.missions };
   //aller chercher les missions avec id solliciteur et statut à valider
   render() {
      console.log('this.state.missions[0] from Aconfirmer', this.state.missions[1]);

      return (
         <div>
            <h3>Mission(s) à confirmer</h3>
            {/* map des missions (documents missions avec id du solliciteur*/}
            <ul>
               {this.props.dashboard &&
                  this.state.missions.map((el) => (
                     <li key={el._id}>
                        <h2>{el.title}</h2>
                        {/* map des candidats (document users avec id de la mission) */}
                        <p>Liste des candidats</p>
                        <ul>
                           {el.candidates.map((candidat, index) => (
                              <li key={index}>{candidat}</li>
                           ))}
                        </ul>
                     </li>
                  ))}
            </ul>
            <ul>
               <li>
                  <label></label>
                  <input type='checkbox'></input>
               </li>
            </ul>
            <button>Confirmer</button>
         </div>
      );
   }
}

export default Aconfirmer;
