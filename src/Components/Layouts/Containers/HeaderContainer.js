import React from "react";
import { connect } from "react-redux";
import Header from "../Pages/Header"

class HeaderContainer extends React.Component {
  
  render() {
    return <Header isLoggedIn={this.props.userReducer.isLoggedIn} />;
  }
}


const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

export default connect(mapStateToProps, null)(HeaderContainer);
