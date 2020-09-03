import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import VehicleFormContainer from "./Containers/VehicleFormContainer";
import VehicleTableContainer from "./Containers/VehicleTableContainer";
import AccountFormContainer from "./Containers/AccountFormContainer";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const MyAccount = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={props.classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Account" />
        <Tab label="Manage Vehicle" />
        <Tab label="Offers" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <AccountFormContainer />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <VehicleFormContainer />
          </Grid>
          <Grid item xs={6}>
            <VehicleTableContainer />
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
};

export default withStyles(styles)(MyAccount);
