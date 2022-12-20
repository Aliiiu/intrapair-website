import Head from 'next/head';
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
				<section className='container mx-auto'>
					<HeroSection header='With the Right Technology, Building is Easier!' />
				</section>
				<section className='py-[189px]'>
					<CaseStudy showTitle={false} />
				</section>
				<SomethingGreat bgColor='white' />
			</AppLayout>
		</div>
	);
};

export default caseStudy;
