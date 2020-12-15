import React from 'react';
import { Link } from 'react-router-dom';
import Presentation from './Presentation';
import ActuSolo from '../ActuSolo';
import service from '../auth-service';

class Home extends React.Component {
   state = { tweets: [] };

   componentDidMount = () => {
      this.getTweets();
   };

   getTweets = () => {
      service
         .get('/statuses/user_timeline', { screen_name: 'AllianceADH' })
         .then((response) => {
            console.log('twitter ok', response);
         })
         .catch((err) => console.log('err in twitter', err));
   };

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
                  <div className='actionsLayer'></div>
                  <div className='actionsParagraph'>
                     <h2>L’ALLIANCE DES AVOCATS POUR LES DROITS DE L’HOMME</h2>
                     <p>
                        Fondée en 2009, l’A.A.D.H coordonne un soutien juridique neutre, gratuit et
                        confidentiel auprès des organismes, associations et institutions dédiés à la
                        protection des droits humains et de l’environnement. plus de 26’000 avocats
                        bénévoles mettent leurs compétences à la disposition de l’aadh sous la forme
                        de consultations écrites, en réponse à l’ensemble des problématiques
                        juridiques rencontrées par ces organisations.
                     </p>
                     <p>
                        L’A.A.D.H est sollicitée par les organisations dans 4 situations majeures :
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
                  <h2>ACTUALITES</h2>

                  <ActuSolo />
               </section>
            </div>
            <div className='presentation'>
               {/*1 component Nav + 4 components : */}
               <Presentation />
            </div>
            <div className='partenariat'>
               <h2>PARTENAIRES ASSOCIATIFS</h2>
               <div className='logos_partenaires'>
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
                  <img src='https://logonews.fr/wp-content/uploads/2018/01/HI-APRES.png' alt='' />
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
