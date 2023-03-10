import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import Challenges from '../src/components/sections/anyworks/Challenge';
import Overview from '../src/components/sections/anyworks/Overview';

const Anyworks = () => {
  return (
    <div>
      <Head>
        <title>AnyWorkX - Intrapair</title>
      </Head>
      <AppLayout>
        <section className="container py-0 xl:pb-0 xl:pt-20 px-4 xl:pr-[114px] mx-auto">
          <div className="pt-[129px]">
            <div className="xl:pl-[114px]">
              <h2 className="font-semibold text-3xl xl:text-[2.5rem]">
                AnyWorkX - Endless services, endless possibilities
              </h2>
              <p className="text-grey_04 mt-2">
                Branding & Identity, Websites & Digital Platforms
              </p>
            </div>
          </div>
        </section>
        <section className="relative mt-[60px] md:mt-[80px] w-full">
          <div className="absolute w-full">
            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[700px] 2xl:h-[930px]">
              <Image src={'/images/anyworksMockup.png'} alt="" fill />
            </div>
          </div>
        </section>
        <section className="bg-[#0E0037] mt-[250px] md:mt-[400px] lg:mt-[500px] xl:mt-[550px] 2xl:mt-[800px]">
          <div className="container py-16 pt-[80px] xl:pb-32 md:pt-[100px] lg:pt-[150px] xl:pt-[280px] 2xl:pt-[250px] px-4 xl:px-[114px] mx-auto">
            <Overview />
          </div>
        </section>
        <section className="container py-20 xl:py-32 px-4 xl:px-[114px] mx-auto">
          <Challenges />
        </section>
        <section className="w-full h-[300px] md:h-[500px] xl:h-[750px]">
          <div className="flex h-full">
            <div className="flex-1 flex bg-[#7E00C4] relative justify-center items-center">
              <h5 className="font-semibold absolute top-[2%] left-[10%] xl:left-[24%] 2xl:left-[30%] text-[8px] md:text-base text-white mt-[20px] md:mt-[50px] xl:mt-[100px]">
                Brandmark
              </h5>
              <div className="w-[150px] h-[30px] md:w-[200px] md:h-[38px] relative xl:w-[295px] xl:h-[68px] 2xl:h-[88px]">
                <Image src={'/svgs/anyworksLogo2.svg'} alt="" fill />
              </div>
            </div>
            <div className="flex-1 flex bg-[#FAF1FF] justify-center items-center">
              <div className="w-[150px] h-[30px] md:w-[200px] md:h-[38px] relative xl:w-[295px] xl:h-[68px] 2xl:h-[88px]">
                <Image src={'/svgs/anyworksLogo.svg'} alt="" fill />
              </div>
            </div>
          </div>
        </section>
        <section className="container py-20 xl:py-[150px] px-4 xl:px-[114px] mx-auto">
          <div className="grid grid-cols-3 max-w-fit mx-auto gap-2 xl:gap-[40px] h-full">
            <div className="relative w-[100px] h-[200px] xl:w-[275px] xl:h-[550px]">
              <Image src={'/images/anyworksOnboard.png'} alt="" fill />
            </div>
            <div className="relative w-[100px] h-[200px] xl:w-[275px] xl:h-[550px]">
              <Image src={'/images/anyworksOnboard2.png'} alt="" fill />
            </div>
            <div className="relative w-[100px] h-[200px] xl:w-[275px] xl:h-[550px]">
              <Image src={'/images/anyworksOnboard3.png'} alt="" fill />
            </div>
          </div>
        </section>
        <SomethingGreat bgColor="#CCEDFF" />
      </AppLayout>
    </div>
  );
};

export default Anyworks;
