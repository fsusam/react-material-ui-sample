import React from "react";
import { connect } from "react-redux";
import VehicleTable from "../Pages/VehicleTable";
import {
  fetchVehiclesByUsername,
  fillOutVehicleForm,
  deleteVehicles
} from "../../../Actions";

class VehicleTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };
  }

  onSelectionChangeHandle = rows => {
    console.log("Row:", rows);
    if (rows.length === 1) {
      this.props.fillOutVehicleForm(rows[0]);
    } else {
      this.props.fillOutVehicleForm(null);
    }
  };

  onClickActionDeleteHandle = (evt, data) => {
    console.log("data:", data);
    data.forEach(element => {
      this.props.deleteVehicles(element.id);  
    });    
  };

  render() {
    return (
      <VehicleTable
        onClickActionDeleteHandle={this.onClickActionDeleteHandle}
        onSelectionChange={this.onSelectionChangeHandle}
        fetchVehiclesHandler={this.props.fetchVehiclesByUsername}
        vehicles={this.props.myAccountReducer.vehicles}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fillOutVehicleForm: row => dispatch(fillOutVehicleForm(row)),
    deleteVehicles: id => dispatch(deleteVehicles(id)),
    fetchVehiclesByUsername: username =>
      dispatch(fetchVehiclesByUsername(username))
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
)(VehicleTableContainer);
