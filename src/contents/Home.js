import React from 'react';
import ProfilePic from '../img/IMG_6147.jpg';
import TypingEffect from 'react-typing-effect';
import {Social} from '../components/Social.js';
import TicTacToe from '../components/TicTacToe';
import '../CSS/Home.css';

export const Home = (props) => {
    return (
        <div className="condiv home">
            <img src={ProfilePic} title="Hello there!" className="profilepic" alt="Hello!"></img>
            <p></p>
            <TypingEffect className="typingeffect" text={['Hi! My name is Jinwoo Park!']} speed={100} eraseDelay={5000}></TypingEffect>
            <p className='deal'>Lets make a deal<br />If I win or draw with you in a game of tic tac toe, you have to read my resume!</p>
            <TicTacToe />
            {/* <iframe width="560" height="315" src="https://musiclab.chromeexperiments.com/Song-Maker/embed/4543655446052864" frameborder="0" allowfullscreen></iframe> */}
            <Social></Social>
        </div>
    );
}