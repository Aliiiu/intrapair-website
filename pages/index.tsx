/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
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
	const heroRef = useRef<HTMLElement | null>(null);
	const caseStudyRef = useRef<HTMLElement | null>(null);
	return (
		<div>
			<Head>
				<title>Intrapair | Accelerating Digital Transformation</title>
			</Head>

			<AppLayout>
				<div className='w-full'>
					<section ref={heroRef}>
						<Hero />
					</section>
					<section className='bg-blue01 py-20 xl:py-[139px]'>
						<ProductEng caseStudy={caseStudyRef} hero={heroRef} />
					</section>

					<section
						ref={caseStudyRef}
						className='pt-20 xl:py-[129px]'
						id='caseStudy'
					>
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
