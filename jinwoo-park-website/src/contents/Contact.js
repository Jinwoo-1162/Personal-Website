import React from 'react';
import {Social} from '../components/Social.js';

export const Contact = (props) => {
    return (
        <div className="condiv">
            <h1 className="subtopic">Contact me</h1>
            <h3>
                Email: &nbsp;
                <a className="emaillink" href="mailto: jpark955@gatech.edu">jpark955@gatech.edu</a>
            </h3>
            <h3>
                Phone: (714) 713-8826<br></br><br></br>
            </h3>
            <Social />
        </div>
    );
}