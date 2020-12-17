import React from 'react';
import { Link } from 'react-router-dom';
import Presentation from './Presentation';
import ActuSolo from '../ActuSolo';
import service from '../auth-service';
import { VscLoading } from 'react-icons/vsc';
import { FaRetweet } from 'react-icons/fa';

class Home extends React.Component {
   state = { tweets: [], retweets: [] };

   componentDidMount = () => {
      this.getTweets();
   };

   formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   getTweets = () => {
      service
         .get('/statuses/user_timeline', { screen_name: 'AllianceADH' })
         .then((tweetsFromApi) => {
            console.log('twitter ok', tweetsFromApi.data);
            this.setState(
               {
                  tweets: tweetsFromApi.data,
               },
               () => this.fetchRetweetInfo()
            );
         })
         .catch((err) => console.log('err in twitter', err));
   };

   //pour pouvoir render les info de la clés retweeted_status (qui est un objet non atteignable directement par le state tweet, car trop profond (undefined)). Je mets chaque objet retweet dans un array [{retweeted_status},{retweeted_status}]
   fetchRetweetInfo = () => {
      let tweets = this.state.tweets;
      let retweets = tweets.map((tweet) => {
         return tweet.retweeted_status;
      });
      this.setState({ retweets: retweets });
   };

   render() {
      if (this.state.tweets.length === 0) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
         );
      }

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
                  <div className='titre'>
                     <img
                        src='https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png'
                        alt='twitter'
                     />
                     <h3>Tweets by @AllianceADH</h3>
                  </div>
                  <ul>
                     {this.state.tweets.map((tweet, i) => (
                        <li key={i}>
                           <div>
                              {/* si le tweet est un retweet, afficher l'image du tweeter origine, sinon afficher l'image de AADH*/}
                              {this.state.retweets[i] ? (
                                 <img
                                    key={this.state.retweets[i].id}
                                    src={this.state.retweets[i].user.profile_image_url_https}
                                    alt='profile_image_url'
                                 />
                              ) : (
                                 <img
                                    key={this.state.tweets[i].id}
                                    src={this.state.tweets[i].user.profile_image_url_https}
                                    alt='profile_image_url'
                                 />
                              )}
                           </div>
                           <div>
                              {/* si le tweet est un retweet, afficher l'image du tweeter origine, sinon afficher l'image de AADH*/}
                              {this.state.retweets[i] && (
                                 <div className='retweet_intro'>
                                    <div>
                                       <FaRetweet />
                                       <em>AADH a retweeté</em>
                                    </div>
                                    <h4>{this.state.retweets[i].user.name}</h4>
                                 </div>
                              )}
                              <em>{this.formatDate(tweet.created_at)}</em>
                              <p>{tweet.text}</p>
                              <a href={tweet.source}>Voir plus</a>
                           </div>
                        </li>
                     ))}
                  </ul>
                  {/* <ActuSolo /> */}
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
