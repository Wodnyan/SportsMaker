import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, SignUp } from "./views/AuthPages";
import SearchPage from "./views/SearchPage";

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
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
