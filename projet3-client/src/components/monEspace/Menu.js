import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li onClick={this.props.clickOnProfile}>Mon profil</li>
               <li onClick={this.props.clickOnDashboard}>Mon dashboard</li>
            </ul>
         </div>
      );
   }
}

export default Menu;
