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
				<section className='container mx-auto py-10 px-4 xl:px-[114px]'>
					<HeroSection
						showTitle
						title='WE ARE'
						header='Product Engineers and Open Source  Enthusiasts'
					/>
				</section>
				<section className='container py-10 xl:py-20 px-4 xl:px-[114px] mx-auto'>
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
