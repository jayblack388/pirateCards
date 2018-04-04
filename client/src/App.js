import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Pirates from "./pages/Pirates";
import Crew from "./pages/Crew";
import NoMatch from "./pages/NoMatch";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Crew} />
            <Route exact path="/crews/:id" component={Pirates} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
