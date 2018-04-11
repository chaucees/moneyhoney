import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./pages/Budget";
import Dashboard from "./pages/Dashboard";
import EditBudget from "./pages/EditBudget";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import FooterBar from "./components/Footer";
import Signup from "./pages/Signup";
import { LoginBtn } from "./components/Buttons";


const App = () => (
  <Router>
    <div>
      <Nav />
      {/* <div className ="right">
        <LoginBtn />
      </div> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/editbudget" component={EditBudget} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/budget" component={Budget} />
      </Switch>
      <FooterBar />
    </div>
  </Router>
);

export default App;

