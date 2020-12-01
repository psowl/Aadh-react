import React from 'react';
import { login } from './auth-service';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
   state = {
      email: '',
      password: '',
      errorMessage: '',
      redirect: false,
      user: {},
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;

      login(email, password)
         .then((response) => {
            console.log('response login✅or❌', response);
            this.setState({ user: response });
            this.setState({ email: '', password: '', redirect: true });
            this.props.updateUser(response);
            // console.log(response.username)
            // this.props.history.push('/missions');  //rediriger vers une page spécifique
         })
         .catch((error) =>
            this.setState({ errorMessage: 'Identifiant ou mot de passe incorrect' })
         );
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
         [name]: value,
      });
   };

   render() {
      //redirection vers l'espace perso du user quand il se logue
      if (this.state.redirect) {
         return <Redirect to={`/users/${this.state.user._id}`} />;
      }

      return (
         <div>
            <form onSubmit={this.handleFormSubmit}>
               <p>
                  <input
                     type='text'
                     name='email'
                     value={this.state.email}
                     onChange={this.handleChange}
                     placeholder='email'
                  ></input>
               </p>
               <p>
                  <input
                     type='password'
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange}
                     placeholder='mot de passe'
                  ></input>
               </p>
               <button>Se connecter</button>
            </form>
            {this.state.errorMessage && this.state.errorMessage}
         </div>
      );
   }
}

export default Login;
