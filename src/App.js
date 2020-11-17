import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'what is react',
        content: 'React is a front end js framework',
    },
    {
        title: 'Why use React?',
        content: 'React favourite js library',
    },
    {
        title: 'IS React is worth for learning',
        content: 'Yes, if your intersted',
    },

];

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};