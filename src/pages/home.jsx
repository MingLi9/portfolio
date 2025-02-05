import React, { useRef, useState, useEffect } from "react";
import ProgrammingIMG from '../img/programming.png';
import ProjectCard from '../components/projectCards';
import Hero from '../components/hero';
import { programTitle, programText, loremIpsumTitle, loremIpsumText } from '../texts/texts';

function Home() {
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

  return (
    <>
      <div className="app">
        <div
          className="container"
          ref={containerRef}
          onScroll={handleScroll}
        >
          <section className="section section1">
            <ProjectCard img={ProgrammingIMG} alt="Project preview" side="Left" title={programTitle} text={programText} cv={true} />
          </section>
          <section className="section section2">
            <ProjectCard side="Center" title={loremIpsumTitle} text={loremIpsumText} />
          </section>
          <section className="section section3">
            <ProjectCard img={ProgrammingIMG} alt="Project preview" side="Right" title={programTitle} text={programText} socials={true} />
          </section>
          <section className="section section1">
            <h1>Section 1</h1>
          </section>
          <section className="section section2">
            <h1>Section 2</h1>
          </section>
          <section className="section section3">
            <h1>Section 3</h1>
          </section>
        </div>
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
      </div>
    </>
  )
};

export default Home;