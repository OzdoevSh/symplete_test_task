import React, { Component } from 'react';
import './App.css';
import Getfibo from './components/getfibo.js'
import Getinf from './components/getinfo.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class App extends Component{
  render(){
      return (
        <div>
            <Router>
                    <li>
                        <Link className="linkClass" to="/fibo">Вычислить число Фибоначчи</Link>
                    </li>
                    <li>
                        <Link className="linkClass" to="/info">Посмотреть информацию о запросах</Link>
                    </li>
                
                    <Switch>
                        <Route path="/info" exact>
                            <Getinf />
                        </Route>

                        <Route path="/fibo" exact>
                            <Getfibo />
                        </Route>
                        <Redirect to="/fibo" />
                    </Switch>
               
            </Router>
        
        </div>
      );
  }
}

export default App;
