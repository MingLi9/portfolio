import { useRef, useState, useEffect } from "react";

const UseScrollTracker = () => {
    const containerRef = useRef(null);
    const [scrollThumbTop, setScrollThumbTop] = useState(0);
    const [scrollThumbHeight, setScrollThumbHeight] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const [sectionCount, setSectionCount] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { clientHeight, scrollHeight } = containerRef.current;

                // Dynamically count sections
                const sections = containerRef.current.querySelectorAll(".section").length;
                setSectionCount(sections);

                // Calculate the thumb height
                const thumbHeight = (clientHeight / scrollHeight) * 100;
                setScrollThumbHeight(thumbHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

            // Update thumb position
            const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * (100 - scrollThumbHeight);
            setScrollThumbTop(thumbTop);

            // Determine the current section index
            const current = Math.round(scrollTop / clientHeight);
            setCurrentSection(current);
        }
    };

    return {
        containerRef,
        scrollThumbTop,
        scrollThumbHeight,
        currentSection,
        sectionCount,
        handleScroll
    };
};

export default UseScrollTracker;