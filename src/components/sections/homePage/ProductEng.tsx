import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Accordion from '../../UI/widget/Accordion/Accordion';
import { motion, AnimatePresence } from 'framer-motion';

interface ArrayType {
  title: string;
  key: number;
  content: string;
  content2: string;
  imgSrc: string;
  width: number;
  height: number;
}
const faqArray: ArrayType[] = [
  {
    key: 1,
    title: 'Product Development',
    content: 'Growth and Development Asset Management Limited',
    content2:
      'We explore our client’s business ideas to build scalable and future-ready products that are generally acceptable and accessible in the global market.',
    imgSrc: '/images/prodDev.png',
    width: 607,
    height: 447,
  },
  {
    key: 2,
    title: 'DevOps and Platform Engineering',
    content: 'Growth and Development Asset Management Limited',
    content2:
      'We build tools to automate the software development lifecycle that improves the continuous delivery of applications and services at a high-velocity scale and customer experience. ',
    imgSrc: '/images/devOps.png',
    width: 531,
    height: 502,
  },
  {
    key: 3,
    title: 'Data Engineering and Analytics',
    content: 'Growth and Development Asset Management Limited',
    content2:
      'We improve the data visualization of companies by developing data-driven solutions that produce insightful real-time data about the core metrics of their business. ',
    imgSrc: '/images/dataEng.png',
    width: 609,
    height: 389,
  },
  {
    key: 4,
    title: 'Application Modernization',
    content: 'Growth and Development Asset Management Limited',
    content2:
      'We transform legacy applications into elegant software products to enhance and accelerate business functions.',
    imgSrc: '/images/appDev.png',
    width: 523,
    height: 526,
  },
];

const ProductEng = () => {
  const [index, setIndex] = useState(1);
  // const [currentTile, setCurrentTile] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTile((currentTile + 1) % faqArray.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentTile, faqArray]);

  return (
    <div className="container m-auto w-full px-4 xl:px-[114px]">
      <div className="flex flex-col gap-y-9 ">
        <div className="flex flex-col gap-3 ">
          <div className="border-b-[0.5px] w-[fit-content]  xl:pb-5 pr-9  border-solid border-white hover:pr-1 ease-in-out hover:border-b-2 hover:origin-[100%_20%] duration-500 ">
            <h3 className="font-bold text-white text-[28px] xl:text-5xl">
              Home For Everything
            </h3>
            <h3 className="font-bold text-white text-[28px] xl:text-5xl">
              Product Engineering
            </h3>
          </div>

          <div>
            <p className="text-white max-w-[450px] text-base">
              We utilize our coding intelligence to deliver first-class products
              featuring an excellent digital experience.
            </p>
          </div>
        </div>
        <div className="md:hidden">
          {faqArray.map((item) => (
            <Accordion {...item} key={item.key} />
          ))}
        </div>

        <div
          className="md:flex hidden gap-[100px]"
          style={{
            gridTemplateColumns: 'max-content 1fr',
          }}
        >
          <div className="flex flex-1 flex-col mlg:mb-0 mb-[60px] gap-y-[60px]">
            <div className="flex flex-col max-w-[370px] gap-6 mt-6">
              {faqArray.map((item) => (
                <p
                  key={item.key}
                  onClick={() => setIndex(item.key)}
                  className={`font-bold cursor-pointer text-4xl ${
                    item.key === index
                      ? 'text-white'
                      : 'text-black text-opacity-25'
                  }`}
                >
                  {item.title}
                </p>
              ))}
              {/* <p className='text-white font-bold text-4xl'>
								Product Development
							</p>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									DevOps and Platform Engineering
								</p>
							</div>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Data Engineering and Analytics
								</p>
							</div>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Application Modernization
								</p>
							</div> */}
            </div>

            <button className="rounded-[41px]  text-base w-[201px] border  border-solid text-white py-[15px] hover:bg-white hover:text-dark-blue duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="flex flex-col flex-1 gap-3 items-center">
            <Image
              src={faqArray[index - 1]?.imgSrc}
              alt="illustration"
              width={faqArray[index - 1]?.width}
              height={faqArray[index - 1]?.height}
            />
            <div>
              <p className="text-xl text-white">
                {faqArray[index - 1]?.content2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEng;
