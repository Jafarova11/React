import React from "react";
import "../resume/index.scss";
import Cards from "../../components/cards";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="top-text">
          <div className="my-experiences">
            <h4>My</h4>
            <h4>Experiences</h4>
          </div>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="cards">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Resume;
