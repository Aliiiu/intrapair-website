import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../../UI/widget/button/Button';
import { motion } from 'framer-motion';

const OpenSource = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    console.log(animate);
  }, [animate]);
  return (
    <div className="container m-auto w-ful px-4 xl:px-[114px]">
      <div className="flex flex-col gap-y-9">
        <div className="flex">
          <div className="msm:flex block flex-wrap  gap-[146px] justify-between items-center w-full">
            <div className="flex flex-col flex-1 gap-8">
              <div className="flex flex-col gap-3">
                <motion.div
                  className="pb-2 xl:pb-7 pr-[2rem] xl:pr-[5rem] border-b-[0.5px] w-[fit-content]  border-solid border-white mb-3"
                  whileHover={{
                    borderBottom: '2px solid #fff',
                    paddingRight: '9em',
                  }}
                  onHoverStart={() => setAnimate(true)}
                  onHoverEnd={() => setAnimate(false)}
                  whileInView={{
                    borderBottom: '2px solid #fff',
                    paddingRight: 0,
                  }}
                  transition={{
                    duration: 1.0,
                    type: 'tween',
                    ease: 'easeInOut',
                  }}
                >
                  <h3 className="font-bold text-white xl:max-w-[320px] text-3xl xl:text-5xl">
                    Open Source is Art
                  </h3>
                </motion.div>
                {/* <div className="bg-white w-full h-[1px]"></div> */}

                <p className="text-white text-base">
                  We have deeply invested in the open source community to allow
                  tech talents all over the world to collaborate and contribute
                  to open source projects. Our open-source software can be
                  freely accessed by any tech enthusiasts willing to play a role
                  in transforming the digital space and enhancing the
                  performance of digital products
                </p>
              </div>
              {/* <button className='rounded-[41px]  text-sm w-[206px] bg-white text-blue02 py-[15px] '>
								Leave A Footprint
							</button> */}
              <Button
                text="Leave A Footprint"
                style="bg-white text-blue02 hover:bg-transparent hover:border hover:text-white"
              />
            </div>
            <div className="flex flex-1 ">
              {/* <motion.div
                className={`flex flex-1 transform-gpu duration-500 hover:opacity-100 ease-in-out 
                ${animate ? 'opacity-100' : 'opacity-80'}
                `}
                // whileHover={{ opacity: 1 }}
                // transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
              > */}
              <motion.div
                className={`flex flex-1 transform-gpu duration-500 hover:opacity-100 ease-in-out 
                
                `}
                // whileHover={{ opacity: 1 }}
                // transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
              >
                <Image
                  src={'/home/open-source.png'}
                  width={447}
                  height={447}
                  alt="sprial"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
