import React from 'react';
import axios from 'axios';

class EditMission extends React.Component {
  state = {
    title: this.props.theMission.title, 
    sector:this.props.theMission.sector, 
    expertise_required:this.props.theMission.expertise_required,
    description: this.props.theMission.description,
    peopleRequired:this.props.theMission.peopleRequired,
    location:this.props.theMission.location,
    start_date:this.props.theMission.start_date,
    end_date:this.props.theMission.end_date,
    availability_frequency:this.props.theMission.availability_frequency,
    status:this.props.theMission.status,
    requiredSkills:this.props.theMission.requiredSkills
  }

    
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
      requiredSkills
    }=this.state;

    event.preventDefault();

    axios.put(`http://localhost:5000/missions/${this.props.theMission._id}`, { 
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
    requiredSkills 
  })
      .then( () => {
        this.props.getTheMission();
        //Rediriger à la page missions
        this.props.history.push('/missions');    
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Editer la mission</h3>
        <form onSubmit={this.handleFormSubmit}>
          <p>
          <label>Secteur</label>
          <input type="text" name="sector" value={this.state.sector} onChange={ e => this.handleChange(e)}/>
          </p>
          <p>
          <label>Titre/objet de la mission :</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          </p>
          <p>
          <label>Lieu :</label>
          <input type="text" name="location" value={this.state.location} onChange={ e => this.handleChange(e)}/>
          </p>
          <p>
          <label>Début de mission :</label>
          <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} ></input>
          </p>
          <p>
          <label>Fin de mission :</label>
          <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} ></input>
          </p>
          <p>
          <label>Expertise attendue</label>
          <select name="expertise_required" value={this.state.expertise_required} placeholder="expertise" onChange={this.handleChange}> 
          <option value=""> Sélectionner l'expertise</option>
          <option value="Droits de l'Homme et l'enfant"> Droits de l'Homme et l'enfant</option>
          <option value="Soutien des associations"> Soutien des associations</option>
          <option value="Etudes de droit comparé"> Etudes de droit comparé</option>
          <option value="Formation"> Formation</option>
          </select> 
          </p>
          <p>
          <label>Rythme</label>
          <select name="availability_frequency" value={this.state.availability_frequency} placeholder="Rythme" onChange={this.handleChange}> 
          <option value=""> Sélectionner le ryhtme</option>
          <option value="Régulier"> Régulier</option>
          <option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option></select> 
          </p>
          <p>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          </p>
          <p>
          <label>Compétences requises</label>
        <select type="text" name="requiredSkills" value={this.state.requiredSkills} onChange={this.handleChange}>
          <option value=""> Sélectionner ici</option>
          <option value="Règlement de litiges"> Règlement de litiges</option>
          <option value="Rédaction des statuts ONG"> Rédaction des statuts ONG</option>
          <option value="Contentieux"> Contentieux</option>
          <option value="Rédaction de contrats"> Rédaction de contrats</option>
          <option value="Langue anglaise"> Langue anglaise </option>
        </select>
          </p>
        <p>
        <label>Nombre de personnes nécessaires :</label>
          <input type="number" name="peopleRequired" value={this.state.peopleRequired} onChange={ e => this.handleChange(e)}/>
        </p>
        <p>
        <label>Statut</label>
        <select type="text" name="status" value={this.state.status} onChange={this.handleChange}>
          <option value=""> Sélectionner ici</option>
          <option value="Disponible"> Disponible</option>
          <option value="En attente de confirmation"> En attente de confirmation</option>
          <option value="Pourvue"> Pourvue</option>
          <option value="Terminée"> Terminée</option>
        </select>
        </p>

         <p>
          <button>Mettre à jour</button>
          </p>
        </form>
      </div>
    )
  }
}

export default EditMission;