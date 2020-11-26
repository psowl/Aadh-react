import React from 'react';
import Historique from './Historique';
import Mission from './Mission';
import Organisation from './Organisation';
import Financement from './Financement';

class Presentation extends React.Component {
   state = { section: 'historique' };

   //affichage de la section cliquée dans la 2e partie du component
   showSection = (event, sectionName) => {
      //retirer le css cliquée du bouton cliqué précédemment/de tous les boutons
      const allButtons = document.querySelectorAll('li .section_button');
      console.log(allButtons);
      allButtons.forEach((el) => {
         console.log(el);
         el.classList.remove('active_button');
      });
      //afficher le texte compliqué
      this.setState({ section: sectionName });
      //mettre en forme le bouton cliqué
      event.target.classList.add('active_button');
   };

   render() {
      return (
         <div>
            <nav>
               <ul>
                  <li>
                     <h3
                        className='section_button active_button'
                        onClick={(event) => this.showSection(event, 'historique')}
                     >
                        Historique
                     </h3>
                  </li>
                  <li>
                     <h3
                        className='section_button'
                        onClick={(event) => this.showSection(event, 'mission')}
                     >
                        Notre Mission
                     </h3>
                  </li>
                  <li>
                     <h3
                        className='section_button'
                        onClick={(event) => this.showSection(event, 'organisation')}
                     >
                        Organisation
                     </h3>
                  </li>
                  <li>
                     <h3
                        className='section_button'
                        onClick={(event) => this.showSection(event, 'financement')}
                     >
                        Financement
                     </h3>
                  </li>
               </ul>
            </nav>
            <div className='section_content'>
               <div>{this.state.section === 'historique' && <Historique />}</div>
               <div>{this.state.section === 'mission' && <Mission />}</div>
               <div>{this.state.section === 'organisation' && <Organisation />}</div>
               <div>{this.state.section === 'financement' && <Financement />}</div>
            </div>
         </div>
      );
   }
}

export default Presentation;
