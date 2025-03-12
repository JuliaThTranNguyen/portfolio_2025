"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_u3bgr57_ThJulia",
        "template_cp1cb56",
        formData,
        "zPcufqSm5n_DfPE26"
      )
      .then(
        () => {
          setFormStatus(
            "Thank you for reaching out! We'll get back to you soon. 📜"
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setFormStatus("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-section  mt-5">
      <div className="contact-banner">
        <h2>Connect with me 👋</h2>
        <p>I would love to hear from you. Feel free to drop a message!</p>
      </div>

      <div className="contact-bottom-container gap-x-6">
        {/* Left Box: Contact Form */}
        <div className="contact-form w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="button-base button-primary justify-center"
              >
                Send Message
              </button>
            </div>
          </form>
          {formStatus && (
            <p className="mt-4 text-lg text-center text-gray-600">
              {formStatus}
            </p>
          )}
        </div>

        {/* Right Box: Contact Info & Social Links */}
        <div className="contact-info space-y-8">
          <div className="direct-contact">
            <h3>Direct Contact Info ☎️</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:trhien541@gmail.com"
                className="contact-text-link"
              >
                trhien541@gmail.com
              </a>
            </p>
            <p>Phone: +358 46 546 1269</p>
          </div>

          <div className="social-links">
            <h3>Social Media 🌐 </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/JuliaThTranNguyen"
                className="contact-text-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thuy-hien-tran-nguyen-072464174/"
                className="contact-text-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nguyenthuyhientran/"
                className="contact-text-link"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="cta text-center">
            <h3 className="text-xl font-semibold">
              Ready to Talk? Reach me out now 💫
            </h3>
            <p className="text-lg mt-2 text-gray-600">
              Send me a message, and I will get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
