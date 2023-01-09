import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import HeroSection from '../src/components/common/HeroSection';
import CaseStudy from '../src/components/sections/homePage/CaseStudy';

const caseStudy = () => {
	return (
		<div>
			<Head>
				<title>Case Study</title>
			</Head>

			<AppLayout>
				<section className='container pt-10 md:pt-0 mx-auto py-10 px-4 xl:px-[114px] 2xl:pl-[150px] 2xl:pr-[50px]'>
					{/* <HeroSection
						imgMb='/images/blogMb.png'
						header='With the Right Technology, Building is Easier!'
					/> */}
					<div className='h-[200px] md:h-[250px] lg:h-[350px] 2xl:h-[400px] flex flex-col justify-center relative mx-[20px] xl:mx-[64px] 2xl:mx-[90px]'>
						<Image
							src={'/images/heroBanner.png'}
							alt=''
							fill
							className='hidden md:block'
						/>
						<Image
							src={'/images/blogMb.png'}
							alt=''
							fill
							className='md:hidden'
						/>
						<div className='z-[5]'>
							<h1
								className={`text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white mt-[180px] md:mt-[80px]`}
							>
								With the Right Technology, Building is Easier!
							</h1>
						</div>
					</div>
				</section>
				<section className='py-[70px] xl:py-[189px]'>
					<CaseStudy showTitle={false} />
				</section>
				<SomethingGreat bgColor='#CCEDFF' />
			</AppLayout>
		</div>
	);
};

export default caseStudy;
