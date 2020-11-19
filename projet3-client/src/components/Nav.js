import React from "react";
import {Link} from "react-router-dom";


class Nav extends React.Component {

  render() {
    return(

      <div className="nav">
        
        <Link to="/login">LOGIN</Link>

      </div>

     


    )
  }


}

export default Nav;