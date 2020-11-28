import React from 'react';
import {Link} from 'react-router-dom';

const MissionCard=(props) => {
  // const test = props.mission
  // console.log("from mission card test", test)
  const {
    title,
    //sector,
    expertise_required,
    // description,
    // peopleRequired,
    // location,
    // start_date,
    // end_date,
    // availability_frequency,
    status,
    // requiredSkills
  } = props.mission;

  // console.log("title",title)
  // console.log("props.mission from Mission Card🤚",props.mission)

  return (
    
    <div className="MissionCard">
        <p>{status}</p>
        <h3>{expertise_required}</h3>
        <h2>{title}</h2>

    </div>
  );
}

export default MissionCard;