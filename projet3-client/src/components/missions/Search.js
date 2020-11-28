import React from 'react';

class Search extends React.Component {

  state = {
    required_expertise: ""
  }


  render (){
    return (
    <div className="Search">

{/*Filter by expertise*/}

      <div>
        <div> Droits de l'Homme et de l'enfant</div>
        <div> Soutien des associations et ESS</div>
        <div> Etudes de droit comparé</div>
        <div> Formation</div>
      </div>
     

    </div>
    )
  }
}

export default Search;