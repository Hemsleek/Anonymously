import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

//routes
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.scss';




const App= () => {
  return (
    <div className="App bg-indigo-200 h-screen">

    <Switch>
    <Route path="/" component={NavBar} exact/>
    <Route path="/Login" component={Login} exact/>
    <Route path="/Signup" component={Signup} exact/>
     
    </Switch>
    </div>
  );
}

export default App;
