import React, { useRef, useState, useEffect } from "react";

function AC_controller() {
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

    function Section({ title, children }) {
        return (
            <section className="section">
                <div className='parent-center'>
                    <div className="Center text-black">
                        {title && <h1>{title}</h1>}
                        {children}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <div className="container"
                ref={containerRef}
                onScroll={handleScroll}
            >
                <Section title="Building My Own Modular Audio Controller">
                    <p>
                        A while back, I came across an advertisement for a modular audio controller for laptops and desktops
                        &#40;<a href="https://modue.com/" rel="noreferrer" target="_blank">Modue</a>&#41;.
                        I was immediately intrigued, having a physical controller would mean I wouldn&#39;t have to open the Windows volume mixer every time I wanted to adjust audio while gaming, watching videos, or working.
                    </p>
                    <p>
                        However, at &euro;150 at launch, it was out of my budget. While there were cheaper alternatives, they either lacked proper integration with Windows sound channels or weren&#39;t expandable with additional sliders or knobs. So, I decided to take on a challenge: build my own modular audio controller!
                    </p>
                </Section>

                <Section title="The Beginning: A Simple Prototype">
                    <p>Looking at what I already had at home, I put together a simple proof-of-concept using:</p>
                    <ul>
                        <li>1 Arduino Uno</li>
                        <li>1 potentiometer</li>
                        <li>1 breadboard</li>
                        <li>Jumper wires</li>
                    </ul>
                    <p>
                        The first step was reading potentiometer values via the serial communication port. Since this is a common beginner Arduino tutorial, getting it to work was straightforward. However, I modified the script to make it less sensitive to small fluctuations in input.
                    </p>
                </Section>

                <Section title="">
                    <p>
                        With the Arduino sending data, I now needed a way to interpret this data and control the correct Windows audio channels. This turned out to be more challenging than expected—finding documentation on the necessary Windows executables was surprisingly difficult.
                    </p>
                    <p>
                        Initially, I assumed C# would have sufficient resources, but that turned out to be a dead end.Fortunately, I found a similar project written in Go
                        &#40;<a href="https://github.com/omriharel/deej" rel="noreferrer" target="_blank">deej</a>&#41;
                        , which helped me understand how to integrate the system into Python.With this knowledge, I was able to create a basic prototype and start planning for an expanded version with multiple controls.
                    </p>
                </Section >

                <Section title="Version 0.2: Expanding the Functionality">
                    <p>
                        The first working prototype consisted of:
                    </p>
                    <ul>
                        <li>
                            One potentiometer sending values to a script
                        </li>
                        <li>
                            A separate script that controlled Windows audio channels
                        </li>
                    </ul>
                    <p>
                        For Version 0.2, my goal was to:
                    </p>
                    <ol>
                        <li>
                            Consolidate everything into a single PC application that receives sensor data and adjusts volume.
                        </li>
                        <li>
                            Expand the hardware to include five potentiometers for controlling different sound channels.
                        </li>
                    </ol>
                </Section>

                <Section title="Measuring and Designing the Case">
                    <p>
                        Now that the basic functionality was working, it was time to enclose the hardware in a proper case. I designed a 3D-printable enclosure to house the components securely, ensuring the build looked and felt more like a finished product.
                    </p>
                </Section>

                <Section title="Version 1.0: A Fully Functional DIY Audio Controller">
                    <p>
                        Version 1.0 marks the first complete version of my modular audio controller. At this stage, all elements come together to form a reproducible, working product.
                    </p>
                    <p>
                        With multiple potentiometers, a dedicated software interface, and a proper enclosure, I now have a customizable, expandable audio controller that works exactly the way I want. And the best part? I built it myself!
                    </p>
                </Section>
            </div >
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
    )

}

export default AC_controller;