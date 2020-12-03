import React from 'react';
import Entete from './Entete';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Profile from './Profile';
import service from '../auth-service.js';

class MonEspace extends React.Component {
   state = { user: [], missions: [], dashboard: true, missionsAconfirmer: [] }; //single source of truth - à redescendre dans les enfants

   componentDidMount() {
      this.getUser();
      this.getMissions();
      // this.filterMissions();
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

   // aller chercher en base les missions avec le requester_id du solliciteur
   getMissions = () => {
      const { params } = this.props.match;
      service
         .get(`http://localhost:5000/missions/user/${params.id}`)
         .then((missionsFromDb) => {
            this.setState({ missions: missionsFromDb.data }, () => {
               console.log('state.missions from MonEspace', this.state.missions);
               //pour chaque mission portant le requestID ne retourner que celles qui on un status "en attente de confirmation"
               let filteredMissions = this.state.missions.filter((el) => {
                  return el.status === 'En attente de confirmation';
               });
               console.log('filteredMissions', filteredMissions);
               this.setState({ missionsAconfirmer: filteredMissions });
               console.log('this.state.missions', this.state.missions);
            });
         })
         .catch((err) => console.log(err));
   };

   //filtrer les missions sur leurs status pour les envoyer en props de Aconfirmer
   // filterMissions = () => {
   //    console.log('this.state.missions', this.state.missions);
   //    let filteredMissions;
   //    //pour chaque mission portant le requestID ne retourner que celles qui on un status "en attente de confirmation"
   //    filteredMissions = this.state.missions.filter((el) => {
   //       return el.status === 'En attente de confirmation';
   //    });
   //    console.log('filteredMissions', filteredMissions);
   //    this.setState({ missionsAconfirmer: filteredMissions });
   //    console.log('this.state.missions', this.state.missions);
   // };

   //changer la page selon ce qui est cliqué sur le menu
   showDashboard = () => {
      this.setState({ dashboard: true });
   };

   showProfile = () => {
      this.setState({ dashboard: false });
   };

   render() {
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
               />
            ) : (
               <Profile />
            )}
         </div>
      );
   }
}

export default MonEspace;
