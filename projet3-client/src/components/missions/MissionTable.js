import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./MissionCard";

const MissionTable = (props) => {
  console.log("props.missions from MissionTable", props.missions);
  // console.log("props.missions un seul", props.missions[0]);

  const displaySingular = () => {
    if (props.missions.length >= 2) {
      return props.missions.length + " missions disponibles";
    } else {
      return props.missions.length + " mission disponible";
    }
  };

  return (
    <div className="missionTable">
      <div>
        <h2>{displaySingular()}</h2>
        <ul className="cardContainer">
          {props.missions.map((mission) => (
            <li key={mission._id} className="missionCard">
              <MissionCard mission={mission} />
              <Link to={`/missions/${mission._id}`}>
                <h3>Voir les détails</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MissionTable;
