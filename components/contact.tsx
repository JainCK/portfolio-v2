import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg" rows={5}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">Send</button>
        </form>
      </div>
      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
};