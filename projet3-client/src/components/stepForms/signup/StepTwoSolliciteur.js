import React from 'react';

class StepTwoSolliciteur extends React.Component {
   state = {
      username: this.props.username,
      location: this.props.location,
      cause: this.props.cause,
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
      const { username, location, cause } = this.state;
      //si un des champs n'est pas rempli
      if (username === '' || location === '' || cause === '') {
         this.setState({ errorMessage: 'Merci de compléter le formulaire' });
      }
      //si tous les champs de step1 userType, email, password sont remplis alors passer au step2
      else {
         this.setState({ errorMessage: '' });
         this.props.liftState('username', this.state.username);
         this.props.liftState('location', this.state.location);
         this.props.liftState('cause', this.state.cause);
         this.props.liftState('step', this.state.step + 1); //afficher le step3 du form
      }
   };

   goBack = () => {
      this.props.liftState('step', this.state.step - 1); //afficher le step1 du form
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
                     <input
                        type='text'
                        name='cause'
                        value={this.state.cause}
                        onChange={this.handleChange}
                        placeholder='cause'
                     ></input>
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

export default StepTwoSolliciteur;
