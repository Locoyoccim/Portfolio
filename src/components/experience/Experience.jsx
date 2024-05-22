import React from "react";
import '/src/components/experience/Experience.css';
import Aos from "aos";
import 'aos/dist/aos.css'

function Experience({job, children}) {
    Aos.init()
    return ( 
    <>
        <article id="experience" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='200'>
            <h3>{job}</h3>
            <p>{children}</p>
        </article>
    </> );
}

export default Experience;