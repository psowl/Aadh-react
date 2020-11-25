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
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.sector}</p>
        <p>{this.state.expertise_required}</p>
        <p>{this.state.description}</p>
        <p>{this.state.peopleRequired}</p>
        <p>{this.state.location}</p>
        <p>{this.state.start_date}</p>
        <p>{this.state.end_date}</p>
        <p>{this.state.availability_frequency}</p>
        <p>{this.state.status}</p>
        <p>{this.state.requiredSkills}</p>

       <div>{this.renderEditForm()} </div>
        <p>
        <button onClick={() => this.deleteMission()}>Supprimer la mission</button>
        </p>
        
        {/* {this.props.loggedInUser && 
          (<div>
            <div>{this.renderEditForm()} </div>
            <p>
            <button onClick={() => this.deleteMission()}>Supprimer la mission</button>
            </p>
          </div>)
        } */}

        <Link to={'/missions'}>Retour à la liste des missions</Link>
      </div>
    )
  }
}

export default MissionDetails;