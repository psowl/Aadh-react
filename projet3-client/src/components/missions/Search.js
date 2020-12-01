import React from 'react';
import {Link} from 'react-router-dom'

function Search (props) {

    return (
    <div className="search">

            
      {/* search bar & filters */}
        <form className="searchform">
        
        <p>
         <input type="text" name="searchfield" placeholder="Saisir le mot clé" value={props.searchfield} onChange={(e) => props.onChange(e)}/>
        </p>

          <select name="availability_frequency" value={props.availability_frequency} onChange={(e) => props.onChange(e)}> 
          <option value=""> Sélectionner le rythme</option>
          <option value="Régulier"> Régulier</option>
          <option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option>
          </select> 

          <input type="date" name="start_date" value={props.start_date} onChange={(e) => props.onChange(e)} placeholder="date de début"/>

          <input type="date" name="end_date" value={props.end_date} onChange={(e) => props.onChange(e)} placeholder="date de fin"/>
          
          <input type="text" name="location" value={props.location} onChange={(e) => props.onChange(e)} placeholder="lieu"/>

          {/* <button>Rechercher</button> */}
        </form>

{/*filtering by clicking on below expertise*/}
        <div className="expertise_boxes">
          <ul>
            <li><Link to='/missions?expertise_required=Droits%20de%20l%27Homme%20et%20de%20l%27enfant'>Droits de l'Homme et de l'enfant</Link></li>
            <li><Link to='/missions?expertise_required=Soutien%20des%20associations%20et%20des%20ESS'>Soutien des associations et des ESS</Link></li>
            <li><Link to='/missions?expertise_required=Etudes%20de%20droit%20compar%C3%A9'>Etudes de droit comparé</Link></li>
            <li><Link to='/missions?expertise_required=Formation'>Formation</Link></li>
          </ul>
        </div>

    </div>
    )
  
}

// Filter by expertise

//       <div>
//         <div> Droits de l'Homme et de l'enfant</div>
//         <div> Soutien des associations et ESS</div>
//         <div> Etudes de droit comparé</div>
//         <div> Formation</div>
//       </div>
     

export default Search;