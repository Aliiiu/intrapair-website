/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import Hero from '../src/components/sections/homePage/Hero';
import ProductEng from '../src/components/sections/homePage/ProductEng';
import CaseStudy from '../src/components/sections/homePage/CaseStudy';
import Product from '../src/components/sections/homePage/Product';
import OpenSource from '../src/components/sections/homePage/OpenSource';
import Blog from '../src/components/sections/homePage/Blog';
import QualityProd from '../src/components/sections/homePage/QualityProd';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Intrapair | Accelerating Digital Transformation</title>
				<meta
					name='description'
					content='Accelerating Digital Transformation'
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<AppLayout>
				<div className='w-full'>
					<Hero />
					<section className='bg-blue01 py-20 xl:py-[139px]'>
						<ProductEng />
					</section>

					<section className='pt-20 xl:py-[129px]'>
						<CaseStudy showTitle />
					</section>

					<section className='py-20 xl:pb-[189px]'>
						<Product />
					</section>

					<section className='bg-blue02 py-20 xl:py-[149px]'>
						<OpenSource />
					</section>

					<section className=' py-20 xl:py-[139px]'>
						<Blog />
					</section>

					<section className='bg-blue02 py-20 xl:py-[189px]'>
						<QualityProd />
					</section>

					<SomethingGreat bgColor='white' />
				</div>
			</AppLayout>
		</div>
	);
}
