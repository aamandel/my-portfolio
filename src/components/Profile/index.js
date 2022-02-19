import React from 'react';
import profilePic from "../../assets/profile photo/profile1.jpg";

const Profile = () => {
    return (
        <section>
            <div className='profile-row'>
                <img src={profilePic} className="profile" alt="profilePic" />
                <div className='text-column'>
                    <h2 className='mx-1 home-name' id="about">Aaron Mandel</h2>
                    <p>Software Developer</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;