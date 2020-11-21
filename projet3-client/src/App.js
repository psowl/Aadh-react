import React from "react";
import './App.css';
import Nav from "./components/Nav";
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'

class App extends React.Component {

  state = { loggedInUser: null }

  updateLoggedInUser=(newUser)=>{
    this.setState ({
      loggedInUser: newUser
    })
  }

  render(){
    return (
      <div className="App">

          <Switch>
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/signup" render={()=> <Signup updateUser={this.updateLoggedInUser}/>}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
      </div>
    );

  }
  
}

export default App;
