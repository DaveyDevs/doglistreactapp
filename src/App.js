import React, { useState, useEffect } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import AppContext from "./AppContext";
import { DogsList } from "./dogs/DogsList";
import { DogDetails } from "./dogs/DogDetails";
import { About } from "./About";
import { Header } from "./Header";
import { Footer } from "./Footer";

const API_URL = "https://api.thedogapi.com/v1/breeds";

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDogs = async () => {
    try {
      const res = await fetch(API_URL);
      const dogsResults = await res.json();
      setDogs(dogsResults);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  // App.js continued
  const userSettings = {
    dogs: dogs,
    loading: loading,
    setDogs,
    setLoading,
  };

  useEffect(() => {
    getDogs();
    // getDags();
  }, []);

  return (
    <AppContext.Provider value={userSettings}>
      <div className="App">
        <main>
          <Router>
            <Header />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dog/:id">
                <DogDetails />
              </Route>
              <Route path="/">
                <DogsList />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
