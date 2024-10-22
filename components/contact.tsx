"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send email
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-10 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-8">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-md"
          >
            <h3 className="text-md font-semibold mb-4">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 text-white"
                rows={5}
                required
              />
              <button type="submit" className="p-2 rounded bg-pink-500 text-white hover:bg-pink-600">
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-md"
          >
            <h3 className="text-lg font-semibold mb-4">Book an Appointment</h3>
            <div className="calendly-inline-widget" data-url="https://calendly.com/your-calendly-link" style={{ minWidth: '320px', height: '330px' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
