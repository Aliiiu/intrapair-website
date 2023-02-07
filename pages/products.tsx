import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import HeroSection from '../src/components/common/HeroSection';
import Cursor from '../src/components/UI/widget/customCursor/Cursor';

const products = () => {
  return (
    <div>
      <Head>
        <title>Products - Intrapair</title>
      </Head>

      <AppLayout>
        <div className=" w-full relative">
          <section className="container mx-auto py-10 px-4 pt-10 md:pt-[20px] lg:pt-[50px] xl:pt-[70px] md:px-[114px]">
            <div className="h-[150px] md:h-[150px] xl:h-[200px] 2xl:h-[250px] flex flex-col justify-center md:justify-end relative mx-[20px] xl:mx-[164px] 2xl:mx-[200px]">
              <Image
                src={'/images/heroBanner3.png'}
                alt=""
                fill
                className="hidden md:block"
              />
              <Image
                src={'/images/productMb.png'}
                alt=""
                fill
                className="md:hidden"
              />
              <div>
                <h1
                  className={`text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-0 md:mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white`}
                >
                  Products
                </h1>
              </div>
            </div>
          </section>
          <section className="container pt-10 pb-[100px] md:pt-20 md:pb-[150px] lg:pb-[180px] xl:pb-[251px] px-4 xl:px-[114px] mx-auto">
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
          </section>
          <SomethingGreat bgColor="#CCEDFF" />
        </div>
      </AppLayout>
    </div>
  );
};

export default products;
