import React from "react";
import MaterialTable from "material-table";

class VehicleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Make", field: "make" },
        { title: "Model", field: "model" },
        { title: "Year", field: "year" },
        { title: "Price", field: "price" }
      ]
    };
  }

  componentDidMount() {
    this.props.fetchVehiclesHandler();
  }

  render() {
    return (
      <MaterialTable
        title=""
        columns={this.state.columns}
        data={this.props.vehicles}
        options={{
          selection: true
        }}
        onSelectionChange={this.props.onSelectionChange}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            onClick: (evt, data) => {
              this.props.onClickActionDeleteHandle(evt,data)
            }  
          }
        ]}
      />
    );
  }
}

export default VehicleTable;
