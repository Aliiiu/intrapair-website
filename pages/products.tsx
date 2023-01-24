import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import HeroSection from '../src/components/common/HeroSection';

const products = () => {
	return (
		<div>
			<Head>
				<title>Products</title>
			</Head>

			<AppLayout>
				<div className=' w-full relative'>
					<section className='container mx-auto py-10 px-4 pt-10 md:pt-[20px] lg:pt-[50px] xl:pt-[70px] md:px-[114px]'>
						<div className='h-[150px] md:h-[150px] xl:h-[200px] 2xl:h-[250px] flex flex-col justify-center md:justify-end relative mx-[20px] xl:mx-[164px] 2xl:mx-[200px]'>
							<Image
								src={'/images/heroBanner3.png'}
								alt=''
								fill
								className='hidden md:block'
							/>
							<Image
								src={'/images/productMb.png'}
								alt=''
								fill
								className='md:hidden'
							/>
							<div>
								<h1
									className={`text-5xl xl:text-6xl max-w-[900px] mx-auto text-center mb-0 md:mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white`}
								>
									Products
								</h1>
							</div>
						</div>
					</section>
					<section className='container pt-10 pb-[100px] md:pt-20 md:pb-[150px] lg:pb-[180px] xl:pb-[251px] px-4 xl:px-[114px] mx-auto'>
						<div className='flex'>
							<div className='md:flex block flex-wrap  justify-between w-full items-center gap-[100px] m-auto'>
								<Link
									href={'flip'}
									className='flex flex-1 flex-col gap-5 mlg:mb-0 mb-[60px] w-[455px] max-w-[100%] h-[355px] xl:h-[455px] relative'
									style={{
										background:
											' linear-gradient(90deg, #0095E7 3.7%, #27B3FF 93.96%)',
										boxShadow:
											'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
									}}
								>
									<div
										className='absolute top-[50%] left-[50%]'
										style={{ transform: 'translate(-50%, -50%)' }}
									>
										<div className='relative w-[90px] lg:w-[109px] h-[120px] lg:h-[148px]'>
											<Image src={'/home/flip.png'} fill alt='flip' />
										</div>
									</div>
								</Link>
								<div className='flex flex-1 flex-col gap-3 xl:gap-5'>
									<p className='text-3xl xl:text-5xl font-bold text-black01'>
										Flip
									</p>
									<p className='text-base text-black01'>
										An enhanced assessment platform that provides computerized
										tests, examination management, quick grading systems, and
										collation of results instead of the use of pen and paper.
									</p>
								</div>
							</div>
						</div>
					</section>
					<SomethingGreat bgColor='#CCEDFF' />
				</div>
			</AppLayout>
		</div>
	);
};

export default products;
