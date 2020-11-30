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
      query:'',
      // availability_frequency:'',
      // start_date:'',
      // end_date:'',
      // location:''
    }
  }


  // updateQuery = (newValue) => {
  //   this.setState(
  //     {query: newValue}
  //     );
  // }

  handleInputChange = (event) => {
    console.log("event.target.value ="+ event.target.value)
    this.setState({
        query: event.target.value
    })
   //getAllMissions if backend filtering
      //this.getAllMissions()
  }

  componentDidMount() {
    this.getAllMissions()
  }


  getAllMissions = () =>{
    //For backend filtering
    service.get(`http://localhost:5000/missions?query=`+this.state.query) 
    //service.get(`http://localhost:5000/missions`)
      .then(responseFromApi => {
        console.log("all missions✅or❌ froml MissionsList",responseFromApi )
        this.setState({
          listOfMissions: responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }
  

  render(){
    
    console.log("data from MissionList", this.state.listOfMissions)

    //front filtering
      let listOfMissions = this.state.listOfMissions
      listOfMissions = listOfMissions.filter(mission => mission.title.includes(this.state.query));

  
    return(
      <div className="missionsList">

        {/* <Search
           query={this.state.query}  availability_frequency={this.state.availability_frequency} start_date={this.start_date} end_date={this.end_date} location={this.location} updateQuery={this.updateQuery} /> */}

        <Search
           query={this.state.query}  onChange={this.handleInputChange} />

{/* list just for testing front filtering */}

        {/* <form>
        <input type="text" name="search" placeholder="saisir le mot clé"  onChange={this.handleInputChange}/>
      </form> */}
      
      {/* <div>
        {
            listOfMissions.map((mission) =>
                <p>{mission.title}</p>
            )
        }
      </div> */}

{/* for front filtering */}
        <MissionTable missions={listOfMissions} />


      </div>
    )
  }
}

export default MissionsList;