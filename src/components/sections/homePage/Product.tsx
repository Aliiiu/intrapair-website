import Image from 'next/image';
import Link from 'next/link';
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
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prevState) => !prevState);
  };

  const controls = useAnimation();

  function handleMouseEnterControls() {
    controls.start('hover');
  }

  function handleMouseLeaveControls() {
    controls.start('initial');
  }

  return (
    <div className="container m-auto px-4 xl:px-[114px]">
      <div className="flex flex-col gap-y-[60px] m-auto ">
        <div className="flex flex-col gap-3 w-[fit-content] max-w-[100%]">
          <motion.h3
            className="font-bold text-dark-blue text-3xl xl:text-5xl border-b-[0.5px] w-[fit-content] pb-2 xl:pb-5 pr-4 xl:pr-9  border-solid border-dark-blue "
            whileInView={{
              borderBottom: '2px solid',
              paddingRight: 0,
            }}
            transition={{
              duration: 0.7,
              type: 'tween',
              ease: 'easeInOut',
            }}
          >
            Our Products
          </motion.h3>
          {/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
          <p className="text-black-01 text-base">
            Our products tackle emerging challenges across different sectors in
            Africa.
          </p>
        </div>
        <div className="flex">
          <div className="md:flex block flex-wrap  justify-between w-full items-center gap-[100px] m-auto">
            <div
              className="flex flex-1 flex-col gap-5 mlg:mb-0 mb-[60px] w-[455px] max-w-[100%] h-[355px] xl:h-[455px] relative"
              style={{
                background:
                  ' linear-gradient(90deg, #0095E7 3.7%, #27B3FF 93.96%)',
                boxShadow:
                  '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                border: '2px solid #ccc',
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <Link
                href={'flip'}
                className="absolute top-[50%] left-[50%]"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  className="relative w-[90px] lg:w-[109px] h-[120px] lg:h-[148px]"
                  variants={hoverVariant}
                  animate={isHovered ? 'hover' : 'initial'}
                  transition={{ delay: 0.2, ease: 'easeInOut', type: 'tween' }}
                >
                  <Image src={'/home/flip.png'} fill alt="flip" />
                </motion.div>
              </Link>
            </div>
            <div className="flex flex-1 flex-col gap-3 xl:gap-5">
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
