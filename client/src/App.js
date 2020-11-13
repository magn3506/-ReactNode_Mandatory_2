
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
import { PublicRoute } from "./routes/public.route";
import { ProtectedResetPasswordRoute } from "./routes/protected.resetPassword.route";

// STYLES
import "./styles/reset/Reset.css";
import "./styles/colors/Colors.css";
import './Global.css';

// PAGES
import APP from "./pages/app/App";
import LOGIN from "./pages/login/Login";
import SIGNUP from "./pages/signup/Signup";
import FORGOT_PASSWORD from "./pages/forgot_password/Forgot_password";
import NOT_FOUND from "./pages/not_found/Not_found";
import RESET_PASSWORD from "./pages/reset_password/Reset_password";

// TODO: CREATE 404-not found page

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedResetPasswordRoute exact path="/resetPassword/:resetToken" component={RESET_PASSWORD} />
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
