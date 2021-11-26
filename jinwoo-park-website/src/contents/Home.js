import React from 'react';
import ProfilePic from '../img/IMG_6147.jpg';
import TypingEffect from 'react-typing-effect';
import {Social} from '../components/Social.js';
import '../CSS/Home.css';

export const Home = (props) => {
    return (
        <div className="condiv home">
            <img src={ProfilePic} title="Hello there!" className="profilepic" alt="Hello!"></img>
            <p></p>
            <TypingEffect className="typingeffect" text={['Hi! My name is Jinwoo Park!']} speed={100} eraseDelay={5000}></TypingEffect>
            <a className="resume-link"><h2>resume</ h2></a>
            <Social></Social>
        </div>
    );
}