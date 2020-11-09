import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
import { PublicRoute } from "./routes/public.route";


// PAGES
import APP from "./pages/app/App";
import LOGIN from "./pages/login/Login";
import SIGNUP from "./pages/signup/Signup";

function App() {

  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={LOGIN} />
        <PublicRoute path="/login" component={LOGIN} />
        <PublicRoute path="/signup" component={SIGNUP} />
        <ProtectedRoute exact path="/app" component={APP} />
      </Switch>
    </Router>

  );
}

export default App;
