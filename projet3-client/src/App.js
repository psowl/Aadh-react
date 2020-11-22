import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Footer from './components/Footer';

class App extends React.Component {
   state = { loggedInUser: null };

   updateLoggedInUser = (newUser) => {
      this.setState({
         loggedInUser: newUser,
      });
   };

   render() {
      return (
         <div className='App'>
            <Nav loggedInUser={this.state.loggedInUser} />{' '}
            {/*On récupère le state user logué pour l'affichage conditionnel de l'enfant */}
            <div className='content'>
               <Signup></Signup>
               Coucou
               <Switch>
                  {/* <Route exact path="/" component={Home}/> */}
                  <Route
                     exact
                     path='/signup'
                     render={() => <Signup updateUser={this.updateLoggedInUser} />}
                  />
                  {/* <Route exact path="/login" component={Login}/> */}
               </Switch>
            </div>
            <Footer />
         </div>
      );
   }
}

export default App;
