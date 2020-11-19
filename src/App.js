import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

// const options = [
//     {
//         label: 'The color Red',
//         value: 'Red'
//     },
//     {
//         label: 'The color Blue',
//         value: 'Blue'
//     },
//     {
//         label: 'The color Black',
//         value: 'Black'
//     },
//     {
//         label: 'The color Yellow',
//         value: 'Yellow'
//     },
// ];

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}

            {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle a Dropdown</button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectChange={setSelected}
                /> : null
            } */}
            <Translate />
        </div>
    );
};