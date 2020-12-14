import React from "react";
import { Link } from "react-router-dom";

function ActuSolo(props) {
  return (
    <div className="actualitesSolo">
      <ul className="actuContainer">
        <li className="actuCard">
          <div className="dateActu">
            <p>27 avril 2020</p>
          </div>
          <img
            src="https://comarketing-news.fr/wp-content/uploads/coronavirus-web-pandemie-1536x905.jpg"
            alt="actuImg"
          ></img>
          <h3> Covid-19 et intervention de l’’AADH</h3>
          <p>
            En cette période de crise sanitaire, l’Alliance des Avocats pour les
            Droits de l’Homme est solidaire envers toutes les associations
            durant cette période de…
          </p>
          <Link to={`/actualites`}>
            <h3>Lire la suite...</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ActuSolo;
