import React from "react";

function Search(props) {
  return (
    <div className="searchContainer">
      {/* search bar & filters */}
      <form className="searchform formStyle">
        <p>
          <input
            type="text"
            name="searchfield"
            placeholder="Saisir le mot clé"
            value={props.searchfield}
            onChange={(e) => props.onChange(e)}
          />
        </p>
        <h2>Recherche par critère</h2>
        <select
          name="availability_frequency"
          value={props.availability_frequency}
          onChange={(e) => props.onChange(e)}
        >
          <option value=""> Sélectionner le rythme</option>
          <option value="Régulier"> Régulier</option>
          <option value="Ponctuellement"> Ponctuellement</option>
          <option value="Temps plein"> Temps plein</option>
        </select>

        <input
          type="date"
          name="start_date"
          value={props.start_date}
          onChange={(e) => props.onChange(e)}
          placeholder="date de début"
        />

        <input
          type="date"
          name="end_date"
          value={props.end_date}
          onChange={(e) => props.onChange(e)}
          placeholder="date de fin"
        />

        <input
          type="text"
          name="location"
          value={props.location}
          onChange={(e) => props.onChange(e)}
          placeholder="lieu"
        />

        {/* <button>Rechercher</button> */}
      </form>
      <h2>Filtrer par expertise recherchée</h2>
      <ul className="filterExpertise">
        <li onClick={(event) => props.onClick(event, "expertise_required1")}>
          <h3>Droits de l'Homme et de l'enfant</h3>
        </li>

        <li onClick={(event) => props.onClick(event, "expertise_required2")}>
          <h3>Soutien des associations et des ESS</h3>
        </li>

        <li onClick={(event) => props.onClick(event, "expertise_required3")}>
          <h3>Etudes de droit comparé</h3>
        </li>

        <li onClick={(event) => props.onClick(event, "expertise_required4")}>
          <h3>Formation</h3>
        </li>
      </ul>
    </div>
  );
}

export default Search;
