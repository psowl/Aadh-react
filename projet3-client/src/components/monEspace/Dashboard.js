import React from 'react';
import Aconfirmer from './Aconfirmer';
import SuiviMissions from './SuiviMissions';

class Dashboard extends React.Component {
   render() {
      return (
         <div className='dashboard_missions'>
            <Aconfirmer
               dashboard={this.props.dashboard}
               missionsAconfirmer={this.props.missionsAconfirmer}
               filterMissions={this.props.getMissions}
            />
            <SuiviMissions
               dashboard={this.props.dashboard}
               otherMissions={this.props.otherMissions}
               filterMissions={this.props.getMissions}
            />
         </div>
      );
   }
}

export default Dashboard;
