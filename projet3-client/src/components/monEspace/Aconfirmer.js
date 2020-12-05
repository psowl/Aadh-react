import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import OneCandidate from './OneCandidate';
import service from '../auth-service';
import { Link } from 'react-router-dom';

class Aconfirmer extends React.Component {
   state = { candidateChosen: '' };

   //récupérer les id des candidates checked dans l'enfant
   confirmCandidate = (candidateId) => {
      console.log('candidat confirmé', candidateId);
      this.setState({ candidateChosenId: candidateId });
   };

   //updater la propriété "candidates" de la mission avec l'id du candidata séléctionné et le status "Pourvue"
   toConfirm = (event, missionId) => {
      console.log('id candidat à ajouter à candidates', this.state.candidateChosenId);
      event.preventDefault();
      console.log('missionId', missionId);

      service
         .put(`http://localhost:5000/missions/${missionId}`, {
            volonteerSelected: this.state.candidateChosenId,
            status: 'Pourvue',
         })
         .then(() => {
            console.log(
               `mission ${missionId} updated with candidate selected id ${this.state.candidateChosenId} and status "Pourvue"`
            );
            //une fois que la mission est éditée, refiltrer la liste des missions dans le parent
            this.props.filterMissions();
         })
         .catch((err) => console.log('error', err));
   };

   //aller chercher les missions avec id solliciteur et statut à valider

   render() {
      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.props.missionsAconfirmer.length === 0) {
         console.log('missionsAconfirmer', this.props.missionsAconfirmer);
         return <p>En chargement</p>;
      }

      return (
         <div className='missions_a_confirmer'>
            <h2>Mission(s) à confirmer</h2>
            <ul className='list_missions'>
               {this.props.dashboard &&
                  this.props.missionsAconfirmer.map((el) => (
                     <li key={el._id} className='each_mission'>
                        <section className='entete'>
                           <h2>
                              <Link to={`/missions/${el._id}`}>{el.title}</Link>
                           </h2>
                           <Link to={`/missions/edit/${el._id}`}>
                              <FaRegEdit size={25} />
                           </Link>
                        </section>
                        <p className='no_link'>Liste des candidats</p>
                        <ul className='list_candidates'>
                           {el.candidates.map((candidate, index) => (
                              <li key={index}>
                                 <OneCandidate
                                    candidat={candidate}
                                    confirmCandidate={this.confirmCandidate}
                                 />
                              </li>
                           ))}
                        </ul>
                        <button
                           className='all_buttons'
                           onClick={(event) => {
                              this.toConfirm(event, el._id);
                           }}
                        >
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
