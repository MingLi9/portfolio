import React from "react";
import PropTypes from 'prop-types'; // For prop types validation

function ScrollIndicator({ scrollThumbHeight, scrollThumbTop, sectionCount, currentSection }) {
    return (
        <>
            <div className="custom-scrollbar">
                <div
                    className="scroll-thumb"
                    style={{
                        height: `${scrollThumbHeight}%`,
                        top: `${scrollThumbTop}%`,
                    }}
                ></div>
            </div>
            <div className="indicator">
                {Array.from({ length: sectionCount }, (_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentSection === index ? "active" : ""}`}
                    ></div>
                ))}
            </div>
        </>
    );
}

// Prop types validation
ScrollIndicator.propTypes = {
    scrollThumbHeight: PropTypes.number,
    scrollThumbTop: PropTypes.number,
    sectionCount: PropTypes.number,
    currentSection: PropTypes.number
};

export default ScrollIndicator;