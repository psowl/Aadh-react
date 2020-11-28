import React from 'react';

class StepThree extends React.Component {
   state = { description: this.props.description, step: 3, errorMessage: '' };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   sendToBack = (event) => {
      event.preventDefault();
      const { description } = this.state;

      //si 1 des champs de step1 userType, email, password, n'est pas rempli alors afficher message 'incomplet'
      if (description === '') {
         this.setState({ errorMessage: 'Merci de compléter le formulaire' });
      }
      //si tous les champs de step1 userType, email, password sont remplis alors passer au step2
      else {
         this.props.liftState('description', this.state.description);
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
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                     autoFocus
                  ></textarea>
               </div>
            </div>
            <button onClick={this.goBack}>Précédent</button>
            <button onClick={this.sendToBack}>Continuer</button>{' '}
            <div>{this.state.errorMessage}</div>
         </div>
      );
   }
}

export default StepThree;
