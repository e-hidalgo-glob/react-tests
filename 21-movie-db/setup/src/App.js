import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route children={<SingleMovie />} path="/movies/:id"> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
