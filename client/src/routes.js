import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Nav />
          <Switch>
            <Route path="/" 
                    render={(props) => <Home auth={auth} {...props} />} 
              />
              {/* <Route path="/home" 
                    render={(props) => <Home auth={auth} {...props} />} 
              /> */}
              <Route path="/callback" 
                    render={(props) => {
                      handleAuthentication(props);
                      return <Callback {...props} /> 
                    }}
              />
              <Route path="/dashboard" 
                    render={(props) => <Dashboard auth={auth} {...props} />}
              />
              <Route path="/editbudget" 
                    render={(props) => <EditBudget auth={auth} {...props} />}
              />
              <Route path="/signup" 
                    render={(props) => <Signup auth={auth} {...props} />} 
              />
              <Route path="/budget" 
                    render={(props) => <Budget auth={auth} {...props} />}
              />
          </Switch>
          <FooterBar />
        </div>
      </Router>
  );
}
