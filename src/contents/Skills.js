import React from 'react';
import '../CSS/Skills.css';

export const Skills = (props) => {
    // const [myskills] = useState(['Java', 'Javascript', 'C', 'Python', 'SQL', 'HTML', 'CSS']);

    return (
        <div className="condiv">
            <h1 className="subtopic">My skills</h1>
            <div className='skill-grid'>
                <div className='skill-box'><img className="skill-image" src="https://cdn-icons-png.flaticon.com/512/121/121152.png" alt="a skill" />Java</div>
                <div className='skill-box'><img className="skill-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="a skill" />Javascript</div>
                <div className='skill-box'><img className="skill-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="a skill" />Python</div>
                <div className='skill-box'><img className="skill-image" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="a skill" />C</div>
                <div className='skill-box'><img className="skill-image" src="https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png" alt="a skill" />SQL</div>
                <div className='skill-box'><img className="skill-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="a skill" />React</div>
                <div className='skill-box'><img className="skill-image" style={{}} src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="a skill" />Node.js</div>
                <div className='skill-box'><img className="skill-image" src="https://www.logolynx.com/images/logolynx/bb/bbdcfbb07f04e76ab33e94462b9a1122.png" alt="a skill" />MongoDB</div>
                <div className='skill-box'><img className="skill-image" src="https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text_.png" alt="a skill" />OpenCV</div>
            </div>
        </div>
    );
}