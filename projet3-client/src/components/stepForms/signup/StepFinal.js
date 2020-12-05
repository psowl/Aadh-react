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

   checkUserType = ()=> {
      if(this.props.signupstates.userType === "bénévole"){
         return (
            "Expertise : "+this.props.signupstates.expertise,
            "Début de disponibilté : " + this.props.signupstates.availability_start_date,
            "Fin de disponibilté : " + this.props.signupstates.availability_end_date,
            "Rythme: " + this.props.signupstates.availability_frequency
      )} else {
         return this.props.signupstates.cause
      }
   }
   

   render() {
      console.log("this.props.signupstates", this.props.signupstates.availability_start_date)
      return (
         <div>
            <div>
               {/* <h1 id="h1Signup"></h1> */}

               <h3>Username : {this.props.signupstates.username}</h3>
               <h3>Email : {this.props.signupstates.email} </h3>
               <h3>Lieu : {this.props.signupstates.location} </h3>
               <h3> Description : {this.props.signupstates.description} </h3>

               <h3>{this.checkUserType()}</h3>
            
            </div>
            <button onClick={this.goBack}>Précédent</button>
            <button onClick={this.toContinue}>Finaliser mon inscription </button>
         </div>
      );
   }
}

export default StepFinal;
