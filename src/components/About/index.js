import React from 'react';

const About = () => {
    return (
        <section className='container'>
            <h2 className='mx-1' id="about-title">About Me</h2>
            <div className='about-text'>
                <p>
                    I’m a software developer open to remote or in-person work located in the Davis, California area. When I’m not programming I enjoy photography, exercising, camping and creating digital art. My field related interests include but are not limited to:
                </p>
                <ul>
                    <li key='1'>Machine Learning and Artificial Intelligence</li>
                    <li key='2'>Cryptography</li>
                    <li key='3'>Game Design/Development</li>
                    <li key='4'>Full-Stack Web Development</li>
                    <li key='5'>Statistics</li>
                    <li key='6'>Computer Networking</li>
                </ul>
                <p>
                    My experience earning my B.S. in Computer Science at the University of California, Santa Cruz gave me an excellent technical foundation and I am constantly learning and expanding my skill set. My thirst for knowledge and developing skills combined with the experience I’ve gained from producing numerous projects gives me confidence to approach any new enterprise.
                </p>
            </div>


        </section>
    );
}

export default About;