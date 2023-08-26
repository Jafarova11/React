import React from "react";
import "../service/index.scss";
import Cards from "../../components/cards";

const Service = () => {
  return (
    <section className="service-section">
      <div className="container">
        <div className="top-text">
          <div className="my-service">
            <h4>My</h4>
            <h4>Service</h4>
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

export default Service;
