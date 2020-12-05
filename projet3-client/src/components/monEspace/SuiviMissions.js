import React from 'react';
import DashboardSearch from './DashboardSearch';
import { FaRegEdit } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class SuiviMissions extends React.Component {
   formatDate = (date) => {
      date = new Date(date);
      return date.toDateString();
   };

   render() {
      return (
         <div className='otherMissions'>
            <DashboardSearch />
            <ul className='list_missions'>
               {this.props.dashboard &&
                  this.props.otherMissions.map((el) => (
                     <li key={el._id} className='each_mission'>
                        <section>
                           <div className='entete'>
                              <div>
                                 <h2>
                                    <Link to={`/missions/${el._id}`}>{el.title}</Link>
                                 </h2>
                                 <p>
                                    {this.formatDate(el.start_date)}
                                    <em> au </em>
                                    {this.formatDate(el.end_date)}
                                 </p>
                              </div>
                              <Link to={`/missions/edit/${el._id}`}>
                                 <FaRegEdit size={25} />
                              </Link>{' '}
                           </div>
                           <div className='selected_candidate'>
                              {el.volonteerSelected ? (
                                 <div className='each_candidate'>
                                    <BsFillPersonCheckFill size={25} />
                                    <Link to={`/users/${el.volonteerSelected._id}`}>
                                       {el.volonteerSelected.username}
                                    </Link>
                                 </div>
                              ) : (
                                 <p>pas de candidat</p>
                              )}

                              <p className='status'>{el.status}</p>
                           </div>
                        </section>
                     </li>
                  ))}
            </ul>
         </div>
      );
   }
}

export default SuiviMissions;
