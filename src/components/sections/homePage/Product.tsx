import Image from 'next/image';
import Link from 'next/link';
import Cursor from '../../UI/widget/customCursor/Cursor';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const hoverVariant = {
  hover: {
    scale: 1.5,
  },
  initial: {
    scale: 1,
  },
};

const Product = () => {
  return (
    <div className="container mx-auto px-4 xl:px-[114px]">
      <div className="flex flex-col gap-y-[60px] mx-auto ">
        <div className="flex flex-col gap-3 w-[fit-content] max-w-[100%]">
          {/* <h3 className='font-bold text-dark-blue text-3xl xl:text-5xl border-b-[0.5px] w-[fit-content] pb-2 xl:pb-5 pr-4 xl:pr-9  border-solid border-dark-blue'>
						Our Products
					</h3> */}
          <div className="w-[fit-content] ">
            <motion.h3
              className="font-bold text-dark-blue md:max-w-[320px] text-3xl xl:text-5xl border-dark-blue pb-5 "
              whileInView={{
                borderBottom: '2px solid #185EA1',
                paddingRight: 0,
              }}
              initial={{
                paddingRight: '2.5rem',
                borderBottom: '0.5px solid #fff',
              }}
              whileHover={{
                borderBottom: '0.5px solid #185EA1',
                paddingRight: '2rem',
              }}
              transition={{
                duration: 0.5,
                type: 'tween',
                ease: 'easeInOut',
              }}
            >
              Our Product
            </motion.h3>
          </div>
          {/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
          <p className="text-black-01 text-base">
            Our products tackle emerging challenges across different sectors in
            Africa.
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-7 md:gap-0 md:flex-row w-full items-center">
            <div className="overflow-hidden w-full md:w-[60%]">
              <Link
                href={'/flip'}
                className="h-[283px] cursor-none w-[720px] sm:h-[383px] lg:h-[480px] 2xl:h-[580px]"
              >
                <Cursor style="bg-white text-blue-400">
                  <div className="h-[283px] hover:scale-125 transition ease-in-out duration-500 sm:h-[383px] lg:h-[480px] 2xl:h-[580px] relative">
                    <Image src={'/images/flipBig.png'} alt="" fill />
                  </div>
                </Cursor>
              </Link>
            </div>
            <div className="md:w-[40%] flex flex-col gap-3 md:pl-[20px] xl:pl-[80px] xl:gap-5">
              <p className="text-3xl xl:text-5xl font-bold text-black01">
                Flip
              </p>
              <p className="text-base text-black01">
                An enhanced assessment platform that provides computerized
                tests, examination management, quick grading systems, and
                collation of results instead of the use of pen and paper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
