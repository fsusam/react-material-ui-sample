import React from "react";
import { Paper, Grid } from "@material-ui/core";
import SearchBoxContainer from "./Containers/SearchBoxContainer";
import FinderTableContainer from "./Containers/FinderTableContainer";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const FinderMain = (props) => {  
  return (
    <div className={props.classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={props.classes.paper}>
            <SearchBoxContainer />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <FinderTableContainer {...props}/>           
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(FinderMain)