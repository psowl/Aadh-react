import React from 'react';

class StepFinal extends React.Component {
   state = { step: 4 };

   //pousser les inputs dans le component parent "mainSinup"
   toContinue = (event) => {
      this.props.finishSignup(event); //lancer le handleSubmit du parent
   };

   goBack = () => {
      this.props.liftState('step', this.state.step - 1); //afficher le step prédécent
   };

   render() {
      return (
         <div>
            <div>
               <h1>Finaliser mon inscription </h1>
            </div>
            <button onClick={this.goBack}>Précédent</button>
            <button onClick={this.toContinue}>Finaliser mon inscription </button>
         </div>
      );
   }
}

export default StepFinal;
