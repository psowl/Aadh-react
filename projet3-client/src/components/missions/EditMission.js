import React from 'react';
import service from '../auth-service';

class EditMission extends React.Component {
   state = {
      title: this.props.theMission.title,
      sector: this.props.theMission.sector,
      expertise_required: this.props.theMission.expertise_required,
      description: this.props.theMission.description,
      peopleRequired: this.props.theMission.peopleRequired,
      location: this.props.theMission.location,
      start_date: this.props.theMission.start_date,
      end_date: this.props.theMission.end_date,
      availability_frequency: this.props.theMission.availability_frequency,
      status: this.props.theMission.status,
      requiredSkills: this.props.theMission.requiredSkills,
   };
   
   handleFormSubmit = (event) => {
      const {
         title,
         sector,
         expertise_required,
         description,
         peopleRequired,
         location,
         start_date,
         end_date,
         availability_frequency,
         status,
         requiredSkills,
      } = this.state;

      event.preventDefault();

      service
         .put(`http://localhost:5000/missions/${this.props.theMission._id}`, {
            title,
            sector,
            expertise_required,
            description,
            peopleRequired,
            location,
            start_date,
            end_date,
            availability_frequency,
            status,
            requiredSkills,
         })
         .then(() => {
            this.props.getTheMission();
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
      return (
         <div className= " editMissionForm parentForm">
            
            <form className="formStyle" onSubmit={this.handleFormSubmit}>
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
            </form>
         </div>
      );
   }
}

export default EditMission;
