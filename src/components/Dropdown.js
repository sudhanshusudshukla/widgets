import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            //latest change to react
            //ref.current && ref.current.contains(event.target)
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        //donot show the selected item in the list
        if (option.value === selected.value) {
            return null;
        };

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Dropdown;