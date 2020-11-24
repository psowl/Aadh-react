import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
                     bénévoles mettent leurs compétences à la disposition de l’aadh sous la forme de
                     consultations écrites, en réponse à l’ensemble des problématiques juridiques
                     rencontrées par ces organisations.
                  </p>
                  <p>L’a.a.d.h est sollicitée par les organisations dans 4 situations majeures :</p>
               </div>
               <ul className='actions_list'>
                  <li>
                     <section className='actions_link'>
                        <Link to='/'>
                           <h3> Droits de l'Homme et de l'enfant</h3>
                        </Link>
                     </section>
                  </li>
                  <li>
                     <section className='actions_link'>
                        <Link to='/'>
                           <h3>Soutien des associations</h3>
                        </Link>
                     </section>
                  </li>
                  <li>
                     <section className='actions_link'>
                        <Link to='/'>
                           <h3>Etudes de droit comparés</h3>
                        </Link>
                     </section>
                  </li>
                  <li>
                     <section className='actions_link'>
                        <Link to='/'>
                           <h3>Formation</h3>
                        </Link>
                     </section>
                  </li>
               </ul>
            </section>
            <section className='actualites'>
               <h3>ACTUALITES</h3>
            </section>
         </div>
         <div className='home_top'>{/*1 component Nav + 4 components : */}</div>
         <div>
            <h3>PARTENAIRES ASSOCIATIFS</h3>
            <div>
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
               <img src='' alt='' />
            </div>
         </div>
      </div>
   );
}

export default Home;
