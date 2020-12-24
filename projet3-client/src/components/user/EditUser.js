import React from 'react';
import service from '../auth-service';
import { handleUpload } from '../auth-service';
import { AiOutlineLock } from 'react-icons/ai';
import { VscLoading } from 'react-icons/vsc';

class EditUser extends React.Component {
   state = {
      _id: '',
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
      service
         .get(`/api/users/${params.id}`)
         .then((responseFromApi) => {
            const userFromDb = responseFromApi.data;
            this.setState({
               _id: userFromDb._id,
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
         })
         .catch((err) => {
            console.log('Error while fetching user', err);
         });
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
         .put(`/api/users/${this.props.loggedInUser._id}`, {
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
            this.props.history.push(`/users/${this.props.loggedInUser._id}`);
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   //upload image
   handleFileUpload = (e) => {
      const uploadData = new FormData();
      uploadData.append('imageUrl', e.target.files[0]);
      handleUpload(uploadData)
         .then((response) => {
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state
            this.setState({ profilePic: response.secure_url });
         })
         .catch((err) => {
            console.log('Error while uploading the file: ', err);
         });
   };

   // DELETE MISSION
   deleteUser = () => {
      const { params } = this.props.match;
      service
         .delete(`/api/users/${params.id}`)
         .then(() => {
            this.props.history.push('/');
         })
         .catch((err) => {
            console.log('Error while deleting mission', err);
         });
   };

   render() {
      if (!this.props.loggedInUser || !this.state._id) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
         );
      } //accès à la page edit profil uniquement si on est owner de la fiche
      else if (this.state._id !== this.props.loggedInUser._id) {
         return (
            <div className='enChargement'>
               Merci de vous identifier
               <AiOutlineLock size={120} />
            </div>
         ); //attendre que le loggedInUser arrive du App
      }

      //attendre que le loggedInUser arrive du App
      else console.log('date', new Date(this.state.availability_end_date).toLocaleDateString());
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
                           multiple={false} //à changer en V2 pour multiple selection
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
                              value={new Date(
                                 this.state.availability_start_date
                              ).toLocaleDateString()}
                              onChange={this.handleChange}
                           ></input>
                        </div>
                        <em>{this.props.formatDate(this.state.availability_start_date)}</em>
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

                        <em>{this.props.formatDate(this.state.availability_end_date)}</em>
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
               <p className='profilePic_upload'>
                  <label>Photo de profil</label>
                  <input
                     type='file'
                     alt='profilePic'
                     name='profilePic'
                     onChange={(e) => {
                        this.handleFileUpload(e);
                     }}
                  />
               </p>
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
