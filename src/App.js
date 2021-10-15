
import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login" login={login} setLogin = {setLogin}>
          <Login />
        </Route>
        <Router path="dashboard">
          <Dashboard />
        </Router>
        <Route exact path="/">
          {login
            ? <Dashboard />
            : <Login />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
