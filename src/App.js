import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Checkout from "./Pages/Checkout";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Login = lazy(() => import("./Pages/Login"));
const checkout = lazy(() => import("./Pages/Checkout"));

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/checkout" component={Checkout} />
            <Route component={Login} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
