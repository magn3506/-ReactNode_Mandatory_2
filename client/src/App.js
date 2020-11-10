import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
import { PublicRoute } from "./routes/public.route";


// PAGES
import APP from "./pages/app/App";
import LOGIN from "./pages/login/Login";
import SIGNUP from "./pages/signup/Signup";
// TODO: CREATE 404-not found page

function App() {

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/app" component={APP} />
        <PublicRoute exact path="/" component={LOGIN} />
        <PublicRoute path="/signup" component={SIGNUP} />
        <PublicRoute path="/login" component={LOGIN} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>

  );
}

export default App;
