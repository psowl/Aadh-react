import React from "react";
import { handleUpload } from "../../auth-service";

class StepThree extends React.Component {
  state = {
    description: this.props.description,
    step: 3,
    errorMessage: "",
    profilePic: this.props.profilePic,
    logo: this.props.logo,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  sendToBack = (event) => {
    event.preventDefault();
    const { description } = this.state;

    //si 1 des champs de step1 userType, email, password, n'est pas rempli alors afficher message 'incomplet'
    if (description === "") {
      this.setState({ errorMessage: "Merci de compléter le formulaire" });
    }
    //si tous les champs de step1 userType, email, password sont remplis alors passer au step2
    else {
      this.props.liftState("description", this.state.description);
      this.props.liftState("profilePic", this.state.profilePic);
      this.props.liftState("logo", this.state.logo);
      this.props.liftState("step", this.state.step + 1); //afficher le step3 du form
    }
  };

  goBack = () => {
    this.props.liftState("step", this.state.step - 1); //afficher le step3 du form
  };

  //upload image
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    console.log("event ", e);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("profilePic", e.target.files[0]);
    uploadData.append("logo", e.target.files[1]);
    console.log("uploadData", uploadData)
  };

  render() {
    console.log("this.state.profilePic", this.state.profilePic);

    return (
      <div className="step_forms">
        <div>
          <div>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Décrivez-vous ou votre organisation en quelques mots"
              autoFocus
            ></textarea>
            {/* affichage conditionnel image profilePic ou logo */}
            <input
              type="file"
              alt=""
              name="profilePic"
              onChange={(e) => {
                this.handleFileUpload(e);
              }}
            />
          </div>
        </div>
        <button onClick={this.goBack}>Précédent</button>
        <button onClick={this.sendToBack}>Continuer</button>{" "}
        <div className="messagesOnDark">{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default StepThree;
