import React from 'react';
import { Redirect, Router, Route, Switch } from "react-router-dom";
import App from './App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Budget from "./pages/Budget";
import Dashboard from "./pages/Dashboard";
import EditBudget from "./pages/EditBudget";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import FooterBar from "./components/Footer";
import Signup from "./pages/Signup";
import { Footer } from 'react-materialize';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Nav auth={auth}/>
          <Switch>
            <Route exact path="/" 
                    render={(props) => <Home auth={auth} {...props} />} 
              />
              <Route path="/home" 
                    render={(props) => <Home auth={auth} {...props} />} 
              />
              <Route exact path="/callback" 
                    render={(props) => {
                      handleAuthentication(props);
                      return <Callback {...props} /> 
                    }}
              />
              <Route exact path="/dashboard" 
                    render={(props) => (
                !auth.isAuthenticated() ? (
                  <Redirect to="/" />
                ) : (
                  <Dashboard auth={auth} {...props} />
                )
              )} />
              <Route exact path="/editbudget/:id" 
                    render={(props) => (
                !auth.isAuthenticated() ? (
                  <Redirect to="/" />
                ) : (
                  <EditBudget auth={auth} {...props} />
                )
              )} />
              {/* <Route exact path="/signup" 
                    render={(props) => <Signup auth={auth} {...props} />} 
              /> */}
              <Route exact path="/budget/:id" 
                    render={(props) => (
                !auth.isAuthenticated() ? (
                  <Redirect to="/" />
                ) : (
                  <Budget auth={auth} {...props} />
                )
              )} />
          </Switch>
          <FooterBar />
        </div>
      </Router>
  );
}
