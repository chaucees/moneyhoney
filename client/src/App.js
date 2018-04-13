import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Budget from "./pages/Budget";
import Dashboard from "./pages/Dashboard";
import EditBudget from "./pages/EditBudget";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import FooterBar from "./components/Footer";
import Signup from "./pages/Signup";
import { LoginBtn } from "./components/Buttons";

class App extends Component {
  // NOTE: App.js does nothing now, everything has been moved to .routes.js so I can pass props more easily

  // render() {
    
  //   return (
  //     <Router>
  //       <div>
  //         <Nav />
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //           <Route exact path="/dashboard" component={Dashboard} />
  //           <Route exact path="/editbudget" component={EditBudget} />
  //           <Route exact path="/signup" component={Signup} />
  //           <Route exact path="/budget" component={Budget} />
  //         </Switch>
  //         <FooterBar />
  //       </div>
  //     </Router>
  //   )
  // }
}

export default App;

