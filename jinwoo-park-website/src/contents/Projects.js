import React from 'react';
import {Widecard} from '../components/Widecard.js';

export const Projects = (props) => {
    return (
        <div className="condiv">
            <h1 className="subtopic">Check out some of my various projects:</h1>
            <Widecard title="My Website" lang="Javascript" from="October 2019" to="Present" link="https://github.gatech.edu/jpark955/Jinwoo-Park-Website"/>
            <Widecard title="Zen" lang="Python" from="October 2021" to="October 2021" link="https://github.com/Akash-Harapanahalli/the-modern-hourglass"/>
            <Widecard title="March On" lang="Javascript, HTML, CSS" from="September 2020" to="September 2020" link="https://github.com/Jinwoo-1162/Jinwoo-1162.github.io"/>
            <Widecard title="Trash Talker" lang="Java" from="February 2020" to="February 2020" link="https://github.gatech.edu/jpark955/TrashTalker"/>
            <Widecard title="Dine Today" lang="Python" from="October 2019" to="October 2019" link="https://github.gatech.edu/jpark955/Dine-Today"/>
            <h5>Note: due to transferrance of ownership of some private enterprise repositories, some projects may not have a complete commit history</h5>
        </div>
    );
}