import React from "react";
import { CgCloseR } from "react-icons/cg";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepTwoSolliciteur from "./StepTwoSolliciteur";

import StepThree from "./StepThree";
import StepFinal from "./StepFinal";
import { Link } from "react-router-dom";

import { signup } from "../../auth-service";

class MainSignup extends React.Component {
  state = {
    step: 1,
    username: "",
    userType: "",
    email: "",
    password: "",
    location: "",
    expertise: "",
    description: "",
    availability_start_date: null, //pour que le default s'applique
    availability_end_date: null, //pour que le default s'applique
    availability_frequency: "",
    cause: "",
    errorMessage: "",
    successMessage: "",
    profilePic: "",
    logo: "",
  };

  //methode plus simple pour steps
  // nextStep = () => {
  //    this.setState({step: step+1})
  // }

  //récupérer les inputs remplis dans les steps
  stockInputs = (name, value) => {
    this.setState({ [name]: value });
  };

  //créer le user en base
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      userType,
      email,
      password,
      location,
      expertise,
      description,
      availability_start_date,
      availability_end_date,
      availability_frequency,
      cause,
      profilePic,
      logo,
    } = this.state;
    signup(
      username,
      userType,
      email,
      password,
      location,
      expertise,
      description,
      availability_start_date,
      availability_end_date,
      availability_frequency,
      cause,
      profilePic,
      logo
    )
      .then((response) => {
        console.log("response signup✅or❌", response);
        // handleUpload(uploadData)
        //   .then((response) => {
        //     console.log("response are: ", response);
        //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        //     this.setState({ profilePic: response[0], logo: response[1] });
        //   })
        //   .catch((err) => {
        //     console.log("Error while uploading the files: ", err);
        //   })

        this.setState({
          username: username,
          userType: userType,
          email: email,
          password: password,
          location: location,
          expertise: expertise,
          description: description,
          availability_start_date: availability_start_date,
          availability_end_date: availability_end_date,
          availability_frequency: availability_frequency,
          cause: cause,
          profilePic: profilePic,
          logo: logo,
        });
        this.props.updateUser(response);
        this.setState({
          successMessage:
            "Votre compte est créé, Bienvenue ! Votre espace est disponible.",
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.response.data.message });
        console.log("🤚", error.response.data.message);
      });
  };

  render() {
    return (
      <div className="mainSinup logSignbackground">
        <div className="logSignScreenPopup">
          <Link to="/">
            <CgCloseR className="closeIcon" />
          </Link>
          <Link id="buttonMonEspace" to="/login">
            MON ESPACE
          </Link>
          <Link id="buttonInscrire" to="/signup">
            S'INSCRIRE
          </Link>

          {this.state.step === 1 && (
            <StepOne
              liftState={this.stockInputs}
              userType={this.state.userType}
              password={this.state.password}
              email={this.state.email}
            />
          )}
          {this.state.step === 2 &&
            (this.state.userType === "bénévole" ? (
              <StepTwo
                liftState={this.stockInputs}
                username={this.state.username}
                location={this.state.location}
                expertise={this.state.expertise}
                availability_start_date={this.state.availability_start_date}
                availability_end_date={this.state.availability_end_date}
                availability_frequency={this.state.availability_frequency}
                cause={this.state.cause}
                errorMessageSignup={this.state.errorMessage}
              />
            ) : (
              <StepTwoSolliciteur
                liftState={this.stockInputs}
                username={this.state.username}
                location={this.state.location}
                expertise={this.state.expertise}
                availability_start_date={this.state.availability_start_date}
                availability_end_date={this.state.availability_end_date}
                availability_frequency={this.state.availability_frequency}
                cause={this.state.cause}
              />
            ))}
          {this.state.step === 3 && (
            <StepThree
              liftState={this.stockInputs}
              description={this.state.description}
            />
          )}
          {this.state.step === 4 && (
            <StepFinal
              liftState={this.stockInputs}
              finishSignup={this.handleFormSubmit}
              signupstates={this.state}
            />
          )}
          <div className="signupMessagesOnDark">
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            {this.state.successMessage && <p>{this.state.successMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default MainSignup;
