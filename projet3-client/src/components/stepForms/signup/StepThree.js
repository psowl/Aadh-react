import React from 'react';

class StepThree extends React.Component {
   state = { description: '', step: 3 };

   handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
   };

   //pousser les inputs dans le component parent "mainSinup"
   toContinue = (event) => {
      this.props.liftState('description', this.state.description);
      this.props.liftState('step', this.state.step + 1);
   };

   render() {
      return (
         <div>
            <div>
               <div>
                  <textarea
                     name='description'
                     value={this.state.description}
                     onChange={this.handleChange}
                     autoFocus
                  ></textarea>
               </div>
            </div>
            <button onClick={this.toContinue}>Je m'inscris</button>
         </div>
      );
   }
}

export default StepThree;
