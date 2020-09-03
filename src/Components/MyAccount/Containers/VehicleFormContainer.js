import React from "react";
import { connect } from "react-redux";
import VehicleForm from "../Pages/VehicleForm";
import { createVehicle, updateVehicle } from "../../../Actions";

class VehicleFormContainer extends React.Component {
  handleSubmit = event => {
    if (this.props.myAccountReducer.vehicle.id === undefined)
      this.props.createVehicle({
        make: event.target.make.value,
        model: event.target.model.value,
        year: event.target.year.value,
        price: event.target.price.value
      });
    else 
    this.props.updateVehicle({
      id: this.props.myAccountReducer.vehicle.id,
      make: event.target.make.value,
      model: event.target.model.value,
      year: event.target.year.value,
      price: event.target.price.value
    });

    event.preventDefault();
  };

  render() {
    return (
      <VehicleForm
        vehicle={this.props.myAccountReducer.vehicle}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createVehicle: requestBody => dispatch(createVehicle(requestBody)),
    updateVehicle: requestBody => dispatch(updateVehicle(requestBody))
  };
};

const mapStateToProps = state => {
  return {
    myAccountReducer: state.myAccountReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleFormContainer);
