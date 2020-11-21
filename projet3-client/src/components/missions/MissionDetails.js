import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EditMission from './EditMission.js'

class MissionDetails extends React.Component {
  state = {}


  componentDidMount(){
    this.getSingleMission();
  }


  getSingleMission = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/missions/${params.id}`)
        .then( responseFromApi =>{
          const theMission = responseFromApi.data;
          this.setState(theMission);
        })
        .catch((err)=>{
          console.log('Error while fetching project', err)
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
    axios.delete(`http://localhost:5000/missions/${params.id}`)
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
        <p>{this.state.description}</p>

        <div>{this.renderEditForm()} </div>

        <button onClick={() => this.deleteMission()}>Supprimer la mission</button>

        <Link to={'/missions'}>Retour à la liste des missions</Link>
      </div>
    )
  }
}

export default MissionDetails;