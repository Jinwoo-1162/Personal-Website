import React from 'react';
import ProfilePic from '../img/IMG_6147.jpg';
import TypingEffect from 'react-typing-effect';
import {Social} from '../components/Social.js';

export const Home = (props) => {
    return (
        <div className="condiv home">
            <img src={ProfilePic} className="profilepic"></img>
            <p></p>
            <TypingEffect className="typingeffect" text={['Hi! My name is Jinwoo Park!']} speed={100} eraseDelay={5000}></TypingEffect>
            <p></p>

            <Social></Social>
        </div>
    );
}