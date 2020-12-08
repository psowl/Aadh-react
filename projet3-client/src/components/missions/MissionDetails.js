import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import service from "../auth-service";
// import moment from "moment";

import EditMission from "./EditMission.js";

class MissionDetails extends React.Component {
  state = {};

  componentDidMount() {
    this.getSingleMission();
  }

  getSingleMission = () => {
    const { params } = this.props.match;
    service
      .get(`http://localhost:5000/missions/${params.id}`)
      .then((responseFromApi) => {
        const theMission = responseFromApi.data;
        this.setState(theMission);
      })
      .catch((err) => {
        console.log("Error while fetching mission", err);
      });
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleMission();
    } else {
      return (
        <EditMission
          theMission={this.state}
          getTheMission={this.getSingleMission}
          {...this.props}
        />
      );
    }
  };

  // DELETE MISSION
  deleteMission = () => {
    const { params } = this.props.match;
    service
      .delete(`http://localhost:5000/missions/${params.id}`)
      .then(() => {
        this.props.history.push("/missions");
      })
      .catch((err) => {
        console.log("Error while deleting mission", err);
      });
  };

  //error message: The specified value "2020-12-25T00:00:00.000Z" does not conform to the required format, "yyyy-MM-dd"
  // I want to display only YYYY/MM/DD

  // Method 1 - using npm moment:
  // const date = moment("Sep 21, 2017").format('YYYY/MM/DD');
  // console.log(date); //2017/09/21

  // Method 2 - using substring
  // var finalDate = "2013-03-10T02:00:00Z";
  // finalDate.substring(0, 10);
  //returns "2013-03-10"

  // Method 3- split
  // let finalDate = "2013-03-10T02:00:00Z";
  // console.log(finalDate.split("T")[0]);
  //returns 2013-03-10

  // formatDate = () => {
  //   let finalDate=JSON.stringify(this.state.start_date);
  //   console.log("finalDate",finalDate)
  //   const lastDate=finalDate.substring(0, 10);;
  //   //console.log("finaldate", finalDate.split("T")[0]) // 2020/12/17
  // };

  render() {
    return (
      <div className="pageMission">
        <div className="detailsMission">
          <div className="detailsMissionBlock">
            <h1 className="missionHeader">Détails de la mission</h1>
            <p className="missionHeader">Statut {this.state.status}</p>
            <h3 className="missionHeader">{this.state.expertise_required}</h3>
            <h2 className="missionHeader">{this.state.title}</h2>

            <p>
              <GrLocation className="locationIcon" />
              <span> Lieu :</span> {this.state.location}
            </p>
            <p>
              <span>Secteur :</span> {this.state.sector}
            </p>
            <p>
              <span>Date de début :</span>
              {this.state.start_date}
              {/* {this.formatDate(this.state.start_date)} */}
            </p>
            <p>
              <span>Date de fin :</span> {this.state.end_date}
            </p>
            <p>
              <span>Rythme :</span> {this.state.availability_frequency}
            </p>
            <p>
              <span>Compétences requises :</span> {this.state.requiredSkills}
            </p>
            <p>
              <span>Description :</span> {this.state.description}
            </p>
            <button className="buttonHelp">Proposer son aide </button>
          </div>
        </div>
        <div>{this.renderEditForm()} </div>
        <p>
          <button className="deleteButton" onClick={() => this.deleteMission()}>
            Supprimer la mission
          </button>
        </p>

        {/* {this.props.loggedInUser && 
            (<div>
              <div>{this.renderEditForm()} </div>
              <p>
              <button onClick={() => this.deleteMission()}>Supprimer la mission</button>
              </p>
            </div>)
          } */}

        <Link className="redirect_link" to={"/missions"}>
          Retour à la liste des missions
        </Link>
      </div>
    );
  }
}

export default MissionDetails;
