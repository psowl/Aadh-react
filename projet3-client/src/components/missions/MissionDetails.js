import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import service from '../auth-service'

import EditMission from './EditMission.js'

class MissionDetails extends React.Component {
  state = {}


  componentDidMount(){
    this.getSingleMission();
  }


  getSingleMission = () => {
      const { params } = this.props.match;
      service.get(`http://localhost:5000/missions/${params.id}`)
        .then( responseFromApi =>{
          const theMission = responseFromApi.data;
          this.setState(theMission);
        })
        .catch((err)=>{
          console.log('Error while fetching mission', err)
        })
  }


  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleMission();
    } else {
      return <EditMission theMission={this.state} getTheMission={this.getSingleMission} {...this.props} />
        
    }
  }

  // DELETE MISSION
  deleteMission = () => {
    const { params } = this.props.match;
    service.delete(`http://localhost:5000/missions/${params.id}`)
      .then(() =>{
          this.props.history.push('/missions');      
      })
      .catch((err) => {
          console.log('Error while deleting mission', err)
      })
  }


  render(){
    return(
      <div className="pageMission">
        <div className="detailsMission">
          <h1>Détails de la mission</h1>
          <p>Statut {this.state.status}</p>
          <h3>{this.state.expertise_required}</h3>
          <h2>{this.state.title}</h2>

          <p>Lieu : {this.state.location}</p>
          <p>Secteur : {this.state.sector}</p>
          <p>Nombre de personnes nécessaires : {this.state.peopleRequired}</p>
         
          <p>Date de début : {this.state.start_date}</p>
          <p>Date de fin : {this.state.end_date}</p>
          <p>Rythme : {this.state.availability_frequency}</p>
          <p>Compétences requises : {this.state.requiredSkills}</p>
          <p>Description : {this.state.description}</p>
          </div>
        <div>{this.renderEditForm()} </div>
          <p>
          <button className="deleteButton" onClick={() => this.deleteMission()}>Supprimer la mission</button>
          </p>
          
          {/* {this.props.loggedInUser && 
            (<div>
              <div>{this.renderEditForm()} </div>
              <p>
              <button onClick={() => this.deleteMission()}>Supprimer la mission</button>
              </p>
            </div>)
          } */}

          <Link className="redirect_link" to={'/missions'}>Retour à la liste des missions</Link>
      </div>
    )
  }
}

export default MissionDetails;