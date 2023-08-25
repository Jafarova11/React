import React from "react";
import "../about/index.scss";
import Button from "../../components/button";

const About = () => {
  return (
    <section className="about-section">
      <div className="about">
        <div className="left">
          <img src="../../images/img-1.jpg" alt="" />
        </div>
        <div className="right">
          <h1>
            About <p>Me</p>
          </h1>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour, Passages ofLorem Ipsumavailable, but the majority
            havesuffered alteration in some form, by injected humour,
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default About;
