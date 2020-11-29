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
      //listOfMissionsToShow: []
    }
  }

  // updateQuery = (name, newValue) => {
  //   this.setState(
  //     {[name]: newValue}
  //     );
  // }

  // handleInputChange = (event) => {
  //   this.setState({
  //       query: event.target.value
  //   }
  //   )
  //  this.filterArray()
  // }

  handleInputChange = (event) => {
    console.log("event.target.value ="+ event.target.value)
    this.setState({
        query: event.target.value
    }
    )
   //this.filterArray()

   //getAllMissions from back
   //this.getAllMissions()
  }

  componentDidMount() {
    this.getAllMissions()
  }


  getAllMissions = () =>{
    service.get(`http://localhost:5000/missions?query=`+this.state.query)
      .then(responseFromApi => {
        console.log("all missions✅or❌ froml MissionsList",responseFromApi )
        this.setState({
          listOfMissions: responseFromApi.data,
          //listOfMissionsToShow:responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }
  
  // filterArray = () => {
  //   let searchString = this.state.query;
  //   let responseFromApi = this.state.listOfMissions;

  //   if(searchString.length > 0){
  //       // console.log(responseFromApi.data[mission].title);
  //       filteredmissions = responseFromApi.filter(mission => mission.title === searchString);
  //       this.setState({
  //         responseFromApi
  //       })
  //   }
  // }

  //   filterArray = () => {
  //   let searchString = this.state.query;
  //   let responseFromApi = this.state.listOfMissions;

  //   if(searchString.length > 0){
  //       // console.log(responseFromApi.data[mission].title);
  //       let filteredmissions = responseFromApi.filter(mission => mission.title.includes(searchString));
  //       this.setState({
  //         listOfMissionsToShow: filteredmissions
  //       })
  //   }
  // }

  render(){
    console.log("data from MissionList", this.state.listOfMissions)

    let listOfMissions = this.state.listOfMissions
    listOfMissions = listOfMissions.filter(mission => mission.title.includes(this.state.query));

    return(
      <div className="missionsList">
{/* 
        <Search
           query={this.state.query}  availability_frequency={this.state.availability_frequency} start_date={this.start_date} end_date={this.end_date} location={this.location} updateQuery={this.updateQuery}/> */}

        <form>
        <input type="text" name="search" placeholder="saisir le mot clé"  onChange={this.handleInputChange}/>
      </form>
      <div>
        {
            listOfMissions.map((mission) =>
                <p>{mission.title}</p>
            )
        }
      </div>

        <MissionTable missions={this.state.listOfMissions} />


      </div>
    )
  }
}

export default MissionsList;