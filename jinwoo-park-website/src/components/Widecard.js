import React from 'react';

export const Widecard = (props) => {
    return (
        <div className="widecard">
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