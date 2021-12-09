import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ProjectsPanel from './components/ProjectsPanel';

function App() {
    const [pageState, setPageState] = useState('Home');

    return (
        <div className="App">
            <Nav></Nav>
            <main>
                {pageState === 'Home' &&
                    <>
                        <About></About>
                        <ProjectsPanel></ProjectsPanel>
                    </>
                }
            </main>
        </div>
    );
}

export default App;
