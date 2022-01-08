import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Asthma from "./Components/pages/Asthma";
import AirPollution from "./Components/pages/AirPollution";
import Home from "./Components/pages/index";
import "./App.css";
import Navbar from "./Components/Navbar";
import MyMap from './Components/pages/MyMap'
import AirQualityDetails from './Components/pages/AirQualityDetails'
function App() {
  return (
    <div>
      <>
        <Router>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/Asthma" component={Asthma} />
            <Route path="/Air Pollution" component={AirPollution} />
            <Route path='/map' component={MyMap}/>
          <Route path='/details' component={AirQualityDetails}/>
          </Switch>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
