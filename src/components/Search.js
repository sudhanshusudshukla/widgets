import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //one more useEffect added to get rid of network call again after
    //a while, and also we can use 2 arguments in useEffect but it will create 
    //problem it will rerender itself again (one more time)

    //first useEffect
    //runs anytime user search changes debouncedTerm changes
    useEffect(() => {
        const timerId = setTimeout(() =>{
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    //Second useEffect
    useEffect(() => {
        const searchWikiAPI = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        searchWikiAPI();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{
                        __html: result.snippet
                    }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter Search Term
                    </label>
                    <input className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui called list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;