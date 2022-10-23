import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Alpha Mohamed KABA</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/alphamohamedkaba/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/alpha970?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving{''}
              <span className='px-1'>|</span> Data science<span className='px-1'>|</span> Data engineering
              <span className='px-1'>|</span> Project Management
              <span className='px-1'>|</span> Finance
              <span className='px-1'>|</span> Energy
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
            <p>Data Science</p>
            <p>Data engineering</p>
            <p>project management</p>
            <p>Finance</p>
            <p>Energy</p>
          </div>
        </div>
        <p>
         
         multidisplinary master's degree student, with experience in Data science,Data engineering,
          Web Development,Finance and Energy.
          Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Education</h5>
          <p className='py-2'>
            <span className='font-bold'>Ecole Centrale Casablanca</span>
            <span className='px-2'>|</span>Master of science in general engineering (2021-Current)
            <br/>
          Relevant Coursework : Mathematics, Physics, Computer science
            
            
          </p>
        
          <p className='py-2'>
            <span className='font-bold'>INPHB</span>
            <span className='px-2'>|</span>Higher Schools Preparatory Classes (2019-2021)
            <br/>
          Relevant Coursework : Mathematics, Physics, Computer science
            
            
          </p>
        
          
         
        </div>
       
       
      
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Private Equity
            </span>
            <span className='px-2'>|</span>Casablanca, Morocco
          </p>
          <p className='py-1 italic'>Internship at Idus Capital (July 2022 - September 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Perform due diligence calls and participate in due diligence meetings with general partners
            </li>
            
            <li>
            Recognize and inform management of opportunities to Managers and Partners
            </li>
            <li>
            Develop quantitative financial models to track and analyze asset values, fund expenses, and debt. Identify opportunities and and inform Managers and Partners
            </li>
          </ul>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
        Academic Projects
        </h5>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Recherch
            </span>
            <span className='px-2'>|</span> Lithium-ion battery 
          </p>
          <p className='py-1 italic'>Ecole centrale Casablanca (Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Physical-based training data collection approach for data-driven
lithium-ion battery state-of-charge prediction
            </li>
            
          </ul>
        </div>
        {/* Personal Experience */}
        
        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              PLBD
            </span>
            <span className='px-2'>|</span> Water Agriculture and technology
          </p>
          <p className='py-1 italic'>Ecole Centrale Casablanca </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Build system for treating wastewater to reduce its impact on the environment
            </li>
            
          </ul>
        </div>
          {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
           Personal projects
          </h5>
          {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Data science
            </span>
            <span className='px-2'>|</span> Capstone Project
          </p>
          <p className='py-1 italic'>Coursera, IBM </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Predict with a Machine Learning model, if the first stage of Falcon9 developed by SpaceX will land successfully; and thus determine the cost of a launch.
            </li>
            <li>
            Explore the data in order to obtain more insight from the data.
            </li>
            <li>
            Accurate predictive algorithms
            </li>
            <li>
            Business case report to stakeholders
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Project management
            </span>
            <span className='px-2'>|</span> 
          </p>
          <p className='py-1 italic'>Coursera, Google</p> Capstone Project
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            implementation of a pilot project to test the impact of the installation of new table menu tablets
            </li>
            <li>
            establish the project charter, determine the project activities and milestones, determine the cost and duration of the project 
            </li>
            <li>
            execute the project using the agile methodology
            </li>
          </ul>
        </div>
        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Certification
        </h5>
        {/* Experience */}
        <div className='py-6'>
        <p className='italic'>
            <span className='font-bold italic'>
            IBM Data Warehouse Engineer
            </span>
            <span className='px-2'>|</span> IBM,Coursera
          </p>
        <p className='italic'>
            <span className='font-bold italic'>
              IBM Data science
            </span>
            <span className='px-2'>|</span>IBM, Coursera
          </p>
        <p className='italic'>
            <span className='font-bold italic'>
            Scrum Master Certification
            </span>
            <span className='px-2'>|</span> LearnQuest,Coursera
          </p>
        <p className='italic'>
            <span className='font-bold italic'>
                 Google Project Management
            </span>
            <span className='px-2'>|</span> Google,Coursera
          </p>
        </div>
        <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
        <h2 className='py-4'>What I Can Do?</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/html.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/css.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/javascript.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/react.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/tailwind.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/github1.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src= '/assets/skills/aws.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/nextjs.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/python.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/skit.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3> Skit learn</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/mysql.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/postgre.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3></h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/db2.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>IBM Db2</h3>S
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/airflo.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Apache AirFlo</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/kafka.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Apache Kafka</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/googlecloud.png' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Google Cloud</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/assets/skills/ibmcognos.jpg' width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;