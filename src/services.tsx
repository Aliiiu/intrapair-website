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
				<section className='container mx-auto'>
					<HeroSection header='Excellent Engineering Is The Bedrock For Building Quality Solutions' />
				</section>
				<section className='container py-20 px-[114px] mx-auto'>
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
