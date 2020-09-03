import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../../Actions";
import SignIn from "../Pages/SignIn";

class SignInContainer extends React.Component {
  handleSubmit = event => {
    console.log("SignIn submit...")
    const user = {
      username: event.target.username.value,
        password: event.target.password.value,
    }    
    this.props.signIn(user,this.props.history)
    event.preventDefault();
  };

  render() {    
    return <SignIn handleSubmit={this.handleSubmit} />;
  }
}



const mapDispatchToProps = dispatch => {
  return {
    signIn: (user,history) => dispatch(signIn(user,history))
  };
};

export default connect(null, mapDispatchToProps)(SignInContainer);
