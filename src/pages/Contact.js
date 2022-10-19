import React from "react";
import { useSpring, animated } from "react-spring";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import useForm from "../utils/hooks/useForm";
import validate from "../utils/validations/ContactFormRules";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

export default function Contact() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 4000,
      duration: 800,
    },
  });

  const openAlert = () => {
    Swal.fire({
      title: "Message received. Thanks!",
      text: "I'll be in touch with you shortly.",
      icon: "success",
      timer: "4000",
      confirmButtonColor: "#1c273b",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const sendEmail = () => {
    let templateParams = {
      from_name: values.name,
      message: values.message,
      from_email: values.email,
    };

    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          openAlert();
        },
        function (error) {
          console.error("ERROR!", error);
        }
      );
  };

  const submitForm = () => {
    sendEmail();
    handleReset();
  };

  const { values, errors, handleChange, handleSubmit, handleReset } = useForm(
    submitForm,
    validate
  );

  return (
    <div id="wrapper">
      <div id="main">
        <section id="four">
          <animated.div style={fadeIn} className="container">
            <h3>Get in Touch</h3>
            <p>If you want to contact me, feel free to shot me an email!</p>
            <form onSubmit={handleSubmit} autoComplete="on">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input
                    className={`input ${errors.name && "danger"}`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                  {errors.name && <p className="help danger">{errors.name}</p>}
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    className={`input ${errors.email && "danger"}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help danger">{errors.email}</p>
                  )}
                </div>
                <div className="col-12">
                  <textarea
                    className={`input ${errors.message && "danger"}`}
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                    onChange={handleChange}
                    value={values.message || ""}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="help danger">{errors.message}</p>
                  )}
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input
                        type="reset"
                        value="Reset Form"
                        onClick={handleReset}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </animated.div>
        </section>
      </div>
    </div>
  );
}
