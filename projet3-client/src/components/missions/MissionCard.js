import React from 'react';


const MissionCard=(props) => {
  const test = props.mission
  console.log("from mission card test", test)
  const {
    title,
    sector,
    expertise_required,
    description,
    peopleRequired,
    location,
    start_date,
    end_date,
    availability_frequency,
    status,
    requiredSkills
  } = props.mission;

  console.log("title",title)
  console.log("props.mission from Mission Card🤚",props.mission)

  return (
    
    <div className="MissionCard">
    
        <h1>{title}</h1>
        <p>{sector}</p>
        <p>{expertise_required}</p>
        <p>{description}</p>
        <p>{peopleRequired}</p>
        <p>{location}</p>
        <p>{start_date}</p>
        <p>{end_date}</p>
        <p>{availability_frequency}</p>
        <p>{status}</p>
        <p>{requiredSkills}</p>
    </div>
  );
}

export default MissionCard;