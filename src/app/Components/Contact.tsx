import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;