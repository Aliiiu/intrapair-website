import Head from 'next/head';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import HeroSection from '../src/components/common/HeroSection';
import Features from '../src/components/sections/services/Features';
import InANutShell from '../src/components/sections/services/InANutShell';

const services = () => {
	return (
		<div>
			<Head>
				<title>Services</title>
			</Head>

			<AppLayout>
				<section className='container mx-auto py-10 px-4 xl:px[114px] 2xl:px-[228px]'>
					<HeroSection
						imgSrc='/images/heroBanner2.png'
						header='Excellent Engineering Is The Bedrock For Building Quality Solutions'
					/>
				</section>
				<section className='container px-4 py-16 md:py-20 lg:py-[120px] xl:py-[180px] xl:px-[114px] mx-auto'>
					<Features />
				</section>
				<section className='bg-[#CCEDFF4D]'>
					<div className='container mx-auto'>
						<InANutShell />
					</div>
				</section>
				<SomethingGreat bgColor='white' />
			</AppLayout>
		</div>
	);
};

export default services;
