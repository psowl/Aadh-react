import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddMission from './AddMission'; 

class MissionsList extends React.Component {
  state = { listOfMissions: [] }

  getAllMissions = () =>{
    axios.get(`http://localhost:5000/missions`)
      .then(responseFromApi => {
        this.setState({
          listOfMissions: responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }

  componentDidMount() {
    this.getAllMissions();
  }

  render(){
    
    return(
      <div>
        <div>
            <AddMission getData={() => this.getAllMissions()}/> 
        </div>
        <div>
          { this.state.listOfMissions.map( mission => {
            return (
              <div key={mission._id}>
                <Link to={`/missions/${mission._id}`}>
                  <h3>{mission.title}</h3>
                </Link>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default MissionsList;