import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import BurgerMenu from './BurgerMenu.js';
import { logout } from '../auth-service';

class Nav extends React.Component {
   state = { activeBurgerMenu: false };

   changeBurgerMenu = () => {
      this.setState({ activeBurgerMenu: !this.state.activeBurgerMenu });
   };

   logoutUser = (event) => {
      event.preventDefault();
      logout()
         .then((response) => {
            console.log('response logout❌ ', response);
            //supprimer le user qui est dans le state du App
            this.props.updateUser(null);
         })
         .catch((err) => console.log(err));
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
                     {/*Affichage conditionnel: on récupère le user logué depuis le parent, si user logué alors "se déconnecter" s'affiche, sinon "s'inscrire" s'affiche */}
                     {this.props.loggedInUser ? (
                        <Link to={`/users/${this.props.loggedInUser._id}`}>Mon espace</Link>
                     ) : (
                        <Link to={'/login'}>Me connecter</Link>
                     )}
                     {/*Affichage conditionnel: on récupère le user logué depuis le parent, si user logué alors "se déconnecter" s'affiche, sinon "s'inscrire" s'affiche */}
                     {this.props.loggedInUser ? (
                        <Link to={'/logout'}>
                           <button onClick={this.logoutUser}>Se déconnecter</button>{' '}
                        </Link>
                     ) : (
                        <Link to={'/signup'}>M'inscrire</Link>
                     )}
                  </div>
               </div>
            </div>
            <div className='burger_menu'>
               <TiThMenuOutline size={30} onClick={this.changeBurgerMenu} />
            </div>
            {this.state.activeBurgerMenu && <BurgerMenu />}
         </div>
      );
   }
}

export default Nav;
