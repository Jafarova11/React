import React from "react";
import "../contact/index.scss";
import Button from "../../components/button";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="top-text">
          <div className="contact-me">
            <h4>Contact</h4>
            <h4>Me</h4>
          </div>
          <p>
            There are many variations of passages ofLorem Ipsumavailable, but
            the majority havesuffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="contact-ways">
          <div className="left">
            <div className="address-div">
              <h2>Address:</h2>
              <p>23 S 80 Road, Benedict,ne, 68316 United States</p>
            </div>
            <div className="phone-div">
              <h2>Phone:</h2>
              <p>+01 123 456 789</p>
            </div>
            <div className="email-div">
              <h2>E-mail:</h2>
              <p>abc.xyz@gmail.com</p>
            </div>
            <div className="website-div">
              <h2>Website:</h2>
              <p>www.abc.xyz.com</p>
            </div>
          </div>
          <div className="right">
            <form action="">
              <input type="text" placeholder="Name" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <Button />
            </form>
          </div>
        </div>
        <div className="bottom">
          <h3>AboutMe.</h3>
          <p>
            There are many variations of passages ofLorem Ipsumavailable, but
            the majority havesuffered alteration in some form.
          </p>
          <ul>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
