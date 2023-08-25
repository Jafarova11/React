import React from "react";
import "../home/index.scss";
import Button from "../../components/button";

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="left">
          <h6>Hello, Welcome</h6>
          <h1>I'm Anderson Coper</h1>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour.
          </p>
          <Button />
        </div>
        <div className="right">
          <img src="../../images/img-1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
