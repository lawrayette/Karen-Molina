import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Views/Home";
import Hacklab from "./Views/Hacklab"
import CCD from "./Views/Ccd"
import YoDigital from "./Views/YoDigital"

export default function App() {
  return (
    <Router>
      <Switch className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/hacklab" component={Hacklab} />
        <Route exact path="/ccd" component={CCD} />
        <Route exact path="/yodigital" component={YoDigital} />
      </Switch>
    </Router>
  );
}
