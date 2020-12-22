import React from 'react';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { GrStatusGoodSmall } from 'react-icons/gr';
import service from '../auth-service';
import { VscLoading } from 'react-icons/vsc';

class MissionDetails extends React.Component {
   state = {
      availability_frequency: '',
      start_date: '',
      end_date: '',
      location: '',
      expertise_required: '',
      sector: '',
      title: '',
      description: '',
      requester_id: '',
      requiredSkills: '',
      status: '',
      _id: '',
   };

   componentDidMount() {
      this.getSingleMission();
   }

   getSingleMission = () => {
      const { params } = this.props.match;
      service
         .get(`/api/missions/${params.id}`)
         .then((responseFromApi) => {
            const theMission = responseFromApi.data;
            // this.setState(theMission);
            this.setState({
               start_date: this.formatDate(theMission.start_date),
               end_date: this.formatDate(theMission.end_date),
               location: theMission.location,
               description: theMission.description,
               title: theMission.title,
               availability_frequency: theMission.availability_frequency,
               requester_id: theMission.requester_id,
               requiredSkills: theMission.requiredSkills,
               expertise_required: theMission.expertise_required,
               sector: theMission.sector,
               status: theMission.status,
               _id: theMission._id,
            });
         })
         .catch((err) => {
            console.log('Error while fetching mission', err);
         });
   };

   // //récupérer les id des candidates checked dans l'enfant
   // confirmCandidate = (candidateId) => {
   //   console.log("bénévole qui candidate", candidateId);
   //   this.setState({ candidating: candidateId });
   // };

   //quand le user clique pour candidater, changer le state de candidates de mission en rajoutant son id
   toCandidate = (event, missionId) => {
      event.preventDefault();
      service
         .get(`/api/${missionId}/addCandidate`)
         .then(() => {
            console.log(
               `la mission "${missionId}" à jour avec candidat "${this.props.loggedInUser._id}" et le status "En attente de confirmation"`
            );
            this.getSingleMission();
            this.props.history.push(`/users/${this.props.loggedInUser._id}`);
         })
         .catch((err) => console.log('error', err));
   };

   //instead of recalling getAllMissions in the setState above, check both states then display:
   // componentDidUpdate(prevProps, prevState) {
   //   console.log("just re-rendered", prevProps, prevState);
   //   if (([this.state] != [prevState])) {
   //     console.log("state missiondetails changed", prevState, this.state);
   //     this.getSingleMission();
   //   }
   // }

   formatDate = (date) => {
      let stringDate = JSON.stringify(date);
      // console.log("date", date);
      // console.log("stringDate", stringDate);
      const lastDate = stringDate.substring(1, 10);
      // console.log("splitlastDate", lastDate); // 2020/12/17
      return lastDate;
   };

   styleTextStatus = (status) => {
      let styleText;
      if (status === 'Disponible') {
         styleText = {
            color: 'green',
            textShadow: '1px 1px white',
            fontSize: '15px',
         };
      } else if (status === 'En attente de confirmation') {
         styleText = {
            color: 'blue',
            textShadow: '1px 1px white',
            fontSize: '15px',
         };
      } else if (status === 'Pourvue') {
         styleText = {
            color: 'red',
            textShadow: '1px 1px white',
            fontSize: '15px',
         };
      } else {
         styleText = { color: 'orange', textShadow: '1px 1px white' };
      }
      return styleText;
   };

   styleIconStatus = (status) => {
      let color;
      if (status === 'Disponible') {
         color = 'green';
      } else if (status === 'En attente de confirmation') {
         color = 'blue';
      } else if (status === 'Pourvue') {
         color = 'red';
      } else {
         color = 'orange';
      }
      return color;
   };

   render() {
      if (!this.state.title) {
         return (
            <div className='enChargement'>
               En chargement
               <VscLoading size={120} />
            </div>
         );
      }
      console.log('this.state', this.state);
      return (
         <div className='pageMission'>
            <div className='detailsMission'>
               <div className='detailsMissionBlock'>
                  {/* <h1 className="missionHeader">Détails de la mission</h1> */}
                  <div className='headerMissionSolo'>
                     <div className='headerLeft'>
                        <Link className='linkONG' to={`/users/${this.state.requester_id._id}`}>
                           <img
                              src={this.state.requester_id.profilePic}
                              alt='profilepic'
                              style={{ width: '120px' }}
                           ></img>
                           <span className='name'> {this.state.requester_id.username} </span>
                        </Link>
                     </div>
                     <div className='headerRight'>
                        <span style={this.styleTextStatus(this.state.status)}>
                           <GrStatusGoodSmall
                              className='status'
                              size={10}
                              color={this.styleIconStatus(this.state.status)}
                           />
                           {this.state.status}
                        </span>
                        <h3 className='missionHeader' style={{ fontStyle: 'italic' }}>
                           {this.state.expertise_required}
                        </h3>
                        <h2 className='missionHeader'>{this.state.title}</h2>
                     </div>
                  </div>
                  <hr></hr>
                  <p>
                     <GrLocation className='locationIcon' />
                     <span> Lieu :</span> {this.state.location}
                  </p>
                  <p>
                     <span>Secteur :</span> {this.state.sector}
                  </p>
                  <p>
                     <span>Date de début : </span>
                     {this.state.start_date}
                     <span> / Date de fin : </span>
                     {this.state.end_date}
                     {/* {this.formatDate(this.state.start_date)} */}
                  </p>

                  <p>
                     <span>Rythme :</span> {this.state.availability_frequency}
                  </p>
                  <p>
                     <span>Compétences requises :</span> {this.state.requiredSkills}
                  </p>
                  <p>
                     <span>Description </span>
                  </p>
                  <p> {this.state.description}</p>

                  <button
                     className='buttonHelp'
                     onClick={(event) => {
                        this.toCandidate(event, this.state._id);
                     }}
                  >
                     Proposer son aide{' '}
                  </button>

                  <Link className='redirect_link' to={'/missions'}>
                     Retour à la liste des missions
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

export default MissionDetails;
