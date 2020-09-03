import React from "react";
import { connect } from "react-redux";
import OffersTable from "../Pages/OffersTable";
import {
  deleteOfferByOfferId
} from "../../../Actions";

class OffersTableContainer extends React.Component {
  
  onClickActionDeleteHandle = (evt, data) => {
    console.log("data:", data);
    data.forEach(element => {
      this.props.deleteOfferByOfferId(element.id,this.props.offersReducer.vehicleId);  
    });    
  };

  render() {
    console.log("OffersTable:",this.props.offersReducer.offers) 
    return (
      <OffersTable
        onClickActionDeleteHandle={this.onClickActionDeleteHandle}               
        offers={this.props.offersReducer.offers}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOfferByOfferId: (offerId,vehicleId) =>
      dispatch(deleteOfferByOfferId(offerId,vehicleId))
  };
};

const mapStateToProps = state => {
  return {
    offersReducer: state.offersReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersTableContainer);
