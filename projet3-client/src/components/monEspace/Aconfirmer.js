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
         .put(`/missions/${missionId}`, {
            volonteerSelected: this.state.candidateChosenId,
            status: 'Pourvue',
         })
         .then(() => {
            console.log(
               `mission ${missionId} updated with candidate selected id ${this.state.candidateChosenId} and status "Pourvue"`
            );
            //une fois que la mission est éditée, refiltrer la liste des missions dans le parent
            this.props.getMissions();
         })
         .catch((err) => console.log('error', err));
   };

   //changer background selon la catégorie de la mission
   changeBackgroundImage = (expertise) => {
      let url = '';
      // let image = { backgroundImage: 'url'(url) };
      // console.log('expertise', expertise);
      if (expertise === "Droits de l'Homme et de l'enfant") {
         url =
            'https://images.unsplash.com/photo-1602437168121-bbf522702d9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1814&q=80';
      } else if (expertise === 'Formation') {
         url =
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
      } else if (expertise === 'Etudes de droit comparé') {
         url =
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
      } else {
         url =
            'https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';
      }
      return { backgroundImage: `url(${url})` };
   };

   render() {
      return (
         <div className='missions_a_confirmer'>
            {this.props.missionsAconfirmer.length === 1 ? (
               <h2>{this.props.missionsAconfirmer.length} mission à confirmer</h2>
            ) : (
               <h2>{this.props.missionsAconfirmer.length} missions à confirmer</h2>
            )}
            <ul className='list_missions'>
               {this.props.dashboard &&
                  this.props.missionsAconfirmer.map((el) => (
                     <li key={el._id} className='each_mission'>
                        <section
                           className='entete'
                           style={this.changeBackgroundImage(el.expertise_required)}
                        >
                           <h3>
                              <Link to={`/missions/${el._id}`}>{el.title}</Link>
                           </h3>
                           <Link to={`/missions/${el._id}/edit`}>
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
