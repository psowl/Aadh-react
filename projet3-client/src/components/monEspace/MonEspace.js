import React from 'react';
import queryString from 'query-string';
import Entete from './Entete';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Profile from './Profile';
import service from '../auth-service.js';
import { VscLoading } from 'react-icons/vsc';
import { AiOutlineLock } from 'react-icons/ai';

class MonEspace extends React.Component {
   state = {
      user: {},
      missions: [],
      dashboard: true,
      missionsAconfirmer: [],
      otherMissions: [],
      validationCheck: true,
   }; //single source of truth - à redescendre dans les enfants

   componentDidMount() {
      this.getUser();
      this.getMissions();
   }

   //utiliser la route pour afficher le user logué
   getUser = () => {
      const userId = this.props.match.params.id;
      service
         .get(`/api/users/${userId}`)
         .then((userFromApi) => {
            this.setState({ user: userFromApi.data });
         })
         .catch((err) => {
            console.log('err in getUser', err.response.data.message);
            this.setState({ validationCheck: false });
         });
   };

   // aller chercher en base les missions avec le requester_id du solliciteur (front filter)
   getMissions = () => {
      const { params } = this.props.match;
      //si le user dont la fiche est demandé n'est pas logué (si dysynchro avec la fonction getUser)
      if (!this.props.loggedInUser) {
         this.setState({ validationCheck: false });
         return;
      }
      service
         .get(`/api/missions/user/${params.id}`)
         .then((missionsFromDb) => {
            console.log('missionsFromDb', missionsFromDb);

            this.setState({ missions: missionsFromDb.data }, () => {
               //parmi ces missions portant le userId ne retourner que celles qui on un status "en attente de confirmation" === pour bénévole: celles dont il attend un retour
               let filteredMissions = this.state.missions.filter((el) => {
                  return el.status === 'En attente de confirmation';
               });
               this.setState({ missionsAconfirmer: filteredMissions });
               //parmi ces missions portant le userId retourner toutes sauf celles qui ont un statut "en attente de confirmation"=== pour bénévole: celles qui ont été confirmé ou sont passée
               let otherMissions = this.state.missions.filter((el) => {
                  return el.status !== 'En attente de confirmation';
               });
               this.setState({ otherMissions: otherMissions });
            });
         })
         .catch((err) => console.log('err in getMissions', err));
   };

   //filtrer les missions de SuiviMissions selon DashboardSearch (back filter)
   filterMissions = (query) => {
      //utilisation du package queryString
      let qs = queryString.stringify(query);
      const url = `/api/missions?${qs}`;
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
      // console.log(this.props.loggedInUser._id, this.state.user._id);
      // console.log(this.props.loggedInUser._id === this.state.user._id);

      if (!this.state.user || !this.props.loggedInUser) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
         );
      }

      if (!this.state.user && !this.props.loggedInUser) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
         );
      }

      //this.state.user._id arrive souvent après this.props.loggedInUser._id, donc le mettre en condition dans le if pour éviter que le message appraisse quand il est undefeined
      if (this.state.user._id && this.props.loggedInUser._id !== this.state.user._id) {
         return (
            <div className='enChargement'>
               Merci de vous identifier
               <AiOutlineLock size={120} />
            </div>
         );
      }

      //si un user veut accèder à la page perso d'un autre user
      if (this.state.validationCheck === false) {
         return (
            <div className='enChargement'>
               Merci de vous identifier
               <AiOutlineLock size={120} />
            </div>
         );
      }

      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.state.user.userType === 'solliciteur' && this.state.missions.length === 0) {
         //si user n'est pas l'owner alors retourner ce message
         if (this.state.validationCheck === false) {
            return (
               <div className='enChargement'>
                  Merci de vous identifier
                  <AiOutlineLock size={120} />
               </div>
            );
            //si user est l'owner alors retourner ce message
         } else {
            return (
               <div className='enChargement'>
                  En chargement
                  <VscLoading size={120} />
               </div>
            );
         }
      }

      if (this.state.user.userType === 'bénévole' && !this.state.user) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
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
            {/*montrer le dashboard ou le profil selon si le user logué est le owner de la fiche et selon le state dashboard*/}
            {this.state.dashboard ? (
               <Dashboard
                  userType={this.state.user.userType}
                  dashboard={this.state.dashboard}
                  missions={this.state.missions}
                  missionsAconfirmer={this.state.missionsAconfirmer}
                  getMissions={this.getMissions}
                  otherMissions={this.state.otherMissions}
                  filterMissions={this.filterMissions}
                  formatDate={this.props.formatDate}
               />
            ) : (
               <Profile
                  loggedInUser={this.props.loggedInUser}
                  user={this.state.user}
                  missions={this.state.missions}
                  formatDate={this.props.formatDate}
               />
            )}
         </div>
      );
   }
}

export default MonEspace;
