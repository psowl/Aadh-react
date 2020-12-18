import React from 'react';
import service from '../auth-service';
import { withRouter } from 'react-router-dom';

class EditMission extends React.Component {
   state = {
      theMission: null, //initialiser à falsy
      sector: '',
      availability_frequency: '',
      description: '',
      end_date: '',
      start_date: '',
      title: '',
      expertise_required: '',
      location: '',
      requiredSkills: '',
   };

   componentDidMount() {
      this.getSingleMission();
   }

   getSingleMission = () => {
      const { params } = this.props.match;
      service
         .get(`/missions/${params.id}`)
         .then((responseFromApi) => {
            const theMission = responseFromApi.data;
            //set state chaque clé de theMission
            this.setState({ theMission: theMission });
            this.setState({
               sector: theMission.sector,
               availability_frequency: theMission.availability_frequency,
               description: theMission.description,
               end_date: theMission.end_date,
               start_date: theMission.start_date,
               title: theMission.title,
               expertise_required: theMission.expertise_required,
               location: theMission.location,
               requiredSkills: theMission.requiredSkills,
            });
         })
         .catch((err) => {
            console.log('Error while fetching mission', err);
         });
   };

   //soumission des nouvelles données
   handleFormSubmit = (event) => {
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

      event.preventDefault();

      service
         .put(`/missions/${this.state.theMission._id}`, {
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
            this.getSingleMission();
            //Rediriger à la page missions
            this.props.history.push(`/missions/${this.state.theMission._id}`);
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      console.log('change from edit', name, value);
      this.setState({ [name]: value });
   };

   formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   // DELETE MISSION
   deleteMission = () => {
      const { params } = this.props.match;
      service
         .delete(`/missions/${params.id}`)
         .then(() => {
            this.props.history.push('/missions');
         })
         .catch((err) => {
            console.log('Error while deleting mission', err);
         });
   };

   render() {
      console.log('state de EditMission:', this.state);
      if (!this.state.theMission) {
         return <div className='enChargement'>En chargement</div>;
      }
      return (
         <div className=' editMissionForm parentForm'>
            <form className='formStyle' onSubmit={this.handleFormSubmit}>
               <h1>Editer la mission</h1>
               <p>
                  <label>Secteur</label>
                  <input
                     type='text'
                     name='sector'
                     value={this.state.sector}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
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
               </p>{' '}
               <em>{this.formatDate(this.state.start_date)}</em>
               <p>
                  <label>Fin de mission :</label>
                  <input
                     type='date'
                     name='end_date'
                     value={this.state.end_date}
                     onChange={this.handleChange}
                  ></input>
               </p>{' '}
               <em>{this.formatDate(this.state.end_date)}</em>
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
                        Soutien des associations et des ESS
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
                     <option value=''> Sélectionner le ryhtme</option>
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
                  <button>Mettre à jour</button>
               </p>
               <div>
                  <button className='deleteButton' onClick={() => this.deleteMission()}>
                     Supprimer la mission
                  </button>
               </div>
            </form>
            <div></div>
         </div>
      );
   }
}

export default withRouter(EditMission);
