import React from 'react';
import Image from 'next/image';



const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
 
  <div className="grid grid-cols-2 ">
    <div className="">
      <Image
        
        unoptimized
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
      
    </div>
    <div>
    <p className="text-white text-ls">{author.bio}</p>
    </div>
  </div>
  </div>
);

export default Author;