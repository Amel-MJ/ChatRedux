import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import 'bootstrap/dist/js/bootstrap.min.js'

import Routeur from "./routeur/index"

export default class App extends Component {

  render() {
    return (
      <div>
        <Routeur/>
      </div>
    );
  }
}