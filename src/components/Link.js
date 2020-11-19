import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {

        //check to open in new window
        if (event.metaKey || event.ctrlKey) {
            return;
        };

        event.prevent.Default();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };


    return (
        <a onClick={onClick} className={`${className}`} href={`${href}`} >
            {children}
        </a>
    );
};

export default Link;