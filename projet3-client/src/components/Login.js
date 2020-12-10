import React from "react";
import { Link, Redirect } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";
import { login } from "./auth-service";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
    redirect: false,
    user: {},
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    login(email, password)
      .then((response) => {
        console.log("response login✅or❌", response);
        this.props.updateUser(response);
        this.setState({ user: response });
        this.setState({ email: "", password: "", redirect: true });
        // console.log(response.username)
        // this.props.history.push('/missions');  //rediriger vers une page spécifique
      })
      .catch((error) =>
        this.setState({ errorMessage: "Identifiant ou mot de passe incorrect" })
      );
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    //redirection vers l'espace perso du user quand il se logue
    if (this.state.redirect) {
      return <Redirect to={`/users/${this.state.user._id}`} />;
    }

    return (
      <div className="loginScreen logSignbackground">
        <div className="logSignScreenPopup">
          <Link to="/">
            <CgCloseR className="closeIcon" />
          </Link>
          <Link id="buttonMonEspace" to="/login">
            MON ESPACE
          </Link>
          <Link id="buttonInscrire" to="/signup">
            S'INSCRIRE
          </Link>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="email"
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="mot de passe"
              ></input>
            </div>

            <button id="buttonIcon">
              <RiLoginBoxFill className="loginIcon" />
              <span>Se connecter</span>
            </button>
          </form>
          <div className="messagesOnDark">
            {this.state.errorMessage && this.state.errorMessage}
          </div>

          {/* for css overlay

          <div align="center">
            <a href="#loginScreen">Click here to Log In</a>
          </div>
          <div id="loginScreen">
            <Link to="/">
              <CgCloseR className="closeIcon" />
            </Link>
          </div>
          <div id="cover"></div>
        */}
        </div>
      </div>
    );
  }
}

export default Login;
