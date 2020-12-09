import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/stepForms/signup/Signup';
import Login from './components/Login';
import MissionsList from './components/missions/MissionsList';
import MissionDetails from './components/missions/MissionDetails';
import AddMission from './components/missions/AddMission';
import { loggedin } from './components/auth-service';
import Footer from './components/Footer';
import Home from './components/home/Home';
import EditMission from './components/missions/EditMission';
import MonEspace from './components/monEspace/MonEspace';

class App extends React.Component {
   state = { loggedInUser: null };

   updateLoggedInUser = (newUser) => {
      this.setState({
         loggedInUser: newUser,
      });
   };

   fetchUser() {
      if (this.state.loggedInUser === null) {
         loggedin()
            .then((response) => {
               this.setState({ loggedInUser: response });
            })
            .catch((err) => {
               this.setState({ loggedInUser: false });
            });
      }
   }

   componentDidMount() {
      this.fetchUser();
   }

   updateLoggedInUser = (newUser) => {
      this.setState({
         loggedInUser: newUser,
      });
   };

   render() {
      return (
         <div className='App'>
            <Nav loggedInUser={this.state.loggedInUser} updateUser={this.updateLoggedInUser} />
            {/*On récupère le state user logué pour l'affichage conditionnel de l'enfant */}
            <div className='content'>
               <Switch>
                  <Route exact={true} path='/' component={Home} />
                  <Route
                     exact={true}
                     path='/signup'
                     render={() => <Signup updateUser={this.updateLoggedInUser} />}
                  />
                  <Route
                     exact={true}
                     path='/login'
                     render={() => <Login updateUser={this.updateLoggedInUser} />}
                  />
                  <Route exact={true} path='/missions' component={MissionsList} />
                  <Route exact={true} path='/missions/new' component={AddMission} />
                  <Route exact={true} xact path='/missions/:id' component={MissionDetails} />
                  <Route exact={true} path='/users/:id' component={MonEspace} />

                  <Route
                     exact={true}
                     path='/missions/:id/edit'
                     render={(props) => (
                        <EditMission {...props} loggedInUser={this.state.loggedInUser} /> //avec render, il faut repasser les props à l'enfant (avec component={} c'est automatique)
                     )}
                  />
               </Switch>
            </div>
            <Footer />
         </div>
      );
   }
}

export default App;
