'use client';
import React from 'react';
import Link from 'next/link';   
import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {z} from 'zod';



function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");    
  const [message, setMessage] = useState("");
  const [error, setError] = useState<{ name: string; email: string; message: string }>({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

   const formSchema = z.object({
  name: z.string().min(1, "Name is required"),  
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const FormData = {
      name,
      email,
      message,
    };
   
    const result = formSchema.safeParse(FormData);
    let fieldErrors = { name: "", email: "", message: "" };
    if (!result.success) {
        fieldErrors = { 
            name: result.error.formErrors.fieldErrors.name ? result.error.formErrors.fieldErrors.name[0] : "",
            email: result.error.formErrors.fieldErrors.email ? result.error.formErrors.fieldErrors.email[0] : "",
            message: result.error.formErrors.fieldErrors.message ? result.error.formErrors.fieldErrors.message[0] : "",
        };
        setError(fieldErrors);
        return;
    }

    console.log(FormData);
    setSuccess(true);
  };
  if (success) {
    return (
    <div className="container mx-auto py-10 mt-40">
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh]">
        <div className="bg-indigo-200 p-8 rounded shadow-md w-full max-w-md">
       
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Thank You!</h1>
        <p className='text-blue-500'>Thanks for contacting us. We'll get back to you as soon as possible.</p> 
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
      <div className="bg-gradient-to-r from-cyan-100 to-green-100 p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-black">Contact Us</h1>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block  text-black text-md font-extrabold mb-2">
            Name:
          </label>
          <input
            type="name"
            id="name"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-green-400 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
            placeholder="Your Name"
          />
          {error.name && <span className="text-red-500">{error.name}</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-black text-md font-extrabold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            autoComplete="given-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-green-400 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
            placeholder="Your Email"
          />
           {error.email && <span className="text-red-500">{error.email}</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-black text-md font-extrabold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            autoComplete="given-message"
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white px-5 pt-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-green-400 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
            placeholder="Your Message"
          ></textarea>
           {error.message && <span className="text-red-500">{error.message}</span>}
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



