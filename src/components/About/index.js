import React from 'react';
import profilePic from "../../assets/profile photo/profile1.jpg";

const About = () => {
    return (
        <section>
            <h2>
                <h2 className='mx-1' id="about-title">About Me</h2>
            </h2>
            <div>
                <p className='mx-1' id="about-text">Hello here is a description of me;</p>
            </div>
        </section>
    );
}

export default About;