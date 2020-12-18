//Pour mobile screen : bouton pour afficher le burger menu
import React from 'react';
import { Link } from 'react-router-dom';
import { RiPaypalLine } from 'react-icons/ri';
import { BsListTask, BsPencilSquare, BsNewspaper, BsPeople } from 'react-icons/bs';

class BurgerMenu extends React.Component {
   render() {
      return (
         <ul className='nav-menu-mobile'>
            <li>
               <BsListTask className='menu_icons' />
               <Link className='link' to='/missions'>
                  Toutes les missions
               </Link>
            </li>
            <li>
               <BsPencilSquare className='menu_icons' />
               <Link className='link' to='/missions/new'>
                  Publier une mission
               </Link>
            </li>
            <li>
               <BsNewspaper className='menu_icons' />
               <Link className='link' to='/actualites'>
                  Actualités
               </Link>
            </li>
            <li>
               <BsPeople className='menu_icons' />
               <Link className='link' to='/'>
                  Rejoignez-nous
               </Link>
            </li>
            <li>
               <RiPaypalLine className='menu_icons' />
               <Link className='link' to='/'>
                  Faire un don
               </Link>
            </li>
         </ul>
      );
   }
}

export default BurgerMenu;
