import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

const DashboardSearch = (props) => {
   return (
      <div className='dashboardSearch'>
         <input
            type='text'
            name='searchfield'
            value={props.searchfield}
            onChange={(e) => props.onChange(e)}
            placeholder='Rechercher une mission'
         ></input>
         <FiRefreshCcw onClick={props.getMissions} />
      </div>
   );
};

export default DashboardSearch;
