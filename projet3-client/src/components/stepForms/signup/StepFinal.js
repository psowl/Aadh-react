import React from "react";

class StepFinal extends React.Component {
  state = { step: 4 };

  //pousser les inputs dans le component parent "mainSinup"
  toContinue = (event) => {
    this.props.finishSignup(event); //lancer le handleSubmit du parent
  };

  goBack = () => {
    this.props.liftState("step", this.state.step - 1); //afficher le step prédécent
  };

  checkUserType = () => {
    if (this.props.signupstates.userType === "bénévole") {
      return (
        "Expertise : " + this.props.signupstates.expertise,
        "Début de disponibilté : " +
          this.props.signupstates.availability_start_date,
        "Fin de disponibilté : " +
          this.props.signupstates.availability_end_date,
        "Rythme : " + this.props.signupstates.availability_frequency
      );
    } else {
      return "Cause : " + this.props.signupstates.cause;
    }
  };

  render() {
    console.log(
      "this.props.signupstates",
      this.props.signupstates.availability_start_date,
      "this.props.signupstates",
      this.props.signupstates.availability_end_date,
      "Rythme : ",
      this.props.signupstates.availability_frequency
    );
    return (
      <div className="finalStep">
        <div>
          <h3 id="h1Signup">Veuillez valider vos informations :</h3>

          <p id="h1Signup">Username : {this.props.signupstates.username}</p>
          <p id="h1Signup">Email : {this.props.signupstates.email} </p>
          <p id="h1Signup">Lieu : {this.props.signupstates.location} </p>
          <p id="h1Signup">
            Description : {<br />}
            {this.props.signupstates.description}
          </p>

          <p id="h1Signup">{this.checkUserType()}</p>
        </div>
        <button onClick={this.goBack}>Précédent</button>
        <button onClick={this.toContinue}>Finaliser mon inscription </button>
      </div>
    );
  }
}

export default StepFinal;
