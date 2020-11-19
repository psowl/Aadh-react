import React from "react";
import {signup} from './auth-service'


class Signup extends React.Component {

  state= {
    username:"", 
    userType:"", 
    email:"",
    password:"",
    location:"",
    expertise:"",
    description:"",
    availibility_start_date:"",
    availibility_end_date:"",
    availibility_frequency:""
  }

  handleFormSubmit=(event)=>{
    event.preventDefault();
    const {
      username, 
      userType, 
      email,
      password,
      location,
      expertise,
      description,
      availibility_start_date,
      availibility_end_date,
      availibility_frequency
    } = this.state;

    signup(
      username, 
      userType, 
      email,
      password,
      location,
      expertise,
      description,
      availibility_start_date,
      availibility_end_date,
      availibility_frequency)
      .then(response => {
        this.setState({
          username:"", 
          userType:"", 
          email:"",
          password:"",
          location:"",
          expertise:"",
          description:"",
          availibility_start_date:"",
          availibility_end_date:"",
          availibility_frequency:""
        })
        this.props.updateUser(response)

      })
      .catch(error => console.log(error))
  }
   
  handleChange =(event)=> {
    const name = event.target.name;
    const value = event.target.value

    this.setState({[name]: value})
  }

  render() {
    return(

      <div className="signup">
        <form onSubmit={this.handleFormSubmit}>
        
          <select name="userType" value={this.state.userType} placeholder="Profil solliciteur ou bénévole" onChange={this.handleChange}> 
          <option value="solliciteur"> Solliciteur</option>
          <option value="bénévole"> Bénévole</option></select> 

          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="mot de passe"></input>

          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
          
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"></input>

          <input type="text" name="location" value={this.state.location} onChange={this.handleChange}placeholder="lieu"></input>
          
          <select type="text" name="expertise" value={this.state.expertise} onChange={this.handleChange}>
          
          <option value="Droits de l'Homme et l'enfant"> Droits de l'Homme et de l'enfant</option>
          <option value="Soutien des associations"> Soutien des associations/ESS</option>
          <option value="Etudes de droit comparé"> Etudes de droit comparé</option>
          <option value="Formation"> Formation</option>
          </select>
          
          <input type="date" name="availability_start_date" value={this.state.availibility_start_date} onChange={this.handleChange} placeholder="début de disponibilité"></input>
          
          <input type="date" name="availability_end_date" value={this.state.availibility_end_date} onChange={this.handleChange} placeholder="fin de disponibilité"></input>
          
          <select name="availibility_frequency" value={this.state.availibility_frequency} placeholder="Rythme" onChange={this.handleChange}> 
          <option value="Régulier"> Régulier</option><option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option></select> 

          <textarea name="description" value={this.state.description} onChange={this.handleChange}placeholder="rythme"></textarea>

          <button>S'inscrire</button>

        </form>
      </div>

     


    )
  }


}

export default Signup;