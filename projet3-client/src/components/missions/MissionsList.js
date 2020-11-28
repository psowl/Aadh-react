// import { response } from 'express';
import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import service from '../auth-service'

import AddMission from './AddMission';
import EditMission from './EditMission';
import Search from './Search.js';
import MissionTable from './MissionTable.js';

class MissionsList extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      listOfMissions: [],
      listOfMissionsbackup:[],
      query:'',
    }
  }

  // handleChange = (event) => {
  //   this.setState({
  //     search: event.target.value
  //   })
  // }

  updateQuery = (newValue) => {
    this.setState(
      {query: newValue}
      );
  }


  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = () =>{
    service.get(`http://localhost:5000/missions`)
      .then(responseFromApi => {
        // console.log("all missions✅or❌ froml MissionsList",responseFromApi )
        this.setState({
          listOfMissions: responseFromApi.data,
          listOfMissionsbackup: responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }
  

  render(){
    //we filter the list 
    console.log("data from MissionList", this.state.listOfMissions)
    const query = this.state.query;
    
    if (query) {
      this.state.listOfMissions = this.state.listOfMissionsbackup.filter(mission => mission.title.includes(query))
    } else {
      this.state.listOfMissions = this.state.listOfMissionsbackup
    }



    // // if (search) {
    // //   missions = missions.filter(mission => {
    // //     const matchTitle = mission.title.includes(search);
    // //     return matchTitle 
    // //   })
    // // }
 //write in one line
    // if (search) {
    //   missions = missions.filter(mission => mission.title.includes(search))
    // }

  // const missions = this.props.missions.filter(mission => {
  //   // check the mission matches the search input
  //   const matchTitle = mission.title.includes(this.state.query);
  //   return matchTitle
  // })


    return(
      <div className="missionsList">
      

      {/* 
      //search bar & filters
        <form className="searchform">
        <p>
         <input type="text" name="search" placeholder="Saisir le mot clé" value={this.state.search} onChange={ e => this.handleChange(e)}/>
        </p>
          <select name="availability_frequency" value={this.state.availability_frequency} onChange={this.handleChange}> 
          <option value=""> Sélectionner le rythme</option>
          <option value="Régulier"> Régulier</option>
          <option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option>
          </select> 

          <input type="text" name="sector" value={this.state.sector} onChange={ e => this.handleChange(e)} placeholder="secteur"/>

          <input type="date" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="date de début"/>

          <input type="date" name="end_date" value={this.state.end_date} onChange={this.handleChange} placeholder="date de fin"/>
          
          <input type="text" name="location" value={this.state.location} onChange={ e => this.handleChange(e)} placeholder="lieu"/>

          <button>Rechercher</button>
        </form> */}


        <Search
           query={this.state.query} updateQuery={this.updateQuery}/>
        
        <MissionTable missions={this.state.listOfMissions} />

       
{/* 
        <div>
        <h1>Liste des missions</h1>
        <ul className="cardContainer">
          { this.state.listOfMissions.map( mission => {
            return (

              <li key={mission._id} className="missionCard">
              <p>{mission.status}</p> 
              <h3>{mission.expertise_required}</h3> 
              <h2>{mission.title}</h2> 
                <Link to={`/missions/${mission._id}`}>
                  <h3>Voir les détails</h3> 
                </Link> 
            

              </li>
              
            )})
          }
          </ul>
        </div> */}

      </div>
    )
  }
}

export default MissionsList;