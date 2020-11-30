import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepTwoSolliciteur from './StepTwoSolliciteur';

import StepThree from './StepThree';
import StepFinal from './StepFinal';

import { signup } from '../../auth-service';

class MainSignup extends React.Component {
   state = {
      step: 1,
      username: '',
      userType: '',
      email: '',
      password: '',
      location: '',
      expertise: '',
      description: '',
      availability_start_date: null, //pour que le default s'applique
      availability_end_date: null, //pour que le default s'applique
      availability_frequency: '',
      cause: '',
      errorMessage: '',
      successMessage: '',
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
         cause
      )
         .then((response) => {
            console.log('response signup✅or❌', response);
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
            });
            this.props.updateUser(response);
            this.setState({ successMessage: 'Compte créé !' });
         })
         .catch((error) => {
            this.setState({ errorMessage: error.response.data.message });
            console.log('🤚', error.response.data.message);
         });
   };

   render() {
      return (
         <div className='mainSinup'>
            {this.state.step === 1 && (
               <StepOne
                  liftState={this.stockInputs}
                  userType={this.state.userType}
                  password={this.state.password}
                  email={this.state.email}
               />
            )}
            {this.state.step === 2 &&
               (this.state.userType === 'bénévole' ? (
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
               <StepThree liftState={this.stockInputs} description={this.state.description} />
            )}
            {this.state.step === 4 && (
               <StepFinal liftState={this.stockInputs} finishSignup={this.handleFormSubmit} />
            )}
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            {this.state.successMessage && <p>{this.state.successMessage}</p>}
         </div>
      );
   }
}

export default MainSignup;
