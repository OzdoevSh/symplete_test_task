import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import Getfibo from './components/getfibo';
import Getinf from './components/getinfo';

const App = () => (
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


export default App;
