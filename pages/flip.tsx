import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import Challenges from '../src/components/sections/flip/Challenges';
import Overview from '../src/components/sections/flip/Overview';

const flip = () => {
	return (
		<div>
			<Head>
				<title>FlipCBT</title>
			</Head>
			<AppLayout>
				<section className='container py-0 xl:pb-0 xl:pt-20 px-4 xl:pr-[114px] mx-auto'>
					<div className='pt-[129px]'>
						<div className='xl:pl-[114px]'>
							<h2 className='font-semibold text-3xl xl:text-5xl'>
								Flip - Enhanced Assessment Platform
							</h2>
							<p className='text-grey_04'>
								Branding & Identity, Websites & Digital Platforms
							</p>
						</div>
					</div>
				</section>
				<section className='relative mt-[60px] md:mt-[80px] w-full'>
					<div className='absolute w-full'>
						<div className='relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[750px] 2xl:h-[1050px]'>
							<Image src={'/images/flipMockup.png'} alt='' fill />
						</div>
					</div>
				</section>
				<section className='bg-[#0E0037] mt-[250px] md:mt-[400px] lg:mt-[550px] xl:mt-[600px] 2xl:mt-[800px]'>
					<div className='container py-16 xl:pb-32 xl:pt-[300px] px-4 xl:px-[114px] mx-auto'>
						<Overview />
					</div>
				</section>
				<section className='container py-20 xl:py-32 px-4 xl:px-[114px] mx-auto'>
					<Challenges />
				</section>
				<section className='w-full h-[350px] md:h-[500px] xl:h-[750px]'>
					<div className='flex h-full'>
						<div className='flex-1 flex bg-[#0075FF] relative justify-center items-center'>
							<h5 className='font-semibold absolute top-[2%] left-[10%] xl:left-[25%] 2xl:left-[30%] text-[8px] md:text-base text-white mt-[20px] md:mt-[50px] xl:mt-[100px]'>
								Brandmark
							</h5>
							<div className='w-[150px] h-[30px] md:w-[200px] md:h-[48px] relative xl:w-[295px] xl:h-[80px]'>
								<Image src={'/svgs/flipLogo.svg'} alt='' fill />
							</div>
						</div>
						<div className='flex-1 flex bg-[#06042C] justify-center items-center'>
							<div className='w-[150px] h-[40px] md:w-[200px] md:h-[68px] relative xl:w-[295px] xl:h-[100px]'>
								<Image src={'/svgs/flipLogo2.svg'} alt='' fill />
							</div>
						</div>
					</div>
				</section>
				<section className='container py-20 xl:py-[150px] px-4 xl:px-[114px] mx-auto'>
					<div className='max-w-fit mx-auto h-full'>
						<div className='relative w-[300px] h-[297px] sm:w-[427px] sm:h-[397px] lg:w-[727px] lg:h-[500px] xl:w-[927px] xl:h-[597px]'>
							<Image src={'/images/flipOnboard.png'} alt='' fill />
						</div>
					</div>
				</section>
				<SomethingGreat bgColor='#CCEDFF' />
			</AppLayout>
		</div>
	);
};

export default flip;
