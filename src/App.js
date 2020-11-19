import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown
                selected={selected}
                options={options}
                onSelectChange={setSelected} />
        </div>
    );
};