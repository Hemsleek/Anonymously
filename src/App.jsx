import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.scss';



const App= () => {
  return (
    <div className="App">

    <Switch>
     <Route path="/" component={NavBar} exact/>
    </Switch>
    </div>
  );
}

export default App;
