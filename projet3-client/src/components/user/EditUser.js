import React from 'react';
import service from '../auth-service';

class EditUser extends React.Component {
   state = {
      loggedInUser: this.props.loggedInUser,
      username: '',
      password: '',
      location: '',
      expertise: '',
      profilePic: '',
      description: '',
      availability_start_date: '',
      availability_end_date: '',
      cause: '',
   };

   componentDidMount() {
      this.getUser();
   }

   //préremplir le form: aller chercher les données en base et les mettre dans les states
   getUser = () => {
      const params = this.props.match.params; //passer la props dans le routing
      console.log('params', params);
      service
         .get(`http://localhost:5000/users/${params.id}`)
         .then((responseFromApi) => {
            const userFromDb = responseFromApi.data;
            this.setState({
               username: userFromDb.username,
               password: userFromDb.password,
               location: userFromDb.location,
               expertise: userFromDb.expertise,
               profilePic: userFromDb.profilePic,
               description: userFromDb.description,
               availability_start_date: userFromDb.availability_start_date,
               availability_end_date: userFromDb.availability_end_date,
               cause: userFromDb.cause,
            });
            console.log('this.state', this.state);
         })
         .catch((err) => {
            console.log('Error while fetching user', err);
         });
   };

   formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   //soumission des nouvelles données
   handleFormSubmit = (event) => {
      const {
         username,
         password,
         location,
         expertise,
         profilePic,
         description,
         //logo,
         avaibility_start_date,
         avaibility_end_date,
         cause,
      } = this.state;

      event.preventDefault();

      service
         .put(`/users/${this.props.loggedInUser._id}`, {
            username,
            password,
            location,
            expertise,
            profilePic,
            description,
            //profilePic,
            avaibility_start_date,
            avaibility_end_date,
            cause,
         })
         .then((response) => {
            console.log('user modifié', response);
            this.props.history.push(`/users/${this.props.loggedInUser._id}`);
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   // DELETE MISSION
   deleteUser = () => {
      const { params } = this.props.match;
      service
         .delete(`/users/${params.id}`)
         .then(() => {
            console.log('user deleted');
            this.props.history.push('/');
         })
         .catch((err) => {
            console.log('Error while deleting mission', err);
         });
   };

   render() {
      //attendre que le loggedInUser arrive du App
      if (!this.props.loggedInUser) {
         return <div className='enChargement'>En chargement</div>;
      }

      return (
         <div className='editMissionForm parentForm editUser'>
            <form className='formStyle' onSubmit={this.handleFormSubmit}>
               <h1>Modifier mes informations</h1>
               <p>
                  <label>Password</label>
                  <input
                     type='password'
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Username</label>
                  <input
                     type='text'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <label>Location</label>
                  <input
                     type='text'
                     name='location'
                     value={this.state.location}
                     onChange={this.handleChange}
                  ></input>
               </p>
               {this.props.loggedInUser.userType === 'bénévole' && (
                  <div>
                     <p>
                        <label>Expertise</label>
                        <select
                           type='text'
                           name='expertise'
                           value={this.state.expertise}
                           onChange={this.handleChange}
                        >
                           <option value=''> Sélectionner votre expertise</option>
                           <option value="Droits de l'Homme et de l'enfant">
                              Droits de l'Homme et de l'enfant
                           </option>
                           <option value='Soutien des associations et des ESS'>
                              Soutien des associations/ESS
                           </option>
                           <option value='Etudes de droit comparé'> Etudes de droit comparé</option>
                           <option value='Formation'> Formation</option>
                        </select>
                     </p>
                     <p>
                        <div>
                           <label>Date de début de diponibilité</label>
                           <input
                              type='date'
                              name='avaibility_start_date'
                              value={this.state.availability_start_date}
                              onChange={this.handleChange}
                           ></input>
                        </div>
                        <em>{this.formatDate(this.state.availability_start_date)}</em>
                     </p>
                     <p>
                        <div>
                           <label>Date de fin de diponibilité</label>
                           <input
                              type='date'
                              name='avaibility_end_date'
                              value={this.state.availability_end_date}
                              onChange={this.handleChange}
                           ></input>
                        </div>

                        <em>{this.formatDate(this.state.availability_end_date)}</em>
                     </p>
                  </div>
               )}
               {this.props.loggedInUser.userType === 'solliciteur' && (
                  <div>
                     <p>
                        <label>Cause</label>
                        <input
                           type='text'
                           name='cause'
                           value={this.state.cause}
                           onChange={this.handleChange}
                        ></input>
                     </p>
                  </div>
               )}
               <p>
                  <label>Description</label>
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                  ></textarea>
               </p>

               <p>
                  <button>Mettre à jour</button>
               </p>
               <div>
                  <button className='deleteButton' onClick={() => this.deleteMission()}>
                     Supprimer mon compte utilisateur
                  </button>
               </div>
            </form>
            <div></div>
         </div>
      );
   }
}

export default EditUser;
