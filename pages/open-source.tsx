/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '../src/components/app';
import { SomethingGreat } from '../src/components/common';
import Button from '../src/components/UI/widget/button/Button';

export default function OpenSource() {
	return (
		<div>
			<Head>
				<title>Open Source</title>
			</Head>

			<AppLayout>
				<div className=' w-full relative'>
					<section className='container mx-auto py-14 px-4 md:px-[100px] lg:px-[214px] xl:px-[114px]'>
						<div className='h-[170px] md:h-[250px] 2xl:h-[300px] flex flex-col justify-center relative xl:mx-[164px] 2xl:mx-[200px]'>
							<Image
								src={'/images/heroFOT.png'}
								alt=''
								fill
								className='hidden md:block'
							/>
							<Image
								src={'/images/heroMb.png'}
								alt=''
								fill
								className='md:hidden'
							/>
							<div>
								<h1
									className={`text-5xl mt-[70px] md:text-5xl lg:text-6xl xl:text-[64px] max-w-[500px] mx-auto text-center mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white`}
								>
									Fan Of Tech Communities?
								</h1>
							</div>
						</div>
					</section>

					<section className='mt-[40px] lg:mt-[82px] pb-[100px] lg:pb-[189px] xl:pb-[200px]'>
						<div className='container px-4 xl:px-[114px] relative mx-auto'>
							<div className='flex'>
								<div className='flex md:flex-row flex-col justify-between w-full items-center xl:gap-[40px]'>
									<div className='flex flex-col max-w-[402px] items-start gap-5 flex-1'>
										<p className='text-base max-w-[392px] text-black01'>
											We are enthusiastic about contributing to the tech
											ecosystem by creating free open-source solutions that
											enhance the work of developers, designers, content
											curators, and product managers. We hope to always share
											our knowledge with the world.
										</p>
										{/* <button className='rounded-[41px] hover:bg-transparent hover:text-dark-blue text-sm w-[212px] bg-dark-blue text-white py-[15px]'>
											Collaborate With Us
										</button> */}
										<Button
											text='Collaborate With Us'
											style='bg-dark-blue border hover:bg-transparent hover:border-dark-blue hover:text-dark-blue '
										/>
									</div>
									<div className='xl:my-0 my-9'>
										<Image
											className='mx-auto hidden xl:block'
											src={'/open-source/curly-arrow.png'}
											width={141}
											height={132}
											alt='==>'
										/>
									</div>

									<div className='md:flex-1 relative w-full md:w-[400px] h-[399px] lg:w-[531px] lg:h-[499px] xl:h-[599px]'>
										<Image
											src={'/images/open-source.png'}
											fill
											alt='open-source-illustration'
										/>
									</div>
								</div>
							</div>
							<div className='absolute bottom-[-152px] md:bottom-0 left-0'>
								<Image
									src={'/contact/blurry.png'}
									alt='blurry'
									width={171}
									height={171}
									className='hidden lg:block'
								/>
							</div>
						</div>
					</section>

					<SomethingGreat bgColor='#CCEDFF' />
				</div>
			</AppLayout>
		</div>
	);
}
