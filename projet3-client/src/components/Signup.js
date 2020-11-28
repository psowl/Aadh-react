import React from 'react';
import { signup } from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
   state = {
      username: '',
      userType: '',
      email: '',
      password: '',
      location: '',
      expertise: '',
      description: '',
      availability_start_date: '',
      availability_end_date: '',
      availability_frequency: '',
      errorMessage: '',
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      const {
         username,
         userType,
         email,
         password,
         location,
         expertise,
         description,
         availability_start_date,
         availability_end_date,
         availability_frequency,
      } = this.state;

      signup(
         username,
         userType,
         email,
         password,
         location,
         expertise,
         description,
         availability_start_date,
         availability_end_date,
         availability_frequency
      )
         .then((response) => {
            console.log('response signup✅or❌', response);
            this.setState({
               username: '',
               userType: '',
               email: '',
               password: '',
               location: '',
               expertise: '',
               description: '',
               availability_start_date: '',
               availability_end_date: '',
               availability_frequency: '',
            });
            this.props.updateUser(response);
         })
         .catch((error) => console.log('🤚', error));
   };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className='signup'>
            <form onSubmit={this.handleFormSubmit}>
               <p>
                  <select
                     name='userType'
                     value={this.state.userType}
                     placeholder='Profil solliciteur ou bénévole'
                     onChange={this.handleChange}
                  >
                     <option value=''> Profil solliciteur ou bénévole</option>
                     <option value='solliciteur'> Solliciteur</option>
                     <option value='bénévole'> Bénévole</option>
                  </select>
               </p>
               <p>
                  <input
                     type='text'
                     name='email'
                     value={this.state.email}
                     onChange={this.handleChange}
                     placeholder='email'
                  ></input>
               </p>
               <p>
                  <input
                     type='password'
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     placeholder='mot de passe'
                  ></input>
               </p>
               <p>
                  <input
                     type='text'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleChange}
                     placeholder='username'
                  ></input>
               </p>
               <input
                  type='text'
                  name='location'
                  value={this.state.location}
                  onChange={this.handleChange}
                  placeholder='lieu'
               ></input>
               <p>
                  <select
                     type='text'
                     name='expertise'
                     value={this.state.expertise}
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner votre expertise</option>
                     <option value="Droits de l'Homme et de l'enfant">
                        {' '}
                        Droits de l'Homme et de l'enfant
                     </option>
                     <option value='Soutien des associations et des ESS'>
                        {' '}
                        Soutien des associations/ESS
                     </option>
                     <option value='Etudes de droit comparé'> Etudes de droit comparé</option>
                     <option value='Formation'> Formation</option>
                  </select>
               </p>
               <p>
                  <input
                     type='date'
                     name='availability_start_date'
                     value={this.state.availability_start_date}
                     onChange={this.handleChange}
                     placeholder='début de disponibilité'
                  ></input>
               </p>
               <p>
                  <input
                     type='date'
                     name='availability_end_date'
                     value={this.state.availability_end_date}
                     onChange={this.handleChange}
                     placeholder='fin de disponibilité'
                  ></input>
               </p>
               <p>
                  <select
                     name='availability_frequency'
                     value={this.state.availability_frequency}
                     placeholder='Rythme'
                     onChange={this.handleChange}
                  >
                     <option value=''> Sélectionner le ryhtme</option>
                     <option value='Régulier'> Régulier</option>
                     <option value='Ponctuellement'> Ponctuellement</option>
                     <option value='Temps plein'> Temps plein</option>
                  </select>
               </p>
               <p>
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                     placeholder='description'
                  ></textarea>
               </p>

               <button>S'inscrire</button>
            </form>
         </div>
      );
   }
}

export default Signup;
