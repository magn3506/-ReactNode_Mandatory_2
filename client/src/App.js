import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ProtectedRoute } from "./routes/protected.route";
import { PublicRoute } from "./routes/public.route";


// PAGES
import APP from "./pages/app/App";
import LOGIN from "./pages/login/Login";


function App() {

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/app" component={APP} />
        <PublicRoute path="/" component={LOGIN} />
        <PublicRoute path="/login" component={LOGIN} />
      </Switch>
    </Router>

  );
}

export default App;
