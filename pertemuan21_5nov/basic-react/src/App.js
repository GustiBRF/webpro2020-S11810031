import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Home} from "./Pagess";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                    </ul>
                </nav>
            <Switch>ute>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
};

export default App;