import React from "react";
import './App.css';
import Nav from "./components/Nav";
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'
import MissionsList from "./components/missions/MissionsList";
import MissionDetails from "./components/missions/MissionDetails";
import {loggedin} from './components/auth-service'; 

class App extends React.Component {

  state = { loggedInUser: null }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      loggedin()
        .then(response => {
          this.setState({loggedInUser: response})
        })
        .catch(err => {
          this.setState({loggedInUser: false}) 
        })
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  updateLoggedInUser=(newUser)=>{
    this.setState ({
      loggedInUser: newUser
    })
  }

  render(){
    return (
      <div className="App">
      {/* <Nav userInSession={this.state.loggedInUser} updateUser={this.updateLoggedInUser} /> */}

          <Switch>
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/signup" render={()=> <Signup updateUser={this.updateLoggedInUser}/>}/>
            <Route exact path='/login' render={() => <Login updateUser={this.updateLoggedInUser}/>}/>
            <Route exact path="/missions" component={MissionsList}/>
            <Route exact path="/missions/:id" component={MissionDetails} />
          </Switch>
      </div>
    );

  }
  
}

export default App;
