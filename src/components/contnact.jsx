import React, { useState } from "react";
import axios from "axios";
import ContactImage from "assets/cc.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/contact/", formData);
      setResponseMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      setResponseMessage("Failed to send your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-900 text-white">
          <img
            src="assets/cc.png"
            alt="Contact Us"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible. we will help you in atainig the best serveince from out team and we gland you choose us. 
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-2 block w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mt-2 block w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="mt-2 block w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-gray-600">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
