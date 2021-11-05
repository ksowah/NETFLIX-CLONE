import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';


function App() {


  return (

    <>
    <Router>
      <Switch>
          <Route exact path='/'>
              <Login />
          </Route>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/sign-up'>
              <SignUp/>
          </Route>
      </Switch>
  </Router>
  

  </>

   
  );
}

export default App;
