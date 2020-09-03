import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderContainer from "./Layouts/Containers/HeaderContainer";
import Finder from "./Finder";
import MyAccount from "./MyAccount";
import SignInContainer from "./UserAccess/Containers/SignInContainer";
import SignUpContainer from "./UserAccess/Containers/SignUpContainer";
import Offers from "./Offers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = props => {
  console.log("App isLoggedIn",props.isLoggedIn)
  return (
    <Router>
      <Grid justify="center" container>
        <Grid item xs={9}>
          <HeaderContainer />
        </Grid>
      </Grid>
      <div className="content">
        <Grid justify="center" container>
          <Grid item xs={8}>
            <Container fixed>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/finder" />}
                />
                <Route path="/finder" render={ routerProps => <Finder {...routerProps} />} />
                <Route path="/my-account" render={ routerProps =>  props.isLoggedIn ? <MyAccount {...routerProps} /> : routerProps.history.push("sign-in") } />
                <Route path="/offers" render={ routerProps =>  props.isLoggedIn ? <Offers {...routerProps} /> : routerProps.history.push("sign-in") } />
                <Route path="/sign-in" render={ routerProps => <SignInContainer {...routerProps} />} />
                <Route path="/sign-up" render={ routerProps => <SignUpContainer {...routerProps} />} />
              </Switch>
            </Container>
          </Grid>
        </Grid>
      </div>      
    </Router>
  );
}

export default App;