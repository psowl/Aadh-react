import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

class Nav extends React.Component {
   render() {
      return (
         <div className='nav'>
            <Link className='link' to='/'>
               <img src='../images/logo_aadh.png' alt='logo_aadh' />
            </Link>
            <div className='nav-row'>
               <ul className='nav-row nav-menu'>
                  <li>
                     <Link className='link' to='/missions'>
                        Toutes les missions
                     </Link>
                  </li>
                  <li>
                     <Link className='link' to='/missions'>
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
               </ul>
               <div className='user_button'>
                  <FaUserCircle className='user_icon'></FaUserCircle>
                  <div className='user_links'>
                     <Link to={'/loggedin'}>Mon espace</Link>
                     <Link to={'/signup'}>S'inscrire</Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Nav;
