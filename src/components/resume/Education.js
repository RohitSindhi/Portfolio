import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full justify-between flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="10th"
            subTitle="Sarvajanik Madhayamik School"
            result="55%"
            
          />
           <ResumeCard
            title="12th"
            subTitle="Sarvajanik Madhayamik School"
            result="57%"
            
          />
           <ResumeCard
            title="Graduation"
            subTitle="G B SHAH Commerce Collage "
            result="55%"
            
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Staff Manager"
            subTitle="Ashoo Road Lines - (2020)"
            result="India"
            des="As A Manager"
          />
          <ResumeCard
            title="Process Executive"
            subTitle="MarkEvolve - (2021)"
            result="India"
            des="As A Developer."
          />
          <ResumeCard
            title="React Developer"
            subTitle="Wiseskulls - (2022)"
            result="India"
            des="Developer"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education