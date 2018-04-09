import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./pages/Budget";
import Dashboard from "./pages/Dashboard";
import EditBudget from "./pages/EditBudget";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./pages/Signup"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/editbudget" component={EditBudget} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/budget" component={Budget} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

