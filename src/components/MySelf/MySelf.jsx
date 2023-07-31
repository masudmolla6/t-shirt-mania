import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p>House:{house}</p>
            <section className='flex'>
                <Special></Special>
            </section>
        </div>
    );
};

export default MySelf;