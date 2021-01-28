import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import { DogsList } from "./dogs/DogsList";
import { DogDetails } from "./dogs/DogDetails";
import { Footer } from "./Footer";

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
        <Footer />
      </main>
    </div>
  );
}

export default App;
