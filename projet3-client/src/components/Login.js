import React from 'react';
import {login} from './auth-service';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = { 
    email: '', 
    password: '' 
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    login(email, password)
      .then(response => {
          console.log("response login✅", response)
          this.setState({ email: "", password: "" });
          this.props.updateUser(response)
      })
      .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div>

        <p>
            <Link to={"/login"}>MON ESPACE</Link>
        </p>
        <p>
            <Link to={"/signup"}>S'INSCRIRE</Link>
        </p>
      
        <form onSubmit={this.handleFormSubmit}>
          
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>

          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="mot de passe"></input>

          <button>Se connecter</button>
        </form>
       
      </div>
    )
  }
}

export default Login;