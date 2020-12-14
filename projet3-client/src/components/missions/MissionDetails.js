import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import service from "../auth-service";

class MissionDetails extends React.Component {
  state = {};

  componentDidMount() {
    this.getSingleMission();
  }

  getSingleMission = () => {
    const { params } = this.props.match;
    service
      .get(`/missions/${params.id}`)
      .then((responseFromApi) => {
        const theMission = responseFromApi.data;
        this.setState(theMission);
        this.setState({
          start_date: this.formatDate(this.state.start_date),
          end_date: this.formatDate(this.state.end_date),
        });

        //console.log("themission to check date from mission details", theMission)
        // console.log(
        //   "this.state of MissionDetails formatted",
        //   this.state.start_date
        // );
      })
      .catch((err) => {
        console.log("Error while fetching mission", err);
      });
  };

  //instead of recalling getAllMissions in the setState above, check both states then display:
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("just re-rendered", prevProps, prevState);
  //   if (([this.state] != [prevState])) {
  //     console.log("state missiondetails changed", prevState, this.state);
  //     this.getSingleMission();
  //   }
  // }

  formatDate = (date) => {
    let stringDate = JSON.stringify(date);
    // console.log("date", date);
    // console.log("stringDate", stringDate);
    const lastDate = stringDate.substring(1, 10);
    // console.log("splitlastDate", lastDate); // 2020/12/17
    return lastDate;
  };

  render() {
    console.log("this.state.profilePic", this.state.requester_id);
    return (
      <div className="pageMission">
        <div className="detailsMission">
          <div className="detailsMissionBlock">
            {/* <h1 className="missionHeader">Détails de la mission</h1> */}
            <p className="missionHeader">
              Statut de la mission: {this.state.status}
            </p>
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
              <span>Date de début : </span>
              {this.state.start_date}
              {/* {this.formatDate(this.state.start_date)} */}
            </p>
            <p>
              <span>Date de fin : </span>
              {this.state.end_date}
              {/* {this.formatDate(this.state.end_date)} */}
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

            {/* <p>
              <span>Mission publiée par: </span> {this.state.requester_id}
            </p> */}
            <button className="buttonHelp">Proposer son aide </button>

            <Link className="redirect_link" to={"/missions"}>
              Retour à la liste des missions
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionDetails;
