import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault(); // 🚫 prevent page reload

    try {
      await emailjs.sendForm(
        "service_nfn6p2m",
        "template_loj1xlj",
        form.current,
        "FIMGI9eu7otT__PQG"
      );

      toast.success("Message Sent Successfully!");
      form.current.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    <section
      id="contact"
      className="min-h-screen bg-[var(--background)] text-[var(--text)] px-6 py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-20 relative">
          <h1 className="absolute inset-0 flex items-center justify-center text-[90px] md:text-[150px] font-extrabold uppercase text-white/5 select-none opacity-7">
            Contact
          </h1>

          <h2 className="relative text-5xl md:text-6xl font-extrabold uppercase">
            Get In <span className="text-[var(--primary)]">Touch</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-4xl font-bold mb-6 uppercase">
              LET'S WORK TOGETHER
            </h3>

            <p className="text-[var(--text-muted)] text-lg leading-8 mb-10 max-w-lg">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>

            {/* Email */}
            <div className="flex items-start gap-5 mb-8">
              <div className="bg-[var(--primary)] p-4 rounded-2xl">
                <FaEnvelope size={22} />
              </div>
              <div>
                <p className="uppercase text-sm tracking-widest text-[var(--text-muted)]">
                  Mail Me
                </p>
                <h4 className="text-xl font-semibold mt-1">
                  lalitharaviacharya@gmail.com
                </h4>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 mb-10">
              <div className="bg-[var(--primary)] p-4 rounded-2xl">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="uppercase text-sm tracking-widest text-[var(--text-muted)]">
                  Call Me
                </p>
                <h4 className="text-xl font-semibold mt-1">
                  +91 9380131015
                </h4>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-14 h-14 rounded-full bg-[var(--surface)] border border-white/10 flex items-center justify-center hover:bg-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="card">
            <form
              ref={form}
              onSubmit={sendEmail}
              noValidate
              className="space-y-6"
            >
              {/* Inputs */}
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="contact-input"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                  className="contact-input"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Your subject"
                  className="contact-input"
                />
              </div>

              {/* Message */}
              <textarea
                rows="8"
                name="message"
                placeholder="Your Message"
                required
                className="contact-input resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="group flex items-center gap-4 bg-[var(--primary)] hover:bg-[var(--secondary)] transition-all duration-300 text-white font-bold px-8 py-4 rounded-full"
              >
                SEND MESSAGE

                <span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition">
                  <FaPaperPlane size={14} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}