import React from 'react';
import axios from 'axios';

class Actu extends React.Component {
   state = { user: '' };

   componentDidMount() {
      this.findTweet();
   }

   findTweet = () => {
      let url = 'https://api.twitter.com/2/users/2244994945';
      axios
         .get(url)
         .then((userFromAPI) => {
            console.log('userFromAPI', userFromAPI);
            // this.setState({ user: userFromAPI.user });
         })
         .catch((err) => console.log("échec dans le fetch d'id", err));
   };

   render() {
      return <div>Actu component</div>;
   }
}

export default Actu;
