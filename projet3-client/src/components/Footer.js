import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebook } from 'react-icons/gr';
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';

const Footer = () => {
   return (
      <footer>
         <hr></hr>
         <section className='network_links'>
            <GrFacebook size={34} className='network_icon' />
            <FaInstagramSquare size={34} className='network_icon' />
            <FaLinkedin size={34} className='network_icon' />
            <FaTwitterSquare size={34} className='network_icon' />
            <ImYoutube2 size={34} className='network_icon' />
         </section>
         <div className='bottom_footer'>
            <section className='footer_links'>
               <ul>
                  <li>
                     <Link to='/'>Rejoignez-nous</Link>
                  </li>
                  <li>
                     <Link to='/'>Ressources</Link>
                  </li>
                  <li>
                     <Link to='/'>Contact</Link>
                  </li>
                  <li>
                     <Link to='/'>On parle de nous</Link>
                  </li>
                  <li>
                     <Link to='/'>Faire un don</Link>
                  </li>
                  <li>
                     <Link to='/'>Newsletter</Link>
                  </li>
               </ul>
            </section>
            <section className='footer_notes'>
               <h2>AADH</h2>
               <p> &copy; Version 2020 - Projet Ironhack Sophie et Sarah</p>
            </section>
         </div>
      </footer>
   );
};

export default Footer;
