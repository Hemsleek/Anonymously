import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login';

import './App.scss';




const App= () => {
  return (
    <div className="App bg-indigo-200 h-screen">

    <Switch>
    <Route path="/" component={NavBar} exact/>
    <Route path="/Login" component={Login} exact/>
     
    </Switch>
    </div>
  );
}

export default App;
