// import { response } from 'express';
import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import service from '../auth-service'

import AddMission from './AddMission';
import EditMission from './EditMission';
import SearchBar from './SearchBar.js';
import MissionTable from './MissionTable.js';

class MissionsList extends React.Component {
  state = { 
    listOfMissions: [],
    query:'',
  }

  updateQuery = (newValue) => {
    this.setState({query: newValue});
  }

  //   search:"",
  //   availability_frequency:"",
  //   sector:"",
  //   expertise_required:"",
  //   location:""

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const {
  //     search,
  //     availability_frequency,
  //     sector,
  //     expertise_required,
  //     location
  //   }=this.state;

  //   service.post("/missions", { 
  //     search,
  //     availability_frequency,
  //     sector,
  //     expertise_required,
  //     location
  //   })
  //     .then( () => {

  //       this.setState({
  //         title: "",
  //         sector: "",
  //         expertise_required: "",
  //         description: "",
  //         peopleRequired: "",
  //         location:"", 
  //         start_date: "",
  //         end_date: "",
  //         availability_frequency: "",
  //         status: "",
  //         requiredSkills: ""
  //       });

        
  //     })
  //     .catch( error => console.log(error) )
  // }

  // handleChange = (event) => {  
  //   const {name, value} = event.target;
  //   this.setState({[name]: value});
  // }

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
    console.log("data from MissionList", this.state.listOfMissions)
    // const missions = this.props.missions.filter(mission => {
    //   console.log("missions", missions)
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


        {/* <SearchBar
           query={this.state.query} updateQuery={this.updateQuery}/> */}
        
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