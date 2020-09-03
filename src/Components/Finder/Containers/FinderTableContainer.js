import React from "react";
import { connect } from "react-redux";
import FinderTable from "../Pages/FinderTable";
import {fetchOffersByVechileId} from "../../../Actions"

class FinderTableContainer extends React.Component {

  actionsDetailOnClick = (event, rowData)  => {
    this.props.fetchOffersByVechileId(rowData.id,this.props.history)    
  }

  render() {
    console.log("FinderTableContainer render..")
    return <FinderTable actionsDetailOnClick={this.actionsDetailOnClick} vehicles={this.props.finderReducer.vehicles} />;
  }
}


const mapStateToProps = state => {
  return {
    finderReducer: state.finderReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffersByVechileId: (vehicleId,history) => dispatch(fetchOffersByVechileId(vehicleId,history))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FinderTableContainer);
