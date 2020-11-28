import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./MissionCard";

function MissionTable(props) {
  console.log("props.missions from MissionTable", props.missions);
  console.log("props.missions un seul", props.missions[0]);

  return (
    <div className="MissionTable">
      <div>
        <h1>Liste des missions </h1>
        <ul className="cardContainer">
          {props.missions.map((mission) => (
           <li>
              <MissionCard key={mission.id} mission={mission} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MissionTable;
