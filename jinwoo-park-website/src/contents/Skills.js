import React, {useState} from 'react';
import '../CSS/Skills.css';

export const Skills = (props) => {
    const [myskills] = useState(['Java', 'Javascript', 'C', 'Python', 'SQL', 'HTML', 'CSS']);

    return (
        <div className="condiv">
            <h1 className="subtopic">My skills</h1>
            <ul>
                {myskills.map((skill) => {
                    return <li className="skill">{skill}</li>
                })}
            </ul>
        </div>
    );
}