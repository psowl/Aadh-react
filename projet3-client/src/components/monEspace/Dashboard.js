import React from 'react';
import Aconfirmer from './Aconfirmer';
import SuiviMissions from './SuiviMissions';

class Dashboard extends React.Component {
   render() {
      return (
         <div>
            <Aconfirmer dashboard={this.props.dashboard} missions={this.props.missions} />
            <SuiviMissions />
         </div>
      );
   }
}

export default Dashboard;
