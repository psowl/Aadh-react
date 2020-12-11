import React from 'react';
import service from '../auth-service';

class EditMission extends React.Component {
   state = {
      theMission: {},
   };

   componentDidMount() {
      this.getSingleMission();
   }

   //aller chercher la mission dont l'id est dans l'url
   getSingleMission = () => {
      const params = this.props.match.params; //passer la props dans le routing
      console.log('params', params);
      service
         .get(`http://localhost:5000/missions/${params.id}`)
         .then((responseFromApi) => {
            const theMission = responseFromApi.data;
            console.log('theMission', theMission);
            this.setState({ theMission: theMission });
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
      } = this.state.theMission;

      event.preventDefault();

      service
         .put(`/missions/${this.props.theMission._id}`, {
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
            this.getTheMission();
            //Rediriger à la page missions
            this.props.history.push('/missions');
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
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
      return (
         <div className=' editMissionForm parentForm'>
            <form className='formStyle' onSubmit={this.handleFormSubmit}>
               <h1>Editer la mission</h1>
               <p>
                  <label>Secteur</label>
                  <input
                     type='text'
                     name='sector'
                     value={this.state.theMission.sector}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Titre/objet de la mission :</label>
                  <input
                     type='text'
                     name='title'
                     value={this.state.theMission.title}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Lieu :</label>
                  <input
                     type='text'
                     name='location'
                     value={this.state.theMission.location}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Début de mission :</label>
                  <input
                     type='date'
                     name='start_date'
                     value={this.state.theMission.start_date}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Fin de mission :</label>
                  <input
                     type='date'
                     name='end_date'
                     value={this.state.theMission.end_date}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Expertise attendue</label>
                  <select
                     name='expertise_required'
                     value={this.state.theMission.expertise_required}
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
                     value={this.state.theMission.availability_frequency}
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
                     value={this.state.theMission.description}
                     onChange={(e) => this.handleChange(e)}
                  />
               </p>
               <p>
                  <label>Compétences requises</label>
                  <select
                     type='text'
                     name='requiredSkills'
                     value={this.state.theMission.requiredSkills}
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

export default EditMission;
