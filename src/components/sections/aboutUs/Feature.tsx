import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useMedia } from 'react-use';

const feature = [
  {
    id: 1,
    icon: '/svgs/ideas.svg',
    header: 'Innovative Ideas',
    content:
      'We validate your business idea through three stages - market validation, idea validation, and product validation to fully measure the potential before embarking on developing them.',
  },
  {
    id: 2,
    icon: '/svgs/team.svg',
    header: 'Exceptional Team',
    content:
      'We are a team of intelligent creatives who are satisfactorily acquainted with product management practices, business models, software engineering principles, and design thinking procedures.',
  },
  {
    id: 3,
    icon: '/svgs/quality.svg',
    header: 'Quality Services',
    content:
      'We put in check time management, customer relationship, and other vital business practices to deliver beyond expectations.',
  },
];

const Feature = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <div>
      <motion.div
        className="border-solid border-b-[0.5px] pr-9 w-fit pb-3 xl:pb-5 "
        initial={{
          paddingRight: isMobile ? '1rem' : '4rem',
          borderBottom: '0.5px solid #185EA1',
        }}
        whileHover={{
          borderBottom: isMobile ? '1px solid #185EA1' : '1px solid #185EA1',
          paddingRight: isMobile ? '1rem' : '4rem',
        }}
        whileInView={{
          borderBottom: '2px solid #185EA1',
          paddingRight: 0,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        <h2 className="text-3xl max-w-fit xl:text-5xl text-secondaryBlue_05 font-semibold font-encode">
          Our Green Light
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 w-full mt-10">
        {feature.map((item) => (
          <div
            key={item.id}
            className="flex p-4 xl:p-10 rounded-[20px] shadow_1 flex-col gap-4 items-center"
          >
            <div className="w-20 flex justify-center rounded-[18px] shadow_2 items-center h-20">
              <Image src={item.icon} alt="" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-center font-encode text-grey_05 text-2xl font-bold">
                {item.header}
              </h3>
              <p className="text-center mt-6 text-grey_03">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
