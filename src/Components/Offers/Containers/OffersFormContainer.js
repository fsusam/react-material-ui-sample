import React from "react";
import { connect } from "react-redux";
import OffersForm from "../Pages/OffersForm";
import { sendOffer } from "../../../Actions";

class OffersFormContainer extends React.Component {
  handleSubmit = event => {
    this.props.sendOffer(
      {        
        vehicleId:this.props.offersReducer.vehicleId,        
        username:this.props.userReducer.user.username,
        price: event.target.price.value
      }
    );
    event.preventDefault();
  };

  render() {
    return (
      <OffersForm        
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    sendOffer: requestBody => dispatch(sendOffer(requestBody))
  };
};

const mapStateToProps = state => {
  return {
    offersReducer: state.offersReducer,
    userReducer: state.userReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersFormContainer);
