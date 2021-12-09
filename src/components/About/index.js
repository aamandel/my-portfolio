import React from 'react';
import profilePic from "../../assets/profile photo/profile1.jpg";

const About = () => {
    return (
        <section>
            <h2>
                <img src={profilePic} className="profile" alt="profilePic" />
            </h2>
            <div>
                <h2 className='mx-1' id="about">Aaron Mandel</h2>
            </div>
        </section>
    );
}

export default About;