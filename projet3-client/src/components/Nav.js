import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import BurgerMenu from './BurgerMenu.js';

class Nav extends React.Component {
   state = { activeBurgerMenu: false };

   changeBurgerMenu = () => {
      this.setState({ activeBurgerMenu: !this.state.activeBurgerMenu });
   };

   render() {
      return (
         <div className='nav'>
            <Link className='link' to='/'>
               <img src='../images/logo_aadh.png' alt='logo_aadh' />
            </Link>
            <div className='nav-row'>
               <ul className='nav-row nav-menu-desktop'>
                  <li>
                     <Link className='link' to='/missions'>
                        Toutes les missions
                     </Link>
                  </li>
                  <li>
                     <Link className='link' to='/missions/new'>
                        Publier une mission
                     </Link>
                  </li>
                  <li>
                     <Link className='link' to='/'>
                        Actualités
                     </Link>
                  </li>
                  <li>
                     <Link className='link' to='/'>
                        Rejoignez-nous
                     </Link>
                  </li>
                  <li>
                     <Link className='link' to='/'>
                        Faire un don
                     </Link>
                  </li>
               </ul>
               <div className='user_button'>
                  <FaUserCircle className='user_icon'></FaUserCircle>
                  <div className='user_links'>
                     <Link to={'/loggedin'}>Mon espace</Link>
                     <Link to={'/signup'}>S'inscrire</Link>
                  </div>
               </div>
            </div>
            <div className='burger_menu'>
               <TiThMenuOutline size={40} onClick={this.changeBurgerMenu} />
            </div>
            {this.state.activeBurgerMenu && <BurgerMenu />}
         </div>
      );
   }
}

export default Nav;
