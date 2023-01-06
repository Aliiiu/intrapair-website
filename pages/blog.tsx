/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '../src/components/app';

export default function Blog() {
	return (
		<div>
			<Head>
				<title>Blog</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<AppLayout>
				<div className=' w-full relative'>
					<section className='container mx-auto py-10 md:py-10 px-4 md:px-[100px] lg:px-[54px] xl:px-[54px]'>
						<div className='h-[200px] md:h-[250px] lg:h-[350px] xl:h-[400px] flex flex-col justify-center relative xl:mx-[64px] 2xl:mx-[200px]'>
							<Image
								src={'/images/blogBg.png'}
								alt=''
								fill
								className='hidden md:block'
							/>
							<Image
								src={'/images/blogMb.png'}
								alt=''
								fill
								className='md:hidden'
							/>
							<div className='flex flex-col text-center z-[5] items-center'>
								<h1
									className={`text-5xl mt-[250px] md:mt-[70px] md:text-5xl lg:text-6xl xl:text-[64px] max-w-[900px] mx-auto text-center xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white`}
								>
									There’s Always Something To Read About
								</h1>
								<p className='text-black01 max-w-[520px] mb-5 mt-2 text-base'>
									Receive frequent tech updates curated by proficient writers at
									Intrapair. You don’t want to miss out on any of our exciting
									stories.
								</p>
								<button className='rounded-[41px] text-base w-[202px] bg-dark-blue text-white py-[15px] '>
									Prompt Me
								</button>
							</div>
						</div>
					</section>
					<section className='mt-[160px] pb-[189px]'>
						<div className='container px-4 xl:px-[114px] mx-auto'>
							<div className='flex flex-col gap-[70px]'>
								<div className='flex'>
									<div className='xl:flex-nowrap flex-wrap flex  gap-[36px] justify-between w-full'>
										<div
											className='flex flex-col gap-1 md:max-w-[400px]  items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog1.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
										<div
											className='flex flex-col gap-1  md:max-w-[400px]  items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog2.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
										<div
											className='flex flex-col gap-1   md:max-w-[400px] items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog3.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='md:flex hidden'>
									<div className='xl:flex-nowrap flex-wrap flex  gap-[36px] justify-between w-full'>
										<div
											className='flex flex-col gap-1 md:max-w-[400px]  items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog1.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
										<div
											className='flex flex-col gap-1  md:max-w-[400px]  items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog2.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
										<div
											className='flex flex-col gap-1   md:max-w-[400px] items-center'
											style={{
												boxShadow:
													'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
											}}
										>
											<div className='w-full'>
												<img src='/blog/blog3.png' alt='' />
											</div>
											<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
												<p className='black01 text-base w-full sm:w-[80%]'>
													Lorem ipsum , consectetur adipiscing elit.
												</p>
												<div className='flex justify-between'>
													<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
													<Image
														src={'/common/arrow-right.svg'}
														width={12}
														height={12}
														alt='>'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</AppLayout>
		</div>
	);
}
