import React, { Component } from 'react';
import ImageCarousel from '../ImageCarousel';
import { v4 as uuidv4 } from 'uuid';
//TODO: switch to functional component

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.pageState = props.pageState;

        const projectDetails = [
            {
                title: 'Multithreaded HTTP Server',
                description: [
                    <p key='1'>During fall quarter of 2020 I took a Computer Systems Design course. I learned about Inter-Process Communication, Synchronization, Virtualization and more. Throughout the course I worked with a partner to continuously update an HTTP server written in C++. We started with basic CRUD operations and added more advanced features such as Backups, Recovery, Multithreading, and Redundancy.</p>,
                    <p key='2'>This experience was my introduction to the Client-server model and Multithreading. We allowed requests to be processed simultaneously and used mutexes to prevent multiple threads from accessing the same resource.</p>,
                    <p key='3'>After the course I was inspired to use my new understanding of computer networking to create a bare-bones game server which processed client packets and synchronized game activity. I wrote the game server in C# so that it could integrate seamlessly with the Unity Game Engine. I created a 3D world with simple graphics where players could walk around and interact with the physics. Although the game isn’t much fun to play in its current state, the project is an excellent template from which to begin adding more interesting gameplay.</p>
                ],
                galleryPaths: []
            },
            {
                title: 'Pacman AI Contest',
                description: [
                    <p key='1'>During winter quarter of 2021 I took an Introduction to Artificial Intelligence course as an elective at UC Santa Cruz. The course taught me about Heuristic Search, Constraint Satisfaction Problems, Reinforcement Learning, Bayesian Networks and more. I quickly realized my intense fascination with the possible applications of the ever-evolving field of AI!</p>,
                    <p key='2'>The final project in the course was a class-wide Pacman Capture the Flag AI competition which matched classmates’ agents against each other. The goal was to design two pacman agents with the goal of defending your own food and eating your opponents food.</p>,
                    <p key='3'>I began by training two Q-learning agents against the provided “baseline team”. I had some success, but realized that the agents had trouble generalizing against different teams and strategies. I then settled on designing Reflex agents from the ground up. I watched countless games and spent many hours tinkering with different techniques and approaches. I matched different versions of my agents against each other to improve them.</p>,
                    <p key='4'>Some strategies that worked were:</p>,
                    <ul key='5'>
                        <li key='6'>using two offense agents and mostly ignoring defense</li>
                        <li key='7'>splitting the food into top and bottom halves so my agents do not pursue the same food</li>
                        <li key='8'>distracting enemy defense agents with one of my offense agents while the other ate all the food</li>
                        <li key='9'>using the allotted fifteen seconds of pregame processing time to detect all of the dead ends so that the agents know when they are trapped and can react accordingly</li>
                        <li key='10'>much more</li>
                    </ul>,
                    <p key='11'>After spending a significant amount of time and energy (and having a great time along the way) I’m proud that my agents won the competition with an overall win rate of ~89%.</p>
                ],
                galleryPaths: [
                    {
                        id: uuidv4(),
                        path: '/assets/project photos/Pacman AI/Pacman1.gif'
                    },
                    {
                        id: uuidv4(),
                        path: '/assets/project photos/Pacman AI/Pacman2.gif'
                    },
                    {
                        id: uuidv4(),
                        path: '/assets/project photos/Pacman AI/Pacman3.gif'
                    },

                ]
            },
            {
                title: 'Rate My Surf',
                description: [
                    <p key='1'>The vision of Rate My Surf is to provide surfers in the San Francisco Bay Area with a resource to discover and review beaches. Additionally, current weather conditions are displayed to allow surfers some insight into a surfing location before they visit.</p>,
                    <p key='2'>I teamed up with some classmates in my Web Apps course to create this single-page application which is powered by PY4WEB and Vue.js. The process taught me about designing and handling database schema, dynamically loading data, CSS animations, frontend development with Vue.js, and API implementation.</p>,
                    <p key='3'>Users can create accounts, review beaches with written descriptions and pictures, and like other users' reviews. Current weather conditions at each beach are fetched using the Storm Glass API. For the purposes of our demo app we used the free version of Storm Glass, which allows for only 50 requests per day.</p>,
                    <p key='4'>I particularly enjoyed creating the image carousel on the home page using CSS keyframes and Vue.js. The images are loaded to the right of the viewport and are initially not visible, then they are slid into the viewport as the currently displayed image is slid out of frame. This animation makes the homepage feel more lively and interesting.</p>
                ],
                galleryPaths: [
                    {
                        id: uuidv4(),
                        path: '/assets/project photos/Rate My Surf/RMS1.png'
                    },
                    {
                        id: uuidv4(),
                        path: '/assets/project photos/Rate My Surf/RMS2.png'
                    },

                ]
            }
        ];

        this.displayTitle = '';
        this.displayDescription = [];
        this.displayGalleryPaths = [];
        this.findContent = function (projectName) {
            projectDetails.forEach(element => {
                if (element.title === projectName) {
                    this.displayTitle = element.title;
                    this.displayDescription = element.description;
                    this.displayGalleryPaths = element.galleryPaths;
                }
            });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section>
                {this.findContent(this.pageState)}

                <h2 className='' id="project-title">{this.displayTitle}</h2>
                {this.displayGalleryPaths.length > 0 &&
                    <ImageCarousel galleryPaths={this.displayGalleryPaths}></ImageCarousel>
                }
                <div className='project-text'>
                    {this.displayDescription}
                </div>
            </section>
        );
    }
}