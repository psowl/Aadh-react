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
        //console.log("themission to check date from mission details", theMission)
        console.log("this.state of MissionDetails", this.state.start_date);
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

  formatDate = (date) => {
    let stringDate = JSON.stringify(date);
    console.log("date", date);
    console.log("stringDate", stringDate);
    const lastDate = stringDate.split("T")[0];
    console.log("lastDate", lastDate); // 2020/12/17
    return lastDate;
  };

  render() {
    console.log("this.formatDate", this.state.start_date)
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
              <span>Date de fin :</span>
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
            <button className="buttonHelp">Proposer son aide </button>
          </div>
        </div>

        <Link className="redirect_link" to={"/missions"}>
          Retour à la liste des missions
        </Link>
      </div>
    );
  }
}

export default MissionDetails;
