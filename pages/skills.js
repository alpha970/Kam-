import Image from 'next/image';
import React from 'react';
import datascience from '../public/datascience.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FeaturedPosts } from '../sections';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[80vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[80vh] py-12 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={datascience}
          alt='/'
        />
        <div className='absolute text-pink-600'>
          <br/>
          <h2 className='py-24'>Blog</h2>
          <h2 className= 'py-12'>Data science la science la plus sexie du vingt unième siècle</h2>
        </div>
        <div className='absolute text-pink-600 py-18'>
          <br/>
          <h2 className='py-24'>Blog</h2>
          <h2 className= ''>Data science la science la plus sexie du vingt unième siècle</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p></p>
          <h2>KAM</h2>
          <p>
            KAM est un blog de qui a pour objectif de vulgariser la notions de science de données, d'ingenierie
            de données et d'intelligence Artificielle.
          </p>
          <a
            href='/contact'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Contact</button>
          </a>
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Sujects</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Science de données
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ingénierie de données
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Intelligence Artificielle
              </p>
             
            </div>
          </div>
        </div>
       
      </div>
      <div  className="bg-white shadow-lg rounded-lg p-8 pb-20 mb-8">
      <h2 className="text-xl text-center mb-8 font-semibold border-b pb-4 ">Articles</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 ">
      <FeaturedPosts/>
      </div>
      <Link href='/blog'>
          <p className='underline cursor-pointer'>blog</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;