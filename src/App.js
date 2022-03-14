import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProjectsPanel from './components/ProjectsPanel';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
    const [pageState, setPageState] = useState('Home');
    const { pathname, hash, key } = useLocation();
    const history = useHistory();

    //useEffect hook to handle scrolling to an element on a page (anchor link)
    useEffect(() => {
        // default: scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // if hash is defined, attempt to scroll to element
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        <div>
            <Nav></Nav>
            <div className="App page-container">

                <Switch>
                    <Route exact path='/'>
                        <Profile></Profile>
                        <ProjectsPanel setPageState={setPageState}></ProjectsPanel>
                        <About></About>
                    </Route>
                    <Route path='/Project'>
                        <ProjectPage></ProjectPage>
                    </Route>
                    <Route exact path='/Contact'>
                        <Contact></Contact>
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>

        </div>
    );
}

export default App;
