import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddMission from './AddMission'; {/*à mettre dans la nav component*/}

class MissionsList extends React.Component {
  state = { listOfMissions: [] }

  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = () =>{
    axios.get(`http://localhost:5000/missions`)
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
      <div>
        <div>
            <AddMission getData={() => this.getAllMissions()}{...this.props} /> {/*à mettre dans la nav component*/}
        </div>
        <div>
        <h1>Liste des missions</h1>
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