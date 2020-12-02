import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import OneCandidate from './OneCandidate';
import service from '../auth-service';

class Aconfirmer extends React.Component {
   state = { candidateChosen: '' };

   //récupérer les id des candidates checked dans l'enfant
   confirmCandidate = (candidateId) => {
      console.log('candidat confirmé', candidateId);
      this.setState({ candidateChosen: candidateId });
   };

   //updater la propriété "candidates" de la mission avec l'id du candidata séléctionné
   toConfirm = (event, missionId) => {
      console.log('id candidat à ajouter à candidates', this.state.candidateChosen);
      event.preventDefault();
      console.log('missionId', missionId);

      service
         .put(`http://localhost:5000/missions/${missionId}`, {
            volonteerSelected: this.state.candidateChosen,
         })
         .then(() => {
            console.log('✈️ ok');
         })
         .catch((err) => console.log('error', err));
   };

   //aller chercher les missions avec id solliciteur et statut à valider

   render() {
      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.props.missions.length === 0) {
         return <p>En chargement</p>;
      }

      return (
         <div>
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
                                 <OneCandidate
                                    candidat={candidate}
                                    confirmCandidate={this.confirmCandidate}
                                 />
                              </li>
                           ))}
                        </ul>
                        <button onClick={(event) => this.toConfirm(event, el._id)}>
                           {/*attention:ici el n'est pas un paramètre, c'est une variable*/}
                           Confirmer
                        </button>
                     </li>
                  ))}
            </ul>
         </div>
      );
   }
}

export default Aconfirmer;
