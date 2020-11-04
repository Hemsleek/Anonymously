import React from 'react'
import {Switch, Route} from 'react-router-dom'


//routes
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.scss';




const App= () => {
  return (
    <div className="App bg-indigo-200 h-screen">

    <Switch>
    <Route path="/" component={HomePage} exact/>
    <Route path="/Login" component={Login} exact/>
    <Route path="/Signup" component={Signup} exact/>
     
    </Switch>
    </div>
  );
}

export default App;
