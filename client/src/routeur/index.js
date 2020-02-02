import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "../component/dashboard"

export default class index extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route component={Dashboard} path="/dashboard/:user" />
          </Switch>
        </Router>
    );
  }
}
