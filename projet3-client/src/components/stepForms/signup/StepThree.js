import React from 'react';
import { handleUpload } from '../../auth-service';

class StepThree extends React.Component {
   state = {
      description: this.props.description,
      step: 3,
      errorMessage: '',
      profilePic: this.props.profilePic,
      logo: this.props.logo,
   };

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
         this.props.liftState('profilePic', this.state.profilePic);
         this.props.liftState('profilePic', this.state.profilePic);
         this.props.liftState('step', this.state.step + 1); //afficher le step3 du form
      }
   };

   goBack = () => {
      this.props.liftState('step', this.state.step - 1); //afficher le step3 du form
   };

   //upload image
   handleFileUpload = (e) => {
      console.log('The file to be uploaded is: ', e.target.files[0]);
      console.log('event ', e);
      const uploadData = new FormData();
      // imageUrl => this name has to be the same as in the model since we pass

      // req.body to .create() method when creating a new thing in '/api/things/create' POST route

      // // si 2 champs images
      // uploadData.append('profilePic', e.target.files[0]);
      // uploadData.append('profilePic', e.target.files[1]);

      uploadData.append('imageUrl', e.target.files[0]);

      console.log('uploadData', uploadData);
      handleUpload(uploadData)
         .then((response) => {
            console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state
            this.setState({ profilePic: response.secure_url });
         })
         .catch((err) => {
            console.log('Error while uploading the file: ', err);
         });
   };

   render() {
      return (
         <div className='step_forms'>
            <div>
               <div>
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                     placeholder='Décrivez-vous ou votre organisation en quelques mots'
                     autoFocus
                  ></textarea>
                  {/* en V2: affichage conditionnel image profilePic ou logo */}
                  <input
                     type='file'
                     alt=''
                     name='profilePic'
                     onChange={(e) => {
                        this.handleFileUpload(e);
                     }}
                  />
               </div>
            </div>
            <button onClick={this.goBack}>Précédent</button>
            <button onClick={this.sendToBack}>Continuer</button>{' '}
            <div className='messagesOnDark'>{this.state.errorMessage}</div>
         </div>
      );
   }
}

export default StepThree;
