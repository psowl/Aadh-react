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
      searchfield:'',
      availability_frequency:'',
      expertise_required:'',
      start_date:'',
      end_date:'',
      location:''
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
      searchfield: event.target.value, 
      availability_frequency:event.target.value,
      expertise_required:event.target.value,
      start_date: event.target.value,
      end_date: event.target.value,
      location: event.target.value

    })
   //getAllMissions if backend filtering to uncomment below
      //this.getAllMissions()
  }

  componentDidMount() {
    this.getAllMissions()
  }


  getAllMissions = () =>{

    service.get(`http://localhost:5000/missions?searchfield=`+this.state.searchfield
    +`&availability_frequency=`+this.state.availability_frequency+`&expertise_required=`+this.state.expertise_required+`&location=`+this.state.location+`&start_date=`+this.state.start_date+`&end_date=`+this.state.end_date
    ) 
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
      listOfMissions = listOfMissions.filter(mission => mission.title.includes(this.state.searchfield));

  
    return(
      <div className="missionsList">

        {/* <Search
           query={this.state.query}  availability_frequency={this.state.availability_frequency} start_date={this.start_date} end_date={this.end_date} location={this.location} updateQuery={this.updateQuery} /> */}

        <Search
           searchfield={this.state.searchfield} 
           availability_frequency={this.state.availability_frequency} expertise_required= {this.state.expertise_required} start_date={this.start_date} end_date={this.end_date} location={this.location}  
           onChange={this.handleInputChange} />


{/* for front filtering */}
        <MissionTable missions={listOfMissions} />

{/* for back filtering  */}
         {/* <MissionTable missions={this.state.listOfMissions} /> */}

      </div>
    )
  }
}

export default MissionsList;