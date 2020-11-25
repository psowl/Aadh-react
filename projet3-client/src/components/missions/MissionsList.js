import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import service from '../auth-service'

import AddMission from './AddMission';
import EditMission from './EditMission';
 {/*à mettre dans la nav component*/}

class MissionsList extends React.Component {
  state = { listOfMissions: [] }

  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = () =>{
    service.get(`http://localhost:5000/missions`)
      .then(responseFromApi => {
        console.log("all missions✅or❌",responseFromApi )
        this.setState({
          listOfMissions: responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }

  render(){
    
    return(
      <div className="missionsList">
        <div>
        <h1>Liste des missions</h1>
          { this.state.listOfMissions.map( mission => {
            return (
              <div key={mission._id}>
              <p>{mission.status}</p> 
              <h3>{mission.expertise_required}</h3> 
              <h2>{mission.title}</h2> 
                <Link to={`/missions/${mission._id}`}>
                  <h3>Voir les détails</h3> 

                </Link> 
            
                {/* <Link>
                  <p>Modifier la mission</p>
                </Link> */}
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default MissionsList;