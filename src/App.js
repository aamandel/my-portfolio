import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProjectsPanel from './components/ProjectsPanel';
import About from './components/About';
import ProjectPage from './components/ProjectPage';


function App() {
    const [pageState, setPageState] = useState('Home');

    return (
        <Router>
            <div className="App">
                <Nav></Nav>
                <Switch>
                    <Route path='/Home'>
                        <Profile></Profile>
                        <ProjectsPanel setPageState={setPageState}></ProjectsPanel>
                        <About></About>
                    </Route>
                    <Route path='/Project'>
                        <ProjectPage pageState={pageState}></ProjectPage>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
