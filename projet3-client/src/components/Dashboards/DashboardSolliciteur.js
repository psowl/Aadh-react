import React from 'react';
import Entete from './Entete';
import service from '../auth-service.js';

class DashboardSolliciteur extends React.Component {
   state = { user: {} }; //single source of truth - à redescendre dans les enfants

   componentDidMount() {
      this.getUser();
   }

   //utiliser la route pour afficher le user logué
   getUser = () => {
      const userId = this.props.match.params.id;
      service
         .get(`http://localhost:5000/users/${userId}`)
         .then((userFromApi) => {
            console.log('userFromApi', userFromApi.data);
            this.setState({ user: userFromApi.data });
         })
         .catch((err) => console.log('err in getUser', err.response.data.message));
   };

   render() {
      return (
         <div>
            <Entete user={this.state.user} />
         </div>
      );
   }
}

export default DashboardSolliciteur;
