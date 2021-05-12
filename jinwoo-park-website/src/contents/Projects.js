import React from 'react';
import {Widecard} from '../components/Widecard.js';

export const Projects = (props) => {
    return (
        <div className="condiv">
            <h1 className="subtopic">Check out some of my various projects:</h1>
            <Widecard title="Newscraper" lang="Python" from="October 2020" to="October 2020" link="https://github.com/Ryan-K-Chen/NewsqScraper"/>
            <Widecard title="March On" lang="Javascript, HTML, CSS" from="September 2020" to="September 2020" link="https://github.com/Jinwoo-1162/Jinwoo-1162.github.io"/>
            <Widecard title="Trash Talker" lang="Java" from="February 2020" to="February 2020" link="https://github.gatech.edu/jpark955/TrashTalker"/>
            <Widecard title="Dine Today" lang="Python" from="October 2019" to="October 2019" link="https://github.gatech.edu/jpark955/Dine-Today"/>
        </div>
    );
}