import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./MissionCard";

function MissionTable(props) {
  // console.log("props.missions from MissionTable", props.missions);
  // console.log("props.missions un seul", props.missions[0]);

  return (
    <div className="MissionTable">
      <div>
        <h1>Liste des missions </h1>
        <ul className="cardContainer">
          {props.missions.map((mission) => (
           <li key={mission._id}  className="missionCard">
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
}

export default MissionTable;
