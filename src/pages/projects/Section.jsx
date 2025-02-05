import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <section className="section">
            <div className="parent-center">
                <div className="Center text-black">
                    {title && <h1>{title}</h1>}
                    {children}
                </div>
            </div>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Section;