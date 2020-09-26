import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingInfo from "./components/ListingInfo";
import { Login, SignUp } from "./views/AuthPages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/auth/login">
            <Login />
          </Route>
          <Route exact path="/auth/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/">
            <ListingInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
