import React from "react";
import DashboardSearch from "./DashboardSearch";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

class SuiviMissions extends React.Component {
  state = {
    searchfield: "",
  };

  formatDate = (date) => {
    date = new Date(date);
    return date.toDateString();
  };

  colorBackground = (status) => {
    let backgroundStatus = { background: "white" };
    if (status === "Pourvue") {
      backgroundStatus.background = "green";
    } else if (status === "Disponible") {
      backgroundStatus.background = "white";
      backgroundStatus.color = "black";
    } else {
      backgroundStatus.background = "grey";
    }
    return backgroundStatus;
  };

  //changement dans la searchbar
  handleChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.filterMissions(this.state);
      }
    );
  };

  render() {
    return (
      <div className="otherMissions">
        <h2>Mes missions</h2>
        <DashboardSearch
          onClick={this.handleOnClick}
          onChange={this.handleChange}
          searchfield={this.state.searchfield}
          getMissions={this.props.getMissions}
        />
        <ul className="list_missions">
          {this.props.dashboard &&
            this.props.otherMissions.map((el) => (
              <li key={el._id} className="each_mission">
                <section>
                  <div className="entete">
                    <div>
                      <h3>
                        <Link to={`/missions/${el._id}`}>{el.title}</Link>
                      </h3>
                      <em>
                        {this.formatDate(el.start_date)}
                        <em> au </em>
                        {this.formatDate(el.end_date)}
                      </em>
                    </div>
                    <Link to={`/missions/${el._id}/edit`}>
                      <FaRegEdit size={25} />
                    </Link>{" "}
                  </div>
                  <div className="selected_candidate">
                    {el.volonteerSelected ? (
                      <div className="each_candidate">
                        <img
                          src={el.volonteerSelected.profilePic}
                          alt="profilePic"
                        />
                        <Link to={`/users/${el.volonteerSelected._id}`}>
                          {el.volonteerSelected.username}
                        </Link>
                      </div>
                    ) : (
                      <em>pas de candidature soumise</em>
                    )}

                    <p
                      className="status"
                      style={this.colorBackground(el.status)}
                    >
                      {el.status}
                    </p>
                  </div>
                </section>
              </li>
            ))}
          ;
        </ul>
      </div>
    );
  }
}

export default SuiviMissions;
