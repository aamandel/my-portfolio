import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProjectsPanel from './components/ProjectsPanel';
import About from './components/About';

function App() {
    const [pageState, setPageState] = useState('Home');

    return (
        <div className="App">
            <Nav></Nav>
            <main>
                {pageState === 'Home' &&
                    <>
                        <Profile></Profile>
                        <ProjectsPanel></ProjectsPanel>
                        <About></About>
                    </>
                }
            </main>
        </div>
    );
}

export default App;
