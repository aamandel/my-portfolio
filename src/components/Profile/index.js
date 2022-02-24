import React from 'react';

const Profile = () => {
    return (
        <section>
            <div className='profile-row'>
                <img src={process.env.PUBLIC_URL + `/assets/profile photo/profile1.jpg`} className="profile" alt="profilePic" />
                <div className='text-column'>
                    <h2 className='mx-1 home-name' id="about">Aaron Mandel</h2>
                    <p>Software Developer</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;