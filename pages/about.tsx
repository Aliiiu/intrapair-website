import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import HeroSection from '../src/components/common/HeroSection';
import Feature from '../src/components/sections/aboutUs/Feature';
import Product from '../src/components/sections/aboutUs/Product';
import WhatYouShouldKnow from '../src/components/sections/aboutUs/WhatYouShouldKnow';

const about = () => {
	return (
		<div>
			<Head>
				<title>About Us</title>
			</Head>

			<AppLayout>
				<section className='container mx-auto py-10 px-4 xl:pl-[188px] 2xl:pr-[100px] 2xl:pl-[288px]'>
					{/* <HeroSection
						showTitle
						title='WE ARE'
						header='Product Engineers and Open Source  Enthusiasts'
					/> */}
					<div className='h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[420px] flex flex-col items-start justify-center relative xl:mx-[0px] 2xl:mx-[0px]'>
						<Image
							src={'/images/heroBanner.png'}
							alt=''
							fill
							className='hidden md:block'
						/>
						<Image
							src={'/images/bgBanner.png'}
							alt=''
							fill
							className='md:hidden'
						/>
						<div className='z-[5] xl:pl-[20px] 2xl:pl-[60px]'>
							<h1 className='text-xl text-center mb-5 font-encode text-secondaryBlue_03 font-bold'>
								WE ARE
							</h1>
							<h1
								className={`text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white
									`}
							>
								Product Engineers and Open Source Enthusiasts
							</h1>
						</div>
					</div>
				</section>
				<section className='container relative py-10 xl:py-20 px-4 xl:px-[114px] mx-auto'>
					<Image
						src={'/svgs/sphere_1.svg'}
						alt=''
						width={114}
						height={114}
						className='absolute hidden xl:block top-[100px] left-0'
					/>
					<Image
						src={'/svgs/sphere_1.svg'}
						alt=''
						width={114}
						height={114}
						className='absolute hidden xl:block bottom-[0px] right-0'
					/>
					<Product />
				</section>
				<section className='container py-10 xl:py-20 px-4 xl:px-[114px] mx-auto'>
					<Feature />
				</section>
				<section className='bg-[#F0FAFF]'>
					<div className='container py-16 xl:py-32 px-4 xl:px-[114px] mx-auto'>
						<WhatYouShouldKnow />
					</div>
				</section>
				{/* <section className='container py-52 px-[114px] mx-auto'>
					<WhatYouShouldKnow />
				</section> */}
				<SomethingGreat bgColor='white' />
			</AppLayout>
		</div>
	);
};

export default about;
