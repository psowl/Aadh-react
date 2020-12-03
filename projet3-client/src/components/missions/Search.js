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

        <h2 onClick={(event) => props.onClick(event, "expertise_required1") }>
        Droits de l'Homme et de l'enfant
       </h2>


       <h2 onClick={(event) => props.onClick(event, "expertise_required2") }>
        Soutien des associations et des ESS
       </h2>

       <h2 onClick={(event) => props.onClick(event, "expertise_required3") }>
        Etudes de droit comparé
       </h2>
       
       <h2 onClick={(event) => props.onClick(event, "expertise_required4") }>
        Formation
       </h2>

{/*filtering by clicking on below expertise*/}
        {/* <div className="expertise_boxes">
          <form>

          <select name="expertise_required" value={props.expertise_required} onChange={(e) => props.onChange(e)}> 
          <option value=""> Sélectionner l'expertise</option>
          <option value="Droits de l'Homme et de l'enfant"> Droits de l'Homme et de l'enfant</option>
          <option value="Soutien des associations et des ESS"> Soutien des associations et des ESS</option>
          <option value="Etudes de droit comparé"> Etudes de droit comparé</option>
          <option value="Formation"> Formation</option>
          </select> 

          </form>
        </div> */}

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