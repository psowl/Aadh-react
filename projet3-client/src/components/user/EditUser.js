import React from 'react';
import service from '../auth-service';

class EditUser extends React.Component {
   state = {
      loggedInUser: this.props.loggedInUser,
      user: {},
   };

   //    componentDidMount() {
   //       this.getUser();
   //    }

   //    getUser = () => {
   //       const params = this.props.match.params; //passer la props dans le routing
   //       console.log('params', params);
   //       service
   //          .get(`http://localhost:5000/users/${params.id}`)
   //          .then((responseFromApi) => {
   //             const userFromDb = responseFromApi.data;
   //             this.setState({ user: userFromDb });
   //          })
   //          .catch((err) => {
   //             console.log('Error while fetching user', err);
   //          });
   //    };

   //soumission des nouvelles données
   handleFormSubmit = (event) => {
      const {
         username,
         password,
         location,
         expertise,
         //profilePic,
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
            //profilePic,
            description,
            //logo,
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
      console.log(
         'loggedInUser',
         this.props.loggedInUser,
         'loggedInUser.password',
         this.props.loggedInUser.password
      );

      return (
         <div className='editMissionForm parentForm editUser'>
            <form className='formStyle' onSubmit={this.handleFormSubmit}>
               <h1>Editer le user</h1>
               <p>
                  <label>Password</label>
                  <input
                     type='password'
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.password}
                  ></input>
               </p>
               <p>
                  <label>Username</label>
                  <input
                     type='text'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.username}
                  ></input>
               </p>
               <p>
                  <label>Location</label>
                  <input
                     type='text'
                     name='location'
                     value={this.state.location}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.location}
                  ></input>
               </p>
               <p>
                  <label>Expertise</label>
                  <select
                     type='text'
                     name='expertise'
                     value={this.state.expertise}
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner ici</option>
                     <option value='Règlement de litiges'> Règlement de litiges</option>
                     <option value='Rédaction des statuts ONG'> Rédaction des statuts ONG</option>
                     <option value='Contentieux'> Contentieux</option>
                     <option value='Rédaction de contrats'> Rédaction de contrats</option>
                     <option value='Langue anglaise'> Langue anglaise </option>
                  </select>
               </p>
               <p>
                  <label>Description</label>
                  <input
                     type='text'
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.description}
                  ></input>
               </p>
               <p>
                  <label>Date de début de diponibilité</label>
                  <input
                     type='date'
                     name='avaibility_start_date'
                     value={this.state.avaibility_start_date}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.avaibility_start_date}
                  ></input>
               </p>
               <p>
                  <label>Date de fin de diponibilité</label>
                  <input
                     type='date'
                     name='avaibility_end_date'
                     value={this.state.avaibility_end_date}
                     onChange={this.handleChange}
                     placeholder={this.props.loggedInUser.avaibility_end_date}
                  ></input>
               </p>

               <p>
                  <button>Mettre à jour</button>
               </p>
               <div>
                  <button className='deleteButton' onClick={() => this.deleteMission()}>
                     Supprimer la mission
                  </button>
               </div>
            </form>
            <div></div>
         </div>
      );
   }
}

export default EditUser;
