import React from 'react';

function Search (props) {

    return (
    <div className="search">

            
      {/* search bar & filters */}
        <form className="searchform">
        
        <p>
         <input type="text" name="search" placeholder="Saisir le mot clé" value={props.query} onChange={(e) => props.onChange(e)}/>
        </p>

          {/* <select name="availability_frequency" value={props.availability_frequency} onChange={(e) => props.updateQuery(e.target.value)}> 
          <option value=""> Sélectionner le rythme</option>
          <option value="Régulier"> Régulier</option>
          <option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option>
          </select> 

          <input type="date" name="start_date" value={props.start_date} onChange={(e) => props.updateQuery(e.target.value)} placeholder="date de début"/>

          <input type="date" name="end_date" value={props.end_date} onChange={(e) => props.updateQuery(e.target.value)} placeholder="date de fin"/>
          
          <input type="text" name="location" value={props.location} onChange={(e) => props.updateQuery(e.target.value)} placeholder="lieu"/> */}

          {/* <button>Rechercher</button> */}
        </form>

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