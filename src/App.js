import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import { DogsList } from "./dogs/DogsList";
import { DogDetails } from "./dogs/DogDetails";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/dog/:id">
              <DogDetails />
            </Route>
            <Route path="/">
              <DogsList />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
