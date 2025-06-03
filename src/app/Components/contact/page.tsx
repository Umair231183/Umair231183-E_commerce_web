'use client';
import React from 'react';
import Link from 'next/link';   
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';
 
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");    
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log(formData);
    setSuccess(true);
  };
  if (success) {
    return (
    <div className="container mx-auto py-10 mt-40">
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
       
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p>Thanks for contacting us. We'll get back to you as soon as possible.</p> 
      </div>
      </div>
     <Footer />
      </div>
    );
  }
    if (error) {
        return (
        <div className="container mx-auto py-10 mt-40"> 
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Error</h1>          
        <p className="text-red-500">{error}</p>
        <p>Please try again.</p>
      </div>    
        </div>
        <Footer />
        </div>
      );
    }

   
  return (
    <div>
        <Navbar />
    <div className="container mx-auto py-10 mt-40 flex justify-center items-center min-h-[60vh]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block  text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;



