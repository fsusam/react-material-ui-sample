import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
});

const Header = props => {
  const loginButton = (
    <Link to="sign-in" component={RouterLink}>
<Button
      startIcon={<LockOpenOutlined />}
      href="#"
      color="primary"
      variant="outlined"
      className={props.classes.link}
    >
      Login
    </Button>
    </Link>
    
  );

  const logoutButton = (
    <Link to="" >
<Button
      startIcon={<LockOutlined />}
      href="#"
      color="secondary"
      variant="outlined"
      className={props.classes.link}
    >
      Logout
    </Button>
      
    </Link>
    
  );
      
  return (
    <header>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={props.classes.appBar}
      >
        <Toolbar className={props.classes.toolbar}>
          <DriveEtaIcon fontSize="large" />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={props.classes.toolbarTitle}
          >
            V-Finder
          </Typography>

          <nav>
            <Link
              component={RouterLink}
              variant="button"
              to="finder"
              color="textPrimary"
              className={props.classes.link}
            >
              Finder
            </Link>
          </nav>
          {props.isLoggedIn ? logoutButton : loginButton}
          <Link to="my-account" component={RouterLink}>
            <AccountCircleIcon fontSize="large" />
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Header);
