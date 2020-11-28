import React from 'react';

function Search (props) {

    return (
    <div className="search">

      <input type="search" value={props.query} onChange={(e) => props.updateQuery(e.target.value)} />

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