import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

//import service from "../auth-service.js";

class Profile extends React.Component {
  //aller chercher les missions avec id solliciteur et statut à valider
  //   state = {
  //     missions: [],
  //     missionsDisponibles: [],
  //     passedMissions: [],
  //   };

  //   getMissions = () => {
  //     const { params } = this.props.match;
  //     service
  //       .get(`/missions/user/${params.id}`)
  //       .then((missionsFromDb) => {

  //         this.setState({ missions: missionsFromDb.data }, () => {
  //           let filteredMissions = this.state.missions.filter((el) => {
  //             return el.status === "Disponible";
  //           });
  //           this.setState({ missionsDisponibles: filteredMissions });
  //           let passedMissions = this.state.missions.filter((el) => {
  //             return el.status !== "Disponible";
  //           });
  //           this.setState({ passedMissions: passedMissions });
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   };

  render() {
    //  return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
    return (
      <div className="profile">
        
        <div className="envoyerEmail">
          <a
            href="mailto:destinataire@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Envoyer un email
            <MdEmail className="emailIcon" />
          </a>
        </div>

        <div className="infoProfile">
          <h2>
            <GrLocation className="locationIcon" /> {this.props.user.location}
          </h2>
          <h2>
            {" "}
            <span>Cause : </span>
            {this.props.user.cause}
          </h2>
          <h2>
            <span>Description :</span> {this.props.user.description}
          </h2>
        </div>
        {<hr></hr>}
        <div className="missionsList">
          <h2>Liste des missions en cours de publication</h2>

          <ul className="cardContainer">
            {this.props.otherMissions.map((el) => (
              <li key={el._id} className="missionCard">
                <h3>{el.expertise_required}</h3>
                <h2>{el.title}</h2>
                <Link to={`/missions/${el._id}`}>
                  <h3>Voir les détails</h3>
                </Link>
              </li>
            ))}
          </ul>

          <h2>Historique des missions passées</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
