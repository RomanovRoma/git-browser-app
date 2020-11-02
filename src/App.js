import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/:userName" component={() => <Home />} />
          <Route exact path="/:userName/:repositoryName" component={() => <Home />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
