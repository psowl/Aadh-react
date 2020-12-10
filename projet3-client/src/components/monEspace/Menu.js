import React from 'react';

class Menu extends React.Component {
   render() {
      return (
         <div className='menu_mon_espace'>
            <ul>
               <li className='all_buttons' onClick={this.props.clickOnProfile}>
                  <p> Mon profil</p>
               </li>
               <li className='all_buttons' onClick={this.props.clickOnDashboard}>
                  <p> Mon dashboard</p>
               </li>
            </ul>
         </div>
      );
   }
}

export default Menu;
