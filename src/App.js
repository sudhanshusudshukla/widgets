import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
    {
        label: 'The color Red',
        value: 'Red'
    },
    {
        label: 'The color Blue',
        value: 'Blue'
    },
    {
        label: 'The color Black',
        value: 'Black'
    },
    {
        label: 'The color Yellow',
        value: 'Yellow'
    },
];



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (

        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <button onClick={() => setShowDropdown(!showDropdown)}>
                    Toggle a Dropdown</button>
                {showDropdown ?
                    <Dropdown
                        label="Select a color"
                        selected={selected}
                        options={options}
                        onSelectChange={setSelected} />
                    : null}
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};