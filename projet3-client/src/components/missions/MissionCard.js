import React from "react";

const MissionCard = (props) => {
  // const test = props.mission
  // console.log("from mission card test", test)
  const {
    title,
    //sector,
    expertise_required,
    // description,
    // location,
    // start_date,
    // end_date,
    // availability_frequency,
    status,
    // requiredSkills
    logo,
  } = props.mission;

  // console.log("title",title)
  // console.log("props.mission from Mission Card🤚",props.mission)

  return (
    <div className="missionCardSingle">
      {/* <img src={this.props.logo} alt="logoMissionCard" /> */}
      <div className="missionCardImage">
        <img
          src={
            "https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg"
          }
          alt="logoMissionCard"
        />
      </div>
      <div>
        <p>{status}</p>
        <h3>{expertise_required}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MissionCard;
