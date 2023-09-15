// React Hook Form
import React, { useRef, useState } from "react";

// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// emailjs
import emailjs from "@emailjs/browser";

const Contact = () => {
  // form ref
  const form = useRef();

  //  env variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  // alert state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setSuccessMessage(
          "Message sent successfully, I'll get back to you soon!"
        );
      },
      (error) => {
        console.log(error.text);
        setErrorMessage("Something went wrong, please try again!");
      }
    );
    e.target.reset(
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000)
    );
  };

  return (
    <div className="h-full bg-primary/30">
      {/* circles */}
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
                required
              />
            </div>
            {/* textarea */}
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input"
              required
            />
            {/* textarea */}
            <textarea
              placeholder="message"
              name="message"
              className="textarea"
              required
            ></textarea>
            {/* Alert */}
            <div className="flex items-center justify-center gap-2">
              <p>{successMessage ? successMessage : errorMessage}</p>
            </div>
            {/* button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
