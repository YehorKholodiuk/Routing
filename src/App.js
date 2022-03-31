import React from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

function App() {

        return (
            <div className="wrapper">
                <h1>Application</h1>

                    <Routes>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/preferences">
                            <Preferences />
                        </Route>
                    </Routes>
            </div>
        );
    }


    export default App;
