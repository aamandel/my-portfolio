import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProjectsPanel from './components/ProjectsPanel';
import About from './components/About';
import ProjectPage from './components/ProjectPage';

function App() {
    const [pageState, setPageState] = useState('Home');

    return (
        <div className="App">
            <Nav></Nav>
            <main>
                {pageState === 'Home' &&
                    <>
                        <Profile></Profile>
                        <ProjectsPanel setPageState={setPageState}></ProjectsPanel>
                        <About></About>
                    </>
                }
                {pageState !== 'Home' &&
                    <>
                        <ProjectPage pageState={pageState}></ProjectPage>
                    </>
                }
            </main>
        </div>
    );
}

export default App;
