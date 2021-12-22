import React from 'react'
import '../CSS/About.css'
import ava from '../img/ava.jpeg'

export const About = (props) => {
    return (
        <div className="condiv">
            <h1 className="subtopic">
                About Me
            </h1>
            <br />
            <p>
            Welcome to my website! My name is Jinwoo Park, an undergraduate computer science student at Georgia Tech interested in expanding his programming horizons through various personal projects. Whether it be through developing an Alexa skill at HackGT to recite dining hall menus or building a smart tutoring website to teach students how to code in Javascript, I am excited to jump into new tasks and am determined to follow through on my aspirations.<br/><br/>You are currently viewing my personal website, an ongoing project where I will be documenting all the exciting developments of my software engineering journey. Here you will find links to all my project repositories, my resume, my contact information, and some fun minigames to pass the time. Thanks for stopping by!
            </p>
            <div className='fun-facts'>
                <div className='facts'><img className="fact-image" style={{}} src="https://cdn-icons-png.flaticon.com/512/199/199430.png" alt="a fact" />I play multiple instruments, including guitar, saxophone, ukelele, and sometimes the piano</div>
                <div className='facts'><img className="fact-image" style={{borderRadius: '50%'}} src={ava} alt="a fact" />I have an eight year old cat named Ava that knows how to sit, give paw, and spin on command</div>
                <div className='facts'><img className="fact-image" style={{}} src="https://icon-library.com/images/globe-icon-png/globe-icon-png-4.jpg" alt="a fact" />I was born in South Korea, but I have also lived in India and am now living in the United States</div>
            </div>
        </div>
    );
}