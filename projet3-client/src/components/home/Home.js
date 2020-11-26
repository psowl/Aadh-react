import React from 'react';
import { Link } from 'react-router-dom';
import Presentation from './Presentation';

class Home extends React.Component {
   render() {
      return (
         <div className='home'>
            <div className='background_video'>
               <div className='parent_video'>
                  <div className='video'>
                     <iframe
                        height='315'
                        title='presentation_video'
                        src='https://www.youtube.com/embed/_pOwk3UWhNA'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                     ></iframe>
                  </div>
               </div>
            </div>
            <div className='home_top'>
               <section className='actions'>
                  <div>
                     <h3>L’ALLIANCE DES AVOCATS POUR LES DROITS DE L’HOMME</h3>
                     <p>
                        Fondée en 2009, l’aadh coordonne un soutien juridique neutre, gratuit et
                        confidentiel auprès des organismes, associations et institutions dédiés à la
                        protection des droits humains et de l’environnement. plus de 26’000 avocats
                        bénévoles mettent leurs compétences à la disposition de l’aadh sous la forme
                        de consultations écrites, en réponse à l’ensemble des problématiques
                        juridiques rencontrées par ces organisations.
                     </p>
                     <p>
                        L’a.a.d.h est sollicitée par les organisations dans 4 situations majeures :
                     </p>
                  </div>
                  <ul className='actions_list'>
                     <li>
                        <Link to='/'>
                           <h3> Droits de l'Homme et de l'enfant</h3>
                        </Link>
                     </li>
                     <li>
                        <Link to='/'>
                           <h3>Soutien des associations</h3>
                        </Link>
                     </li>
                     <li>
                        <Link to='/'>
                           <h3>Etudes de droit comparés</h3>
                        </Link>
                     </li>
                     <li>
                        <Link to='/'>
                           <h3>Formation</h3>
                        </Link>
                     </li>
                  </ul>
               </section>
               <section className='actualites'>
                  <h3>ACTUALITES</h3>
               </section>
            </div>
            <div className='presentation'>
               {/*1 component Nav + 4 components : */}
               <Presentation />
            </div>
            <div className="partenariat">
               <h3>PARTENAIRES ASSOCIATIFS</h3>
               <div className="logos_partenaires">
                  <img
                     src='https://namati.org/wp-content/uploads/2019/04/logo-ong-avet-768x768.jpg'
                     alt=''
                  />
                  <img src='https://images.slideplayer.fr/41/11169180/slides/slide_1.jpg' alt='' />
                  <img
                     src='https://www.helloasso.com/assets/img/logos/ong%20essor-72895712eb4e46118c6d282eb74bb469.png'
                     alt=''
                  />
                  <img
                     src='https://findvectorlogo.com/wp-content/uploads/2020/04/action-contre-la-faim-vector-logo.png'
                     alt=''
                  />
                  <img
                     src='https://www.ongconseil.com/php/wp-content/uploads/2013/06/logo_MdM_nouveau-300x300.jpg'
                     alt=''
                  />
                  <img
                     src='https://lh3.googleusercontent.com/proxy/2CZ5TsCMGzTuFSEeKHEkwHD3DF4KRc0JzxzOuxg0MDnMJQHHz31a3XGQsP6XB_HXxahdOksfjOUwO7qddO1rZlChJcRn4dR81DZPkKOmgcUjXJTv1ebZM3VuYoy5YZCniKgTnz5sem0it9aeaxgBxZG56ZXhY4X3wi7plMU'
                     alt=''
                  />
                  <img
                     src='https://www.helloasso.com/assets/img/logos/ong%20la%20pioche-ce7f120103834643b00260366927722c.png?bb=0x0x200x200&sb=200x200'
                     alt=''
                  />
                  <img
                     src='https://i.pinimg.com/236x/76/5d/2e/765d2e608afebca5530dfccbef1c94cb--ong-aide.jpg'
                     alt=''
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Home;
