import React from "react";
import { Link } from "react-router-dom";

function Actualites(props) {
  return (
    <div className="actualitesPage">
      <ul className="actuContainer">
      
        <li className="actuCard">
          <div className="dateActu">
            <p>4 novembre 2020</p>
          </div>
          <img
            src="https://ghost.probonolab.org/content/images/2020/09/Visuel-DEV-Factory--IDF--V2.png"
            alt="actuImg"
          ></img>
          <h3>
            {" "}
            Semaine du Pro Bono France 2020
          </h3>
          <p>
          Dans le cadre de la European Pro Bono Week, nous avons le plaisir de vous inviter à une semaine virtuelle dédiée au Pro Bono en France qui réunira les acteurs français du monde...
          </p>
          <Link to={`/actualites`}>
            <h3>Lire la suite...</h3>
          </Link>
        </li>
        <li className="actuCard">
          <div className="dateActu">
            <p>5 mai 2020</p>
          </div>
          <img
            src="https://www.auribeausursiagne.fr/wp-content/uploads/2019/09/violence.png"
            alt="actuImg"
          ></img>
          <h3>
            {" "}
            Covid-19 et droits humains – Lutte contre les violences conjugales{" "}
          </h3>
          <p>
            L’AADH propose de traiter via ses avocats membres plusieurs
            thématiques sur le sujet du covid-19 et droits humains. Un premier
            article rédigé par François…
          </p>
          <Link to={`/actualites`}>
            <h3>Lire la suite...</h3>
          </Link>
        </li>

        <li className="actuCard">
          <div className="dateActu">
            <p>27 avril 2020</p>
          </div>
          <img
            src="https://comarketing-news.fr/wp-content/uploads/coronavirus-web-pandemie-1536x905.jpg"
            alt="actuImg"
          ></img>
          <h3> Covid-19 et intervention de l’AADH</h3>
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

export default Actualites;
