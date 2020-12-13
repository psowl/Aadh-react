// import { response } from 'express';
import React from "react";
import queryString from "query-string";
// import axios from 'axios';
import service from "../auth-service";
import Search from "./Search.js";
import MissionTable from "./MissionTable.js";

class MissionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfMissions: [],
      searchfield: "",
      availability_frequency: "",
      //expertise_required: "",
      expertise_required1: false, //"Droits de l'Homme et de l'enfant"
      expertise_required2: false, //"Soutien des associations et des ESS"
      expertise_required3: false, //"Etudes de droit comparé"
      expertise_required4: false, //"Formation"
      start_date: "",
      end_date: "",
      location: "",
      logo: "",
    };
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log("this.state", this.state);
        //getAllMissions if backend filtering to uncomment below
        this.getAllMissions();
      }
    );
  };

  onClick = (event, name) => {
    console.log("name", name);

    this.setState(
      {
        [name]: !this.state[name], //we want to get in the value of the property of the name
      },
      () => {
        //getAllMissions if backend filtering to uncomment below
        this.getAllMissions();
        console.log("this.state", this.state[name]);
      }
    );
  };

  //instead of recalling getAllMissions in the setState above, check both states then display:
  // componentDidUpdate(prevProps, prevState){
  //   console.log('just re-rendered', prevProps, prevState)
  //   if (this.state.searchfield != prevState.searchfield) {
  //     console.log('searchfield changed', prevState.searchfield, this.state.searchfield)
  //     this.getAllMissions()
  //   }
  // }

  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = () => {
    // console.log("this.state.end_date", "/" + this.state.start_date + "/");
    // console.log(
    //   "encodURI",
    //   "/" + encodeURIComponent(this.state.start_date) + "/"
    // );

    //utilisation du package queryString
    let qs = queryString.stringify({
      searchfield: this.state.searchfield,
      availability_frequency: this.state.availability_frequency,
      location: this.state.location,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      expertise_required1: this.state.expertise_required1,
      expertise_required2: this.state.expertise_required2,
      expertise_required3: this.state.expertise_required3,
      expertise_required4: this.state.expertise_required4,
    });

    const url = `/missions?${qs}`;
    // console.log("URL", url);
    service
      .get(url)
      .then((responseFromApi) => {
        console.log("all missions✅or❌ from MissionsList", responseFromApi);
        this.setState({
          listOfMissions: responseFromApi.data,
        });
      })
      .catch((err) => console.log("Error while fetching missions", err));
  };

  render() {
    //console.log("data from MissionList", this.state.listOfMissions)

    //front filtering
    // let listOfMissions = this.state.listOfMissions
    // listOfMissions = listOfMissions.filter(mission => mission.title.includes(this.state.searchfield));

    return (
      <div className="missionsList">
        <Search
          searchfield={this.state.searchfield}
          availability_frequency={this.state.availability_frequency}
          start_date={this.state.start_date}
          end_date={this.state.end_date}
          location={this.state.location}
          expertise_required1={this.state.expertise_required1}
          onChange={this.handleInputChange}
          onClick={this.onClick}
        />

        {/* testing filtering by clicking expertise */}

        {/* <ul>
          {this.state.expertise_required.map((expertise, index) => (
            <li key={index}>
              <Search onChange={this.handleInputChange} expertise={expertise} />
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
    );
  }
}

export default MissionsList;
