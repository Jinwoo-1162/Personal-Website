import React from 'react';
import '../CSS/Widecard.css';

export const Widecard = (props) => {
    const expand = () => {
        console.log('meme')
    }
    return (
        <div className="widecard" onClick={expand}>
            <div className="compdet">
                <h3>
                    {props.title}
                    
                </h3>
                <h4 className="secondtext">{props.lang}</h4>
                <h4 className="secondtext">{props.from} - {props.to}</h4>
            </div>
            <a className="projectlink" href={props.link} target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
        </div>
    );
}