import React from 'react'
import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const list = data.projects;
    const item = list[index];

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <ul>
                <li><h2>Bird I Saw: {item.bird}</h2></li>
                <li><strong>Where I Saw It:</strong> {item.place}</li>
                <li><strong>Date I Saw It:</strong> {item.date}</li>
                <li><strong>Special Memory About It:</strong> {item.memory}</li>
            </ul>
        </div>
    );
}