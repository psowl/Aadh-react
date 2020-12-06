import React from 'react';

class Menu extends React.Component {
   render() {
      return (
         <div className='menu_mon_espace'>
            <ul>
               <li className='all_buttons' onClick={this.props.clickOnProfile}>
                  Mon profil
               </li>
               <li className='all_buttons' onClick={this.props.clickOnDashboard}>
                  Mon dashboard
               </li>
            </ul>
         </div>
      );
   }
}

export default Menu;
