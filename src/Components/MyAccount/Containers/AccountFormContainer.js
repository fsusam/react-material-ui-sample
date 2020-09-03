import React from "react";
import { connect } from "react-redux";
import AccountForm from "../Pages/AccountForm";
import {updateUser} from "../../../Actions"


class AccountFormContainer extends React.Component {
  handleSubmit = event => {
    this.props.updateUser({  
      id: this.props.userReducer.user.id,
      username: this.props.userReducer.user.username,   
      email: event.target.email.value,
      password: event.target.password.value      
    });

    event.preventDefault();
  };

  render() {
    console.log("FinderTableContainer render..");
    return <AccountForm handleSubmit={this.handleSubmit} user={this.props.userReducer.user} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    updateUser: requestBody => dispatch(updateUser(requestBody))
  };
};

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountFormContainer);
