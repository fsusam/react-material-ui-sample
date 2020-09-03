import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import OffersFormContainer from "./Containers/OffersFormContainer";
import OffersTableContainer from "./Containers/OffersTableContainer";


const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Offers = props => {  
  return (
    <Paper className={props.classes.root}>
      <Grid container spacing={3}>
          <Grid item xs={6}>
            <OffersFormContainer />
          </Grid>
          <Grid item xs={6}>
            <OffersTableContainer />
          </Grid>
        </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Offers);
