import React from "react";
import Paper from "@material-ui/core/Paper";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class VehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {
        make: "",
        model: "",
        year: "",
        price: ""
      }
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log("value:", value);
    console.log("name:", name);
    var vehicle = this.state.vehicle;
    vehicle[name] = value;
    this.setState({
      vehicle: vehicle
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Vehicle:", nextProps.vehicle);
    if (nextProps.vehicle !== undefined)
      this.setState({ vehicle: nextProps.vehicle });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Paper className={this.props.classes.paper}>
          <form
            className={this.props.classes.root}
            noValidate
            autoComplete="off"
            onSubmit={this.props.handleSubmit}
          >
            <div>
              <TextField
                required
                fullWidth
                id="make"
                name="make"
                label="Make"
                value={this.state.vehicle.make}
                onChange={this.handleChange}
              />
              <TextField
                required
                fullWidth
                id="model"
                name="model"
                label="Model"
                value={this.state.vehicle.model}
                onChange={this.handleChange}
              />
              <TextField
                required
                fullWidth
                id="year"
                name="year"
                label="Year"
                value={this.state.vehicle.year}
                onChange={this.handleChange}
              />
              <TextField
                required
                fullWidth
                id="price"
                name="price"
                label="Price"
                value={this.state.vehicle.price}
                onChange={this.handleChange}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(VehicleForm);
