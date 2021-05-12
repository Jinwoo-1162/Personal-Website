import React from 'react';

export const Widecard = (props) => {
    return (
        <div class="widecard">
            <div class="compdet">
                <h3>
                    {props.title} &nbsp;
                    
                </h3>
                <h4 class="secondtext">{props.lang}</h4>
                <h4 class="secondtext">{props.from} - {props.to}</h4>
            </div>
            <a className="projectlink" href={props.link} target="_blank"><i class="fab fa-github"></i></a>
        </div>
    );
}