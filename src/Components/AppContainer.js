import React from "react";
import { connect } from "react-redux";
import App from "./App"

class AppContainer extends React.Component {
  
  render() {
    console.log("AppContainer isLoggedIn:", this.props.userReducer.isLoggedIn)
    return (
      <App isLoggedIn={this.props.userReducer.isLoggedIn} />
    );
  }
}


const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(AppContainer);
