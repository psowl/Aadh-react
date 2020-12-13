import React from "react";
import { BiSearchAlt } from "react-icons/bi";
//import { FaCommentsDollar } from "react-icons/fa";

function Search(props) {
  // const formatDate = (date) => {
  //   let stringDate = JSON.stringify(date);
  //   // console.log("date", date);
  //   // console.log("stringDate", stringDate);
  //   const lastDate = stringDate.substring(1, 10);
  //   // console.log("splitlastDate", lastDate); // 2020/12/17
  //   return lastDate;
  // };

  return (
    <div className="searchContainer">
      {/* search bar & filters */}
      <form className="searchform formStyle">
        <p>
          <BiSearchAlt
            className="searchIcon"
            // onChange={(e) => props.onChange(e)}
          />
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

        <label className="DateInputLabel">
          Date de début :
          <input
            className="DateInput"
            type="date"
            name="start_date"
            value={props.start_date}
            // value={formatDate(props.start_date)}
            onChange={(e) => props.onChange(e)}
            placeholder="date de début"
          />
        </label>

        <label className="DateInputLabel">
          Date de fin :
          <input
            className="DateInput"
            type="date"
            name="end_date"
            value={props.end_date}
            // value={formatDate(props.end_date)}
            onChange={(e) => props.onChange(e)}
            placeholder="date de fin"
          />
        </label>

        <input
          className="locationInput"
          type="text"
          name="location"
          value={props.location}
          onChange={(e) => props.onChange(e)}
          placeholder="Lieu"
        />

        {/* <button>Rechercher</button> */}
      </form>
      <div className="filterContainer">
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
    </div>
  );
}

export default Search;
