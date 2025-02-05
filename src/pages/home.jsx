import React from "react";
import ProgrammingIMG from '../img/programming.png';
import ProjectCard from '../components/projectCards';
import { programTitle, programText, loremIpsumTitle, loremIpsumText } from '../texts/texts';
import ScrollIndicator from "../components/scrollIndicator";
import UseScrollTracker from "../components/useScrollTracker";

function Home() {
  const {
    containerRef,
    scrollThumbTop,
    scrollThumbHeight,
    currentSection,
    sectionCount,
    handleScroll
  } = UseScrollTracker();

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
        <ScrollIndicator
          scrollThumbHeight={scrollThumbHeight}
          scrollThumbTop={scrollThumbTop}
          sectionCount={sectionCount}
          currentSection={currentSection}
        />
      </div>
    </>
  )
};

export default Home;