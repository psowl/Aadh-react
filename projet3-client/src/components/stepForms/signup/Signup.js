import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
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
      availability_start_date: '',
      availability_end_date: '',
      availability_frequency: '',
   };

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
         availability_frequency
      )
         .then((response) => {
            console.log('response signup✅or❌', response);
            this.setState({
               username: '',
               userType: '',
               email: '',
               password: '',
               location: '',
               expertise: '',
               description: '',
               availability_start_date: '',
               availability_end_date: '',
               availability_frequency: '',
            });
            this.props.updateUser(response);
         })
         .catch((error) => console.log('🤚', error));
   };

   render() {
      return (
         <div className='mainSinup'>
            {/* <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} /> */}
            {this.state.step === 1 && <StepOne liftState={this.stockInputs} />}
            {this.state.step === 2 && <StepTwo liftState={this.stockInputs} />}
            {this.state.step === 3 && <StepThree liftState={this.stockInputs} />}
            {this.state.step === 4 && <StepFinal finishSignup={this.handleFormSubmit} />}
         </div>
      );
   }
}

export default MainSignup;
