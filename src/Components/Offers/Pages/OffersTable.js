import React from "react";
import MaterialTable from "material-table";

class OffersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Username", field: "username" },        
        { title: "Price", field: "price" }
      ]
    };
  }

  render() {
    return (
      <MaterialTable
        title=""
        columns={this.state.columns}
        data={this.props.offers}
        options={{
          selection: true
        }}       
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

export default OffersTable;
