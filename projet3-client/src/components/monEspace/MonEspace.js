import React from 'react';
import Entete from './Entete';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Profile from './Profile';
import service from '../auth-service.js';

class MonEspace extends React.Component {
   state = { user: [], missions: [], dashboard: true }; //single source of truth - à redescendre dans les enfants

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

   // aller chercher en base les missions avec le requester_id du solliciteur
   getMissions = () => {
      const { params } = this.props.match;
      service
         .get(`http://localhost:5000/missions/user/${params.id}`)
         .then((missionsFromDb) => {
            this.setState({ missions: missionsFromDb.data });
         })
         .catch((err) => console.log(err));
   };

   //changer la page selon ce qui est cliqué sur le menu
   showDashboard = () => {
      this.setState({ dashboard: true });
   };

   showProfile = () => {
      this.setState({ dashboard: false });
   };

   render() {
      return (
         <div>
            <Entete user={this.state.user} />
            <Menu
               user={this.state.user}
               clickOnDashboard={this.showDashboard}
               clickOnProfile={this.showProfile}
            />
            {/*montrer le dashboard ou le profil selon le state dashboard */}
            {this.state.dashboard ? (
               <Dashboard dashboard={this.state.dashboard} missions={this.state.missions} />
            ) : (
               <Profile />
            )}
         </div>
      );
   }
}

export default MonEspace;
