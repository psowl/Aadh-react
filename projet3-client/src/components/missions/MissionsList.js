// import { response } from 'express';
import React from 'react';
// import axios from 'axios';
import service from '../auth-service'
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
      //expertise_required:["Droits de l'Homme et de l'enfant","Soutien des associations et des ESS","Etudes de droit comparé","Formation"],
      start_date:'',
      end_date:'',
      location:'',
      //Droits de l'Homme et de l'enfant
    }
  }


    handleInputChange = (event) => {
    console.log("event.target.value ="+ event.target.value)
      //const type = event.target.type
      let value = event.target.value
      const name = event.target.name

    this.setState({
      [name]: value

    }, 
    ()=>{
      console.log("this.state", this.state)
      //getAllMissions if backend filtering to uncomment below
      this.getAllMissions()}
    )
  }

  // handleInputChange = (event) => {
  //   console.log("event.target.value ="+ event.target.value)
    
  //   this.setState({
  //     searchfield: event.target.value, 
  //     // availability_frequency:event.target.value,
  //     // expertise_required:event.target.value,
  //     // start_date: event.target.value,
  //     // end_date: event.target.value,
  //     // location: event.target.value
  //   }, 
  //   ()=>{
  //     console.log("this.state", this.state)
  //     //getAllMissions if backend filtering to uncomment below
  //     this.getAllMissions()}
  //   )
  // }

  //instead of recalling getAllMissions in the setState above, check both states then display:
  // componentDidUpdate(prevProps, prevState){
  //   console.log('just re-rendered', prevProps, prevState) 
  //   if (this.state.searchfield != prevState.searchfield) {
  //     console.log('searchfield changed', prevState.searchfield, this.state.searchfield)
  //     this.getAllMissions()
  //   }
  // }

  componentDidMount() {
    this.getAllMissions()
  }


  getAllMissions = () =>{

    service.get(`http://localhost:5000/missions?searchfield=${encodeURIComponent(this.state.searchfield)}&availability_frequency=${encodeURIComponent(this.state.availability_frequency)}&expertise_required=${encodeURIComponent(this.state.expertise_required)}&location=${encodeURIComponent(this.state.location)}&start_date=${encodeURIComponent(this.state.start_date)}&end_date=${encodeURIComponent(this.state.end_date)}`)
      .then(responseFromApi => {
        console.log("all missions✅or❌ from MissionsList",responseFromApi )
        this.setState({
          listOfMissions: responseFromApi.data
        })
      })
      .catch(err => console.log('Error while fetching missions', err))
  }
  

  render(){
    
    //console.log("data from MissionList", this.state.listOfMissions)

    //front filtering
      // let listOfMissions = this.state.listOfMissions
      // listOfMissions = listOfMissions.filter(mission => mission.title.includes(this.state.searchfield));

      console.log("this.state.expertise_required",this.state.expertise_required)
    return(
      <div className="missionsList">

        <Search
           searchfield={this.state.searchfield} 
           availability_frequency={this.state.availability_frequency}  start_date={this.start_date} end_date={this.end_date} location={this.location} expertise_required= {this.state.expertise_required}
           onChange={this.handleInputChange} />

{/* testing filtering by clicking expertise */}

        {/* <ul>
          {this.state.expertise_required.map((expertise, index) => (
            <li key={index}>
              <Search onChange={this.handleInputChange(index)} expertise={expertise} />
            </li>
          ))}
        </ul> */}

        {/* 
        <h1 onClick={(event) => this.props.onChange()}>
        {this.props.expertise}
       </h1> */}



{/* for front filtering */}
        {/* <MissionTable missions={listOfMissions} /> */}

{/* for back filtering  */}
         <MissionTable missions={this.state.listOfMissions} />

      </div>
    )
  }
}

export default MissionsList;