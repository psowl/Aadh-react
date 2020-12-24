import React from 'react';
import './App.css';
import ScrollToTop from 'react-scroll-to-top';
import Nav from './components/navbar/Nav';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/stepForms/signup/Signup';
import Login from './components/Login';
import EditUser from './components/user/EditUser';
import { loggedin } from './components/auth-service';
import MissionsList from './components/missions/MissionsList';
import MissionDetails from './components/missions/MissionDetails';
import AddMission from './components/missions/AddMission';
import Actualites from './components/Actualites';
import ActuSolo from './components/ActuSolo';
import Footer from './components/Footer';
import Home from './components/home/Home';
import EditMission from './components/missions/EditMission';
import MonEspace from './components/monEspace/MonEspace';
import ProfilePublic from './components/monEspace/ProfilePublic';
import { HiArrowCircleUp } from 'react-icons/hi';

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

   formatDate = (date) => {
      //pour format long avec jour
      // date = new Date(date);
      // return date.toDateString();
      //pour format court sans jour
      console.log('date', date);
      let stringDate = JSON.stringify(date);
      console.log('stringDate', stringDate);
      const lastDate = stringDate.substring(1, 11);
      console.log('lastDate', lastDate);
      return lastDate;
   };

   render() {
      return (
         <div className='App'>
            <ScrollToTop smooth component={<HiArrowCircleUp className='scrolltop' />} />
            <Nav loggedInUser={this.state.loggedInUser} updateUser={this.updateLoggedInUser} />
            {/*On récupère le state user logué pour l'affichage conditionnel de l'enfant */}
            <div className='content'>
               <Switch>
                  <Route
                     exact={true}
                     path='/'
                     render={(props) => <Home {...props} formatDate={this.formatDate} />}
                  />
                  <Route exact={true} path='/actualites' component={Actualites} />
                  <Route exact={true} path='/' component={ActuSolo} />
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
                  <Route
                     exact={true}
                     path='/users/:id/edit'
                     render={(props) => (
                        <EditUser
                           {...props}
                           loggedInUser={this.state.loggedInUser}
                           formatDate={this.formatDate}
                        /> //avec render, il faut repasser les props à l'enfant (avec component={} c'est automatique)
                     )}
                  />
                  <Route exact={true} path='/missions' component={MissionsList} />
                  <Route
                     exact={true}
                     path='/missions/new'
                     render={(props) => (
                        <AddMission {...props} loggedInUser={this.state.loggedInUser} />
                     )}
                  />
                  <Route
                     exact={true}
                     path='/missions/:id'
                     render={(props) => (
                        <MissionDetails
                           {...props}
                           loggedInUser={this.state.loggedInUser}
                           formatDate={this.formatDate}
                        />
                     )}
                  />
                  <Route
                     exact={true}
                     path='/users/:id/public'
                     render={(props) => (
                        <ProfilePublic
                           {...props}
                           loggedInUser={this.state.loggedInUser}
                           formatDate={this.formatDate}
                        />
                     )}
                  />
                  <Route
                     exact={true}
                     path='/users/:id'
                     render={(props) => (
                        <MonEspace
                           {...props}
                           loggedInUser={this.state.loggedInUser}
                           formatDate={this.formatDate}
                        />
                     )}
                  />

                  <Route
                     exact={true}
                     path='/missions/:id/edit'
                     render={(props) => (
                        <EditMission
                           {...props}
                           loggedInUser={this.state.loggedInUser}
                           formatDate={this.formatDate}
                        /> //avec render, il faut repasser les props à l'enfant (avec component={} c'est automatique)
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
