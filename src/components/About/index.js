import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>

            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra. Mi tempus imperdiet nulla malesuada. Sed turpis tincidunt id aliquet risus feugiat. Turpis massa tincidunt dui ut ornare lectus.</p>
        </section>
    )
};

export default About;