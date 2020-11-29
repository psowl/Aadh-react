import React from 'react';

class StepTwo extends React.Component {
   state = {
      username: this.props.username,
      location: this.props.location,
      expertise: this.props.expertise,
      availability_start_date: this.props.availability_start_date,
      availability_end_date: this.props.availability_end_date,
      availability_frequency: this.props.availability_frequency,
      step: 2,
      errorMessage: '',
   };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   sendToBack = (event) => {
      event.preventDefault();
      const {
         username,
         location,
         expertise,
         availability_start_date,
         availability_end_date,
         availability_frequency,
      } = this.state;
      //si un des champs n'est pas rempli
      if (
         username === '' ||
         location === '' ||
         expertise === '' ||
         availability_start_date === '' ||
         availability_end_date === '' ||
         availability_frequency === ''
      ) {
         this.setState({ errorMessage: 'Merci de compléter le formulaire' });
      }
      //si tous les champs de step1 userType, email, password sont remplis alors passer au step2
      else {
         this.setState({ errorMessage: '' });
         this.props.liftState('username', this.state.username);
         this.props.liftState('location', this.state.location);
         this.props.liftState('expertise', this.state.expertise);
         this.props.liftState('availability_start_date', this.state.availability_start_date);
         this.props.liftState('availability_end_date', this.state.availability_end_date);
         this.props.liftState('availability_frequency', this.state.availability_frequency);
         this.props.liftState('step', this.state.step + 1); //afficher le step3 du form
      }
   };

   goBack = () => {
      this.props.liftState('step', this.state.step - 1); //afficher le step3 du form
   };

   render() {
      return (
         <div>
            <div>
               <div>
                  <input
                     className='u-full-width required'
                     type='text'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleChange}
                     placeholder='username'
                     autoFocus
                  ></input>
               </div>
            </div>
            <div className='row'>
               <div className='six columns'>
                  <input
                     className='u-full-width required'
                     type='text'
                     name='location'
                     value={this.state.location}
                     onChange={this.handleChange}
                     placeholder='lieu'
                     autoFocus
                  ></input>
               </div>
               <div>
                  <div className='six columns'>
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
                  </div>
               </div>
               <div>
                  <div className='six columns'>
                     <input
                        type='date'
                        name='availability_start_date'
                        value={this.state.availability_start_date}
                        onChange={this.handleChange}
                        placeholder='début de disponibilité'
                     ></input>
                  </div>
               </div>
               <div>
                  <div className='six columns'>
                     <input
                        type='date'
                        name='availability_end_date'
                        value={this.state.availability_end_date}
                        onChange={this.handleChange}
                        placeholder='fin de disponibilité'
                     ></input>
                  </div>
               </div>
               <div>
                  <div className='six columns'>
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
                  </div>
               </div>
            </div>
            <button onClick={this.goBack}>Précédent</button>
            <button onClick={this.sendToBack}>Continuer</button>{' '}
            <div>{this.state.errorMessage}</div>
         </div>
      );
   }
}

export default StepTwo;
