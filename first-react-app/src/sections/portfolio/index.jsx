import React from "react";
import "../portfolio/index.scss";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="top">
          <div className="my-portfolio">
            <h4>My</h4>
            <h4>Portfolio</h4>
          </div>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="images">
          <div className="left-img">
            <img src="../../images/portfolio-1.jpg" alt="" />
          </div>
          <div className="right-imgs"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
