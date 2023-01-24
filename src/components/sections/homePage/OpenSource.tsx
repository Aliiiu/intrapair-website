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
          <div className="msm:flex block flex-wrap   gap-[146px] justify-between items-center w-full">
            <div className="flex flex-col flex-1 gap-8">
              <div className="flex flex-col gap-3">
                <div className=" w-fit ">
                  <motion.h3
                    className="font-bold text-white xl:max-w-[fit-content] text-3xl xl:text-5xl border-white pb-5 "
                    whileInView={{
                      borderBottom: '2px solid #fff',
                      paddingRight: 0,
                    }}
                    initial={{
                      paddingRight: '5rem',
                      borderBottom: '0.5px solid #fff',
                    }}
                    whileHover={{
                      borderBottom: '0.5px solid #fff',
                      paddingRight: '2rem',
                    }}
                    transition={{
                      duration: 0.8,
                      type: 'tween',
                      ease: 'easeInOut',
                    }}
                  >
                    Open Source <br /> is Art
                  </motion.h3>
                </div>
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
                style="bg-transparent hidden sm:block border-white border text-white hover:bg-white hover:text-blue02 w-[146px] lg:w-[201px]"
              />
            </div>
            <div className="flex flex-1 ">
              <motion.div
                className={`flex flex-1 transform-gpu duration-500 hover:opacity-100 ease-in-out ${
                  animate ? 'opacity-100' : 'opacity-80'
                }`}
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
            <div>
              <Button
                text="Leave A Footprint"
                style="bg-white sm:hidden border-white w-[186px] lg:w-[201px] text-sm sm:text-base text-blue02"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
