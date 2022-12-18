import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AppLayout } from '../src/components/app';
import Feature from '../src/components/sections/aboutUs/Feature';
import Product from '../src/components/sections/aboutUs/Product';

const about = () => {
	return (
		<div>
			<Head>
				<title>About Us</title>
			</Head>

			<AppLayout>
				<section className='container mx-auto'>
					<div className='py-20 relative xl:ml-[211px] xl:mr-[0px]'>
						<Image src={'/images/heroBanner.png'} alt='' fill />
						<h1 className='text-xl text-center mb-5 font-encode text-secondaryBlue_03 font-bold'>
							WE ARE
						</h1>
						<h1 className='text-6xl text-center mb-10 xl:leading-[80px] font-extrabold font-milli font-outline-2 text-white'>
							Product Engineers and Open Source Enthusiasts
						</h1>
					</div>
				</section>
				<section className='container py-20 px-[114px] mx-auto'>
					<Product />
				</section>
				<section className='container py-20 px-[114px] mx-auto'>
					<Feature />
				</section>
			</AppLayout>
		</div>
	);
};

export default about;
