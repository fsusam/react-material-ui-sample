import React from "react";
import { connect } from "react-redux";
import SignUp from "../Pages/SignUp";
import {signUp} from "../../../Actions"

class SignUpContainer extends React.Component {
  handleSubmit = event => {    
    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.password.email
    }    
    this.props.signUp(user,this.props.history)
    event.preventDefault();
  };

  render() {    
    return <SignUp handleSubmit={this.handleSubmit} />;
  }
}



const mapDispatchToProps = dispatch => {
  return {
    signUp: (user,history) => dispatch(signUp(user,history))
  };
};

export default connect(null, mapDispatchToProps)(SignUpContainer);
