import React from 'react';

class StepOne extends React.Component {
   state = { userType: '', email: '', password: '', step: 1 };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   //pousser les inputs dans le component parent "mainSinup"
   toContinue = () => {
      this.props.liftState('userType', this.state.userType);
      this.props.liftState('email', this.state.email);
      this.props.liftState('password', this.state.password);
      this.props.liftState('step', this.state.step + 1); //afficher le step2 du form
   };

   render() {
      return (
         <div>
            <div>
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
            </div>
            <div>
               <div>
                  <input
                     type='text'
                     name='email'
                     value={this.state.email}
                     onChange={this.handleChange}
                     placeholder='email'
                  ></input>
               </div>
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
            <button onClick={this.toContinue}>Continuer</button>
         </div>
      );
   }
}
export default StepOne;
