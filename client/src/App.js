import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
import { PublicRoute } from "./routes/public.route";


// PAGES
import APP from "./pages/app/App";
import LOGIN from "./pages/login/Login";
import SIGNUP from "./pages/signup/Signup";
import FORGOT_PASSWORD from "./pages/forgot_password/Forgot_password";
import NOT_FOUND from "./pages/not_found/Not_found";

// TODO: CREATE 404-not found page

function App() {

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/app" component={APP} />
        <PublicRoute exact path="/" component={LOGIN} />
        <PublicRoute path="/signup" component={SIGNUP} />
        <PublicRoute path="/login" component={LOGIN} />
        <PublicRoute path="/forgot_password" component={FORGOT_PASSWORD} />
        <Route path="*" component={NOT_FOUND} />
      </Switch>
    </Router>

  );
}

export default App;
