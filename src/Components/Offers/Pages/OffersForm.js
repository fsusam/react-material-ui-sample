import React from "react";
import Paper from "@material-ui/core/Paper";
import { TextField, Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
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

class OffersForm extends React.Component {
  
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
                id="price"
                name="price"
                label="Price"                
                onChange={this.handleChange}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(OffersForm);
