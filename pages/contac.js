import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
 
  const {
    register,
    handleSubmit,
   
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log("Response received", res);
        if (res.status === 200) {
          // console.log("Response succeeded!");
          toast("Thank you for contacting us!");
        } else {
          // console.log("Email/Password is invalid.");
          toast("Email/Password is invalid.");
        }
      })
      .catch((e) => console.log(e));
      reset()
  };

  return (
    
    
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <h2 className='text-xl tracking-widest text-center uppercase text-[#5651e5]'>
          Contact
        </h2>
        <h2 className='py-4'>Contactez mois</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Alpha Mohamed KABA</h2>
                <p>Data science, data engineering</p>
                <p className='py-4'>
                  Je suis disponible pour un stage a partir de mois de mai 2023.
                   Contactez moi pour en discuter.
                </p>
              </div>
              <div>
                
                <div className='flex items-center flex space-x-4 justify-center  py-4'>
                  <a
                    href='https://www.linkedin.com/in/alphamohamedkaba/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/alpha970'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Nom complet"
                    {...register("fullName", { required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 "
                    placeholder="Téléphone"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    {...register("message", { required: true })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="transition duration-500 ease hover:bg-pink-600 inline-block bg-indigo-900  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    
    
    
  );
};

export default Contact;