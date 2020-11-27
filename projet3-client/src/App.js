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
import Logout from './components/Logout';

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
                  <Route exact path='/' component={Home} />
                  <Route
                     exact
                     path='/signup'
                     render={() => <Signup updateUser={this.updateLoggedInUser} />}
                  />
                  <Route
                     exact
                     path='/login'
                     render={() => <Login updateUser={this.updateLoggedInUser} />}
                  />
                  <Route
                     exact
                     path='/logout'
                     render={() => <Logout updateUser={this.updateLoggedInUser} />}
                  />
                  <Route exact path='/missions' component={MissionsList} />
                  <Route exact path='/missions/new' component={AddMission} />
                  <Route exact path='/missions/:id' component={MissionDetails} />
                  {/* <Route exact path="/missions/:id/edit" render={()=> <EditMission loggedInUser={this.state.loggedInUser}/>}/> */}
               </Switch>
            </div>
            <Footer />
         </div>
      );
   }
}

export default App;
