import React from 'react';

class StepFinal extends React.Component {
   //pousser les inputs dans le component parent "mainSinup"
   toContinue = (event) => {
      this.props.finishSignup(event); //lancer le handleSubmit du parent
   };

   render() {
      return (
         <div>
            <div>
               <h1>inscription finalisée ! </h1>
            </div>
            <button onClick={this.toContinue}>Je m'inscris</button>
         </div>
      );
   }
}

export default StepFinal;
