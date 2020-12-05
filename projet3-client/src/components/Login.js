import React from 'react';
import { login } from './auth-service';
import { Link, Redirect } from 'react-router-dom';
import { IoLogIn } from "react-icons/fa";
import { CgCloseR } from "react-icons/fa";


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
         <div className="loginScreen logSignbackground">
            <div className="logSignScreenPopup">
            {/* <CgCloseR/> */}
            <Link id="buttonMonEspace" to="/login">MON ESPACE</Link>
            <Link id="buttonInscrire" to="/signup">S'INSCRIRE</Link>
               <form onSubmit={this.handleFormSubmit}>
                  <div>
                     <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='email'
                     ></input>
                  </div>
                  <div>
                     <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder='mot de passe'
                     ></input>
                  </div>
                  {/* <IoLogIn ></IoLogIn> */}
                  <button>Se connecter</button>
               </form>
               <div className="errorMessageOndark">
               {this.state.errorMessage && this.state.errorMessage}
               </div>

   {/* for css overlay */}
   {/* 

               <div align="center">
               <a href="#loginScreen" >Click here to Log In</a>
               </div>
               <div id="loginScreen">
               <Link to="/" className="cancel">×</Link>
               </div>
               <div id="cover" >
               </div> */}
            </div>
         </div>
      );
   }
}

export default Login;
