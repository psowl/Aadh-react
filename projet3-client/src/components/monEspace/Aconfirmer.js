import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

class Aconfirmer extends React.Component {
   state = { candidateChosen: '' };
   //aller chercher les missions avec id solliciteur et statut à valider
   render() {
      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.props.missions.length === 0) {
         return <p>En chargement</p>;
      }
      return (
         <div>
            {this.props.missions.title}
            <h3>Mission(s) à confirmer</h3>
            <ul>
               {this.props.dashboard &&
                  this.props.missions.map((el) => (
                     <li key={el._id}>
                        <section>
                           <h2>{el.title}</h2>
                           <FaRegEdit />
                        </section>
                        <p>Liste des candidats</p>
                        <ul>
                           {el.candidates.map((candidate, index) => (
                              <li key={index}>
                                 <label name='candidate'>
                                    {candidate.username}
                                    <input type='checkbox' />
                                 </label>
                              </li>
                           ))}
                        </ul>
                        <button>Confirmer</button>
                     </li>
                  ))}
            </ul>
         </div>
      );
   }
}

export default Aconfirmer;
