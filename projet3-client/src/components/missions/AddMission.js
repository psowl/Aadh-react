import React from 'react';
import service from '../auth-service';
import { AiOutlineLock } from 'react-icons/ai';

class AddMission extends React.Component {
   state = {
      title: '',
      sector: '',
      expertise_required: '',
      description: '',
      location: '',
      start_date: '',
      end_date: '',
      availability_frequency: '',
      status: '',
      requiredSkills: '',
      validationCheck: true,
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      const {
         title,
         sector,
         expertise_required,
         description,
         location,
         start_date,
         end_date,
         availability_frequency,
         status,
         requiredSkills,
      } = this.state;

      service
         .post('/api/missions', {
            title,
            sector,
            expertise_required,
            description,
            location,
            start_date,
            end_date,
            availability_frequency,
            status,
            requiredSkills,
         })
         .then(() => {
            // this.props.getData();
            // console.log("getData 🧩", this.props.getData())

            this.setState({
               title: '',
               sector: '',
               expertise_required: '',
               description: '',
               location: '',
               start_date: '',
               end_date: '',
               availability_frequency: '',
               status: '',
               requiredSkills: '',
            });
            //Rediriger à la page missions
            this.props.history.push('/missions');
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      //dès l'affichage du formulaire (pas à la soumission) : ne pouvoir créer une mission que si on est logué
      if (!this.props.loggedInUser) {
         return (
            <div className='enChargement'>
               Merci de vous identifier
               <AiOutlineLock size={120} />
            </div>
         );
      }
      //ne voir le quetionnaire que si on est solliciteur
      if (this.props.loggedInUser.userType !== 'solliciteur') {
         return (
            <div className='enChargement'>
               Un compte solliciteur est nécessaire pour accéder à cette page
               <AiOutlineLock size={120} />
            </div>
         );
      }
      return (
         <div className='missionform parentForm addMission'>
            <form className='formStyle' onSubmit={this.handleFormSubmit}>
               <h1>Publier une mission</h1>
               <p>
                  <label>Titre/objet de la mission :</label>
                  <input
                     type='text'
                     name='title'
                     value={this.state.title}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>

               <p>
                  <label>Secteur :</label>
                  <input
                     type='text'
                     name='sector'
                     value={this.state.sector}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>

               <p>
                  <label>Lieu :</label>
                  <input
                     type='text'
                     name='location'
                     value={this.state.location}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Début de mission :</label>
                  <input
                     type='date'
                     name='start_date'
                     value={this.state.start_date}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Fin de mission :</label>
                  <input
                     type='date'
                     name='end_date'
                     value={this.state.end_date}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Expertise attendue</label>
                  <select
                     name='expertise_required'
                     value={this.state.expertise_required}
                     placeholder='expertise'
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner l'expertise</option>
                     <option value="Droits de l'Homme et de l'enfant">
                        Droits de l'Homme et de l'enfant
                     </option>
                     <option value='Soutien des associations et des ESS'>
                        Soutien des associations et des ESS{' '}
                     </option>
                     <option value='Etudes de droit comparé'> Etudes de droit comparé</option>
                     <option value='Formation'> Formation</option>
                  </select>
               </p>
               <p>
                  <label>Rythme</label>
                  <select
                     name='availability_frequency'
                     value={this.state.availability_frequency}
                     placeholder='Rythme'
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner le rythme</option>
                     <option value='Régulier'> Régulier</option>
                     <option value='Ponctuellement'> Ponctuellement</option>
                     <option value='Temps plein'> Temps plein</option>
                  </select>
               </p>
               <p>
                  <label>Description:</label>
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Compétences requises</label>
                  <select
                     type='text'
                     name='requiredSkills'
                     value={this.state.requiredSkills}
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner ici</option>
                     <option value='Règlement de litiges'> Règlement de litiges</option>
                     <option value='Rédaction des statuts ONG'> Rédaction des statuts ONG</option>
                     <option value='Contentieux'> Contentieux</option>
                     <option value='Rédaction de contrats'> Rédaction de contrats</option>
                     <option value='Langue anglaise'> Langue anglaise </option>
                  </select>
               </p>

               <p>
                  <button>Publier</button>
               </p>
            </form>
         </div>
      );
   }
}

export default AddMission;
