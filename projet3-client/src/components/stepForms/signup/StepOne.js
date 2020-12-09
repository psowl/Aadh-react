import React from 'react';

class StepOne extends React.Component {
   state = {
      userType: this.props.userType,
      email: this.props.email,
      password: this.props.password,
      step: 1,
      errorMessage: '',
   };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   sendToBack = (event) => {
      event.preventDefault();
      const { userType, email, password } = this.state;
      if (userType === '' || email === '' || password === '') {
         this.setState({ errorMessage: 'Merci de compléter le formulaire' });
      } else if (password.length < 7) {
         this.setState({ errorMessage: 'Merci de choisir un mot de passe plus long' });
      }
      //si tous les champs de step1 userType, email, password sont remplis alors passer au step2 --> pb: la validation Mongoose ne fonctionne pas pour email unique
      else {
         this.props.liftState('userType', this.state.userType);
         this.props.liftState('email', this.state.email);
         this.props.liftState('password', this.state.password);
         this.props.liftState('step', this.state.step + 1); //afficher le step2 du form
      }

      //pour valider le email dès le step1
      // service
      //    .post('/unique', { email })
      //    //si email unique
      //    .then(() => {
      //       //si un des champs n'est pas rempli
      //       if (userType === '' || email === '' || password === '') {
      //          this.setState({ errorMessage: 'Merci de compléter le formulaire' });
      //       } else if (password.length < 7) {
      //          this.setState({ errorMessage: 'Merci de choisir un mot de passe plus long' });
      //       }
      //       //si tous les champs de step1 userType, email, password sont remplis alors passer au step2 --> pb: la validation Mongoose ne fonctionne pas pour email unique
      //       else {
      //          this.props.liftState('userType', this.state.userType);
      //          this.props.liftState('email', this.state.email);
      //          this.props.liftState('password', this.state.password);
      //          this.props.liftState('step', this.state.step + 1); //afficher le step2 du form
      //       }
      //    })
      //    .catch((err) => {
      //       this.setState({ errorMessage: 'Utilisateur invalide' });
      //    });
   };

   render() {
      return (
         <div className='step_forms'>
            {/* event bubbling  */}
            <div>
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
            </div>
            <div>
               <input
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder='email'
               ></input>
            </div>
            <div>
               <input
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder='mot de passe'
               ></input>
            </div>
            {/*envoyer les inputs dans le component parent MainSignup quand on clique sur Continuer */}
            <button onClick={this.sendToBack}>Continuer</button>
            <div className='messagesOnDark'>{this.state.errorMessage}</div>
         </div>
      );
   }
}

export default StepOne;
