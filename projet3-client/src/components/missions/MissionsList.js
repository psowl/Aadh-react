// import { response } from 'express';
import React from 'react';
import queryString from 'query-string';
// import axios from 'axios';
import service from '../auth-service';
import Search from './Search.js';
import MissionTable from './MissionTable.js';
// import { FiRefreshCcw } from "react-icons/fi";

class MissionsList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         listOfMissions: [],
         searchfield: '',
         availability_frequency: '',
         //expertise_required: "",
         expertise_required1: false, //"Droits de l'Homme et de l'enfant"
         expertise_required2: false, //"Soutien des associations et des ESS"
         expertise_required3: false, //"Etudes de droit comparé"
         expertise_required4: false, //"Formation"
         start_date: '',
         end_date: '',
         location: '',
         profilePic: '',
      };
   }

   handleInputChange = (event) => {
      let value = event.target.value;
      const name = event.target.name;
      this.setState(
         {
            [name]: value,
         },
         () => {
            //getAllMissions if backend filtering to uncomment below
            this.getAllMissions();
         }
      );
   };

   onClick = (event, name) => {
      this.setState(
         {
            //remettre à false les autres expertises (les autres boutons expertise de search, pour que la route ne s'arrete pas dessus
            expertise_required1: false,
            expertise_required2: false,
            expertise_required3: false,
            expertise_required4: false,
            [name]: !this.state[name], //we want to get in the value of the property of the name
         },
         () => {
            let $expertise_required = document.querySelectorAll('.expertise_required');
            let $selectedButton = document.querySelector(`.${name}`);
            $expertise_required.forEach((el) => el.classList.remove('searchButtonActive'));
            $selectedButton.classList.add('searchButtonActive');
            //getAllMissions if backend filtering to uncomment below
            this.getAllMissions();
         }
      );
   };

   //instead of recalling getAllMissions in the setState above, check both states then display:
   // componentDidUpdate(prevProps, prevState){
   //   console.log('just re-rendered', prevProps, prevState)
   //   if (this.state.searchfield != prevState.searchfield) {
   //     console.log('searchfield changed', prevState.searchfield, this.state.searchfield)
   //     this.getAllMissions()
   //   }
   // }

   componentDidMount() {
      this.getAllMissions();
   }

   getAllMissions = () => {
      //utilisation du package queryString
      let qs = queryString.stringify({
         searchfield: this.state.searchfield,
         availability_frequency: this.state.availability_frequency,
         location: this.state.location,
         start_date: this.state.start_date,
         end_date: this.state.end_date,
         expertise_required1: this.state.expertise_required1,
         expertise_required2: this.state.expertise_required2,
         expertise_required3: this.state.expertise_required3,
         expertise_required4: this.state.expertise_required4,
      });

      const url = `/api/missions?${qs}`;
      service
         .get(url)
         .then((responseFromApi) => {
            this.setState({
               listOfMissions: responseFromApi.data,
            });
         })
         .catch((err) => console.log('Error while fetching missions', err));
   };

   displayAll = () => {
      service
         .get('/api/missions')
         .then((responseFromApi) => {
            this.setState({
               listOfMissions: responseFromApi.data,
            });
         })
         .catch((err) => console.log('Error while fetching missions', err));
   };

   render() {
      return (
         <div className='missionsList'>
            <Search
               searchfield={this.state.searchfield}
               availability_frequency={this.state.availability_frequency}
               start_date={this.state.start_date}
               end_date={this.state.end_date}
               location={this.state.location}
               onChange={this.handleInputChange}
               onClick={this.onClick}
            />
            <MissionTable missions={this.state.listOfMissions} displayAll={this.displayAll} />
         </div>
      );
   }
}

export default MissionsList;
