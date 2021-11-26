import React, {useState} from 'react';
import '../CSS/Skills.css';

export const Skills = (props) => {
    const [myskills, setMyskills] = useState(['Java', 'Javascript', 'C', 'Python', 'SQL', 'HTML', 'CSS']);

    return (
        <div className="condiv">
            <h1 className="subtopic">My skills</h1>
            <ul>
                {myskills.map((skill) => {
                    return <li className="skill">{skill}</li>
                })}
                <img src="" />
            </ul>
        </div>
    );
}