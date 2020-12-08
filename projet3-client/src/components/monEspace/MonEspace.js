import React from 'react';
import queryString from 'query-string';
import Entete from './Entete';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Profile from './Profile';
import service from '../auth-service.js';
import { VscLoading } from 'react-icons/vsc';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MonEspace extends React.Component {
   state = { user: [], missions: [], dashboard: true, missionsAconfirmer: [], otherMissions: [] }; //single source of truth - à redescendre dans les enfants

   componentDidMount() {
      this.getUser();
      this.getMissions();
   }

   //utiliser la route pour afficher le user logué
   getUser = () => {
      const userId = this.props.match.params.id;
      service
         .get(`http://localhost:5000/users/${userId}`)
         .then((userFromApi) => {
            this.setState({ user: userFromApi.data });
         })
         .catch((err) => console.log('err in getUser', err.response.data.message));
   };

   // aller chercher en base les missions avec le requester_id du solliciteur (front filter)
   getMissions = () => {
      const { params } = this.props.match;
      service
         .get(`http://localhost:5000/missions/user/${params.id}`)
         .then((missionsFromDb) => {
            this.setState({ missions: missionsFromDb.data }, () => {
               //parmis ces missions portant le requestID ne retourner que celles qui on un status "en attente de confirmation"
               let filteredMissions = this.state.missions.filter((el) => {
                  return el.status === 'En attente de confirmation';
               });
               this.setState({ missionsAconfirmer: filteredMissions });
               //parmis ces missions portant le requestID retourner toutes sauf celle qui on un status "en attente de confirmation"
               let otherMissions = this.state.missions.filter((el) => {
                  return el.status !== 'En attente de confirmation';
               });
               this.setState({ otherMissions: otherMissions });
            });
         })
         .catch((err) => console.log(err));
   };

   //filtrer les missions de SuiviMissions selon DashboardSearch (back filter)
   filterMissions = (query) => {
      //utilisation du package queryString
      let qs = queryString.stringify(query);
      const url = `http://localhost:5000/missions?${qs}`;
      service
         .get(url)
         .then((responseFromApi) => {
            this.setState({
               otherMissions: responseFromApi.data,
            });
         })
         .catch((err) => console.log('Error while fetching missions', err));
   };

   //changer la page selon ce qui est cliqué sur le menu
   showDashboard = () => {
      this.setState({ dashboard: true });
   };

   showProfile = () => {
      this.setState({ dashboard: false });
   };

   render() {
      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.state.missions.length === 0) {
         return (
            <ReactCSSTransitionGroup
               transitionName='fade'
               transitionAppear={true}
               transitionAppearTimeout={1000}
               transitionEnterTimeout={1000}
               transitionLeaveTimeout={1000}
            >
               {
                  <div className='enChargement'>
                     En chargement
                     <VscLoading size={120} color='#9E04CA' />
                  </div>
               }
            </ReactCSSTransitionGroup>
         );
      }

      return (
         <div className='mon_espace'>
            <section>
               <Entete className='entete' user={this.state.user} />
               <Menu
                  user={this.state.user}
                  clickOnDashboard={this.showDashboard}
                  clickOnProfile={this.showProfile}
               />
            </section>
            {/*montrer le dashboard ou le profil selon le state dashboard */}
            {this.state.dashboard ? (
               <Dashboard
                  dashboard={this.state.dashboard}
                  missions={this.state.missions}
                  missionsAconfirmer={this.state.missionsAconfirmer}
                  getMissions={this.getMissions}
                  otherMissions={this.state.otherMissions}
                  filterMissions={this.filterMissions}
               />
            ) : (
               <Profile />
            )}
         </div>
      );
   }
}

export default MonEspace;
