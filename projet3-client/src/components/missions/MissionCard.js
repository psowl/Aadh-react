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
    profilePic,
  } = props.mission;

  // console.log("title",title)
  // console.log("props.mission from Mission Card🤚",props.mission)

  const changeBackgroundImage = (expertise) => {
    let url = "";
    // let image = { backgroundImage: 'url'(url) };
    console.log("expertise", expertise);
    if (expertise === "Droits de l'Homme et de l'enfant") {
      url =
        "https://images.unsplash.com/photo-1500283281129-71909ce26948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
    } else if (expertise === "Formation") {
      url =
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    } else if (expertise === "Etudes de droit comparé") {
      url =
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    } else {
      url =
        "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    }
    return { backgroundImage: `url(${url})` };
  };

  return (
    <div
      className="missionCardSingle"
      style={changeBackgroundImage(expertise_required)}
    >
      {/* <img className="missionCardImage" src={this.props.profilePic} alt="logoMissionCard" /> */}
      {/* <div className="missionCardImage">
        <img
          src={
            "https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg"
          }
          alt="logoMissionCard"
        />
      </div> */}
      <div className="missionCardSingleContent">
        <p>{status}</p>
        <h3>{expertise_required}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MissionCard;
