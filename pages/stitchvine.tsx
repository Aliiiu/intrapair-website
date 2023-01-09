import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import Challenges from '../src/components/sections/stitchvine/Challenges';
import Overview from '../src/components/sections/stitchvine/Overview';
import StitchHero from '../src/components/sections/stitchvine/stitchHero';

const Stitchvine = () => {
	return (
		<div>
			<Head>
				<title>Stitchvine</title>
			</Head>
			<AppLayout>
				<section className='container py-0 xl:pb-0 xl:pt-20 px-4 xl:pr-[114px] mx-auto'>
					<StitchHero />
				</section>
				<section className='relative mt-[60px] md:mt-[80px] w-full'>
					<div className='absolute w-full'>
						<div className='relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[750px] 2xl:h-[1050px]'>
							<Image src={'/images/stitchvineMockup.png'} alt='' fill />
						</div>
					</div>
				</section>
				<section className='bg-[#0E0037] mt-[250px] md:mt-[400px] lg:mt-[550px] xl:mt-[600px] 2xl:mt-[800px]'>
					<div className='container py-16 xl:pb-32 xl:pt-[300px] px-4 xl:px-[114px] mx-auto'>
						<Overview />
					</div>
				</section>
				<section className='container py-16 xl:py-32 px-4 xl:px-[114px] mx-auto'>
					<Challenges />
				</section>
				<section className='w-full h-[200px] md:h-[500px] xl:h-[750px]'>
					<div className='flex h-full'>
						<div className='flex-1 flex bg-[#81249D] relative justify-center items-center'>
							<h5 className='font-semibold absolute top-[2%] left-[10%] xl:left-[22%] 2xl:left-[30%] text-[8px] md:text-base text-white mt-[20px] md:mt-[50px] xl:mt-[100px]'>
								Brandmark
							</h5>
							<div className='w-[100px] h-[30px] md:w-[200px] md:h-[38px] relative xl:w-[295px] xl:h-[68px]'>
								<Image src={'/svgs/stitchvineLogo2.svg'} alt='' fill />
							</div>
						</div>
						<div className='flex-1 flex bg-[#F8F2FF] justify-center items-center'>
							<div className='w-[100px] h-[30px] md:w-[200px] md:h-[38px] relative xl:w-[295px] xl:h-[68px]'>
								<Image src={'/svgs/stitchvineLogo.svg'} alt='' fill />
							</div>
						</div>
					</div>
				</section>
				<section className='container py-10 xl:py-[150px] px-4 xl:px-[114px] mx-auto'>
					<div className='flex gap-3 xl:gap-[170px] h-full'>
						<div className='flex-1 flex justify-end'>
							<div className='relative w-[136px] xl:w-[375px] h-[286px] xl:h-[812px]'>
								<Image src={'/images/stitchvineApp.jpg'} alt='' fill />
							</div>
						</div>
						<div className='flex-1'>
							<div className='relative flex w-[136px] xl:w-[375px] h-[286px] xl:h-[812px]'>
								<Image src={'/images/stitchvineOnboarding.png'} alt='' fill />
							</div>
						</div>
					</div>
				</section>
				<SomethingGreat bgColor='#CCEDFF' />
			</AppLayout>
		</div>
	);
};

export default Stitchvine;
