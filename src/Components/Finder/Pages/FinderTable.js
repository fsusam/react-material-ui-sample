import React from "react";
import MaterialTable from "material-table";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { IconButton } from "@material-ui/core";

class FinderTable extends React.Component {
  render () {
    if (this.props.vehicles.length > 0) {
      return (
        <MaterialTable
          title=""
          columns={[
            { title: "Owner", field: "owner" },
            { title: "Make", field: "make" },
            { title: "Model", field: "model" },
            { title: "Year", field: "year", type: "numeric" },
            { title: "Price", field: "price", type: "numeric" }
          ]}
          data={this.props.vehicles}
          actions={[
            {
              icon: 'detail',
              tooltip: 'Detail CVehicle',
              onClick: this.props.actionsDetailOnClick
            }
          ]}
          components={{
            Action: props => (
              <IconButton size="small" aria-label="delete" onClick={(event) => props.action.onClick(event, props.data)}>
                <LocalOfferIcon />
              </IconButton>
            ),
          }}
        />
      );
    } else {
      return <div></div>;
    }
  }
}


export default FinderTable;
