import React from 'react';
import Aconfirmer from './Aconfirmer';
import SuiviMissions from './SuiviMissions';

class Dashboard extends React.Component {
   render() {
      if (this.props.missionsAconfirmer.length === 0) {
         console.log('this.props.missionsAconfirmer', this.props.missionsAconfirmer);
         return <p>En chargement</p>;
      }
      return (
         <div>
            <Aconfirmer
               dashboard={this.props.dashboard}
               missionsAconfirmer={this.props.missionsAconfirmer}
               filterMissions={this.props.getMissions}
            />
            <SuiviMissions />
         </div>
      );
   }
}

export default Dashboard;
