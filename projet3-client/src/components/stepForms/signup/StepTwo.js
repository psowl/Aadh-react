import React from 'react';

class StepTwo extends React.Component {
   state = {
      username: '',
      location: '',
      expertise: '',
      availability_start_date: '',
      availability_end_date: '',
      availability_frequency: '',
      step: 2,
   };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   //pousser les inputs dans le component parent "mainSinup"
   toContinue = () => {
      this.props.liftState('username', this.state.username);
      this.props.liftState('location', this.state.location);
      this.props.liftState('expertise', this.state.expertise);
      this.props.liftState('availability_start_date', this.state.availability_start_date);
      this.props.liftState('availability_end_date', this.state.availability_end_date);
      this.props.liftState('availability_frequency', this.state.availability_frequency);
      this.props.liftState('step', this.state.step + 1); //afficher le step3 du form
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
            </div>{' '}
            <button onClick={this.toContinue}>Continuer</button>
         </div>
      );
   }
}

export default StepTwo;
