import React from 'react';
import { Link } from 'react-router-dom';

class OneCandidate extends React.Component {
   state = { checked: false };

   //gérer le coche du candidat choisi, changer le state
   toggleSelection = (event) => {
      this.setState({ checked: !this.state.checked }, () => {
         //callback function pour asynchonous
         console.log(this.state.checked);
         let candidateId = event.target.id;
         if (this.state.checked) {
            this.props.confirmCandidate(candidateId);
         }
      });
   };

   render() {
      return (
         <div className='each_candidate'>
            <label>
               <Link to={`/users/${this.props.candidat._id}`}>{this.props.candidat.username}</Link>
            </label>
            <input
               type='checkbox'
               id={this.props.candidat._id} //pour utiliser l'id du candidat dans la DB
               onChange={this.toggleSelection}
               defaultChecked={this.state.checked}
            />
         </div>
      );
   }
}

export default OneCandidate;
