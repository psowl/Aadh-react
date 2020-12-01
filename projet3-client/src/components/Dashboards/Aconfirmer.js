import React from 'react';

class Aconfirmer extends React.Component {
   //aller chercher les missions avec id solliciteur et statut à valider
   render() {
      //return en JSX: afficher le contenu seulement si missions sont arrivées dans le component
      if (this.props.missions.length === 0) {
         return <p>Loading</p>;
      }
      return (
         <div>
            {this.props.missions.title}
            {this.props.missions.candidates}
            <h2>En chargement </h2>
            ((<h3>Mission(s) à confirmer</h3>), (
            <ul>
               {this.props.dashboard &&
                  this.props.missions.map((el) => (
                     <li key={el._id}>
                        <h2>{el.title}</h2>
                        <p>Liste des candidats</p>
                        <ul>
                           {el.candidates.map((candidate, index) => (
                              <li key={index}>{candidate.username}</li>
                           ))}
                        </ul>
                     </li>
                  ))}
            </ul>
            ))
            <ul>
               <li>
                  <label></label>
                  <input type='checkbox'></input>
               </li>
            </ul>
            <button>Confirmer</button>
         </div>
      );
   }
}

export default Aconfirmer;
