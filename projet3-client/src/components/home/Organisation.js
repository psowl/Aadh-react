import React from 'react';

const Organisation = () => {
   return (
      <div className='organisation'>
         <img
            src='https://images.unsplash.com/photo-1512278753435-c834ff8a597a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt='organisation'
         />
         <div>
            <div>
               <h4>Le bureau</h4>
               <ul className="bureau">
                  <li>
                     <em>Président exécutif</em>
                     <p>FRANÇOIS BARRIÈRE</p>
                  </li>
                  <li>
                     <em>Président d’Honneur </em>
                     <p>OLIVIER COUSI </p>
                  </li>
                  <li>
                     <em>Directrice Générale</em>
                     <p>NOANNE TENNESON</p>
                  </li>
                  <li>
                     <em>Secrétaire Générale</em>
                     <p>NOÉMIE SAIDI-COTTIER</p>
                  </li>
                  <li>
                     <em>Trésorière</em>
                     <p>BÉNÉDICTE LEVIER</p>
                  </li>
               </ul>
            </div>
            <div>
               <h4>Le Conseil d’administration</h4>
               <p>
                  Le Conseil d’administration est composé de 16 administrateurs dont les 3 membres
                  du Bureau (le Président exécutif, la Secrétaire générale et la Trésorière), 2
                  administrateurs suppléants et la Directrice Générale.
               </p>
               <ul>
                  <li>ARNAUD ACHARD</li>
                  <li>FRANÇOIS BARRIÈRE</li>
                  <li>PAULINE BOUSSIN</li>
                  <li>JOSEPH BREHAM</li>
                  <li>JÉRÔME DEROULEZ</li>
                  <li>EMMANUEL DURAND</li>
                  <li>DANIEL KADAR</li>
                  <li>BÉNÉDICTE LEVIER</li>
                  <li>HIPPOLYTE MARQUETTY</li>
                  <li>FRÉDÉRIC MAURY</li>
                  <li>BENJAMIN PITCHO</li>
                  <li>ANASTASIA PITCHOUGUINA</li>
                  <li>MICHAEL POLKINGHORNE</li>
                  <li>NOÉMIE SAIDI-COTTIER</li>
                  <li>NOANNE TENNESON</li>
                  <li> NICOLAS WALKER</li>
               </ul>
               <p> Membres fondateurs</p>
               <ul>
                  <li>FRANÇOIS ZIMERAY</li>
                  <li>NOANNE TENNESON</li>
                  <li>CHRISTIAN CHARRIÈRE BOURNAZEL</li>
               </ul>
               <p> Membres d’honneur</p>
               <ul>
                  <li>DOMINIQUE ATTIAS</li>
                  <li>PIERRE SERVAN SCHREIBER</li>
                  <li>JEAN-PATRIK RAZON</li>
                  <li> SANDRA DORIZON</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default Organisation;
