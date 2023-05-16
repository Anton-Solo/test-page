import "./contact.scss";
import { Btn } from "../../ui/Btn/Btn";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tell: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    tell: false,
  });

  const nameHandle = (e) => {
    if (e.target.value.length < 2) {
      setError((prev) => ({ ...prev, name: true }));
    } else {
      setError((prev) => ({ ...prev, name: false }));
    }
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const emailHandle = (e) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(e.target.value)) {
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }
    setForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const tellHandle = (e) => {
    if (e.target.value.length < 2) {
      setError((prev) => ({ ...prev, tell: true }));
    } else {
      setError((prev) => ({ ...prev, tell: false }));
    }
    setForm((prev) => ({ ...prev, tell: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!error.name && !error.email && !error.tell) {
      setForm({ name: "", email: "", tell: "" });
      alert("Congratulations");
    } else {
      alert("Error");
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left">
            <h3 className="contact-title">
              Contact <span>our sales team</span>
            </h3>
            <p className="contact-txt">
              Our team is happy to answer your sales questions.Fill out the form
              and we’ll be in touch as soon as possible.
            </p>
          </div>
          <div className="contact-right">
            <form
              className="contact-right__form"
              onClick={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your name"
                onChange={(e) => nameHandle(e)}
                className={`contact-right__form-item ${
                  error.name ? "error" : ""
                }`}
              />
              <input
                type="text"
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={(e) => emailHandle(e)}
                className={`contact-right__form-item ${
                  error.email ? "error" : ""
                }`}
              />
              <input
                type="text"
                name="tell"
                value={form.tell}
                placeholder="Tell more"
                onChange={(e) => tellHandle(e)}
                className={`contact-right__form-item ${
                  error.tell ? "error" : ""
                }`}
              />
              <Btn
                className="contact-right__form-sub"
                title="Send request"
                onClick={submitHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
