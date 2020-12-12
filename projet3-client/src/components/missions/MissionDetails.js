import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import service from "../auth-service";
// import moment from 'moment';

class MissionDetails extends React.Component {
  state = { theMission: {} };

  componentDidMount() {
    this.getSingleMission();
  }

  getSingleMission = () => {
    console.log("this.props", this.props.match.params);
    const { params } = this.props.match;

    service
      .get(`/missions/${params.id}`)
      .then((responseFromApi) => {
        const theMission = responseFromApi.data;
        this.setState({ theMission: theMission });
      })
      .catch((err) => {
        console.log("Error while fetching mission", err);
      });
  };

  formatDate = (date) => {
    let stringDate = JSON.stringify(date);
    // console.log("date", date);
    // console.log("stringDate", stringDate);
    const lastDate = stringDate.substring(1, 10);
    // console.log("splitlastDate", lastDate); // 2020/12/17
    return lastDate;
  };

  // DELETE MISSION
  deleteMission = () => {
    const { params } = this.props.match;
    service
      .delete(`/missions/${params.id}`)
      .then(() => {
        this.props.history.push("/missions");
      })
      .catch((err) => {
        console.log("Error while deleting mission", err);
      });
  };

  render() {
    return (
      <div className="pageMission">
        <div className="detailsMission">
          <div className="detailsMissionBlock">
            <h1 className="missionHeader">Détails de la mission</h1>
            <p className="missionHeader">
              Statut {this.state.theMission.status}
            </p>
            <h3 className="missionHeader">
              {this.state.theMission.expertise_required}
            </h3>
            <h2 className="missionHeader">{this.state.theMission.title}</h2>

            <p>
              <GrLocation className="locationIcon" />
              <span> Lieu :</span> {this.state.theMission.location}
            </p>
            <p>
              <span>Secteur :</span> {this.state.theMission.sector}
            </p>
            <p>
              <span>Date de début :</span>
              {this.state.theMission.start_date}
              {/* {this.formatDate(this.state.start_date)} */}
            </p>
            <p>
              <span>Date de fin :</span> {this.state.theMission.end_date}
            </p>
            <p>
              <span>Rythme :</span>{" "}
              {this.state.theMission.availability_frequency}
            </p>
            <p>
              <span>Compétences requises :</span>{" "}
              {this.state.theMission.requiredSkills}
            </p>
            <p>
              <span>Description :</span> {this.state.theMission.description}
            </p>
            <button className="buttonHelp">Proposer son aide </button>
          </div>
        </div>
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
