import React from "react";
import Paper from "@material-ui/core/Paper";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

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

class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var user = this.state.user;
    user[name] = value;
    this.setState({
      user: user
    });
  };

  UNSAFE_componentWillMount() {
    if (this.props.user !== undefined) this.setState({ user: this.props.user });
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
                disabled
                fullWidth
                id="username"
                name="username"
                label="Username"
                value={this.state.user.username}
                onChange={this.handleChange}
              />
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={this.state.user.email}
                onChange={this.handleChange}
              />

              <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={this.state.user.password}
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

export default withStyles(styles)(AccountForm);
