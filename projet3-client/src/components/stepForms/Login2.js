import React from 'react';
import { login } from '../auth-service';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   state = {
      email: '',
      password: '',
      showUsername: false,
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;

      login(email, password)
         .then((response) => {
            console.log('response login✅or❌', response);
            this.setState({ email: '', password: '', showUsername: true });
            this.props.updateUser(response);
            // console.log(response.username)
            // this.props.history.push('/missions');  //rediriger vers une page spécifique
         })
         .catch((error) => console.log(error));
   };

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
         [name]: value,
      });
   };

   render() {
      return (
         <div>
            <p>
               <Link to={'/login'}>MON ESPACE</Link>
            </p>
            <p>
               <Link to={'/signup'}>S'INSCRIRE</Link>
            </p>

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

            {this.state.showUsername && <p>Bonjour vous êtes connectés</p>}
         </div>
      );
   }
}

export default Login;
