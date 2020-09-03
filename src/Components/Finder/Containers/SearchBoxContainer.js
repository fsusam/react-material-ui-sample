import React from "react";
import { connect } from "react-redux";
import SearchBox from "../Pages/SearchBox";
import { fetchVehicles } from "../../../Actions";

class SearchBoxContainer extends React.Component {
  handleKeyDown = ev => {
    if (ev.key === "Enter") {
      this.props.fetchVehicles();
      ev.preventDefault();
    }
  };

  render() {
    console.log("SearchBoxContainer render..");
    return <SearchBox handleKeyDown={this.handleKeyDown} />;
  }
}



const mapDispatchToProps = dispatch => {
  return {
    fetchVehicles: () => dispatch(fetchVehicles())
  };
};

export default connect(null, mapDispatchToProps)(SearchBoxContainer);
