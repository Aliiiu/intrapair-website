/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '../src/components/app';
import Button from '../src/components/UI/widget/button/Button';

export default function Blog() {
	const [blogs, setBlogs] = useState<any>([]);

	useEffect(() => {
		const fetchBlog = async () => {
			const response = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@intrapair'
			);
			const data = await response.json();
			setBlogs(data);
		};
		fetchBlog();
	}, []);
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
								{/* <button className='rounded-[41px] text-base w-[202px] bg-dark-blue text-white py-[15px] '>
									Prompt Me
								</button> */}
								<Button
									text='Prompt Me'
									style='bg-dark-blue border mx-auto hover:bg-transparent hover:border-dark-blue hover:text-dark-blue '
								/>
							</div>
						</div>
					</section>
					<section className='mt-[260px] md:mt-[160px] pb-[189px]'>
						<div className='container px-4 xl:px-[114px] mx-auto'>
							<div className='flex flex-col gap-[70px]'>
								<div className='md:flex mx-auto hidden'>
									{
										// Check if blog is sucessfully fetched from medium json
										blogs.status === 'ok' ? (
											<div className='flex-wrap flex mx-auto gap-[36px]'>
												{blogs.items
													.slice(0, 6)
													.map((item: any, id: number) => {
														return (
															<div
																key={id}
																className='flex flex-col gap-1 sm:max-w-[300px] xl:max-w-[400px] items-center'
																style={{
																	boxShadow:
																		'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
																}}
															>
																<a
																	href={item.link}
																	target='_blank'
																	rel='nooponer noreferrer'
																>
																	<div className='w-full'>
																		<img src={item.thumbnail} alt='' />
																	</div>
																</a>
																<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
																	<p className='black01 text-base w-full sm:w-[80%]'>
																		{item.title}
																	</p>
																	<div className='flex justify-between'>
																		<p className='text-xs text-dark-blue'>
																			{item.pubDate.split(' ')[0]}
																		</p>
																		<Image
																			src={'/common/arrow-right.svg'}
																			width={12}
																			height={12}
																			alt='>'
																		/>
																	</div>
																</div>
															</div>
														);
													})}
											</div>
										) : (
											<p>Something went wrong...</p>
										)
									}
								</div>
								<div className='flex md:hidden'>
									{
										// Check if blog is sucessfully fetched from medium json
										blogs.status === 'ok' ? (
											<div className='flex-wrap flex  gap-[36px] justify-between w-full'>
												{blogs.items
													.slice(0, 3)
													.map((item: any, id: number) => {
														return (
															<div
																key={id}
																className='flex flex-col gap-1 sm:max-w-[300px] xl:max-w-[400px] mx-auto items-center'
																style={{
																	boxShadow:
																		'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
																}}
															>
																<a
																	href={item.link}
																	target='_blank'
																	rel='nooponer noreferrer'
																>
																	<div className='w-full'>
																		<img src={item.thumbnail} alt='' />
																	</div>
																</a>
																<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
																	<p className='black01 text-base w-full sm:w-[80%]'>
																		{item.title}
																	</p>
																	<div className='flex justify-between'>
																		<p className='text-xs text-dark-blue'>
																			{item.pubDate.split(' ')[0]}
																		</p>
																		<Image
																			src={'/common/arrow-right.svg'}
																			width={12}
																			height={12}
																			alt='>'
																		/>
																	</div>
																</div>
															</div>
														);
													})}
											</div>
										) : (
											<p>Something went wrong...</p>
										)
									}
								</div>
							</div>
						</div>
					</section>
				</div>
			</AppLayout>
		</div>
	);
}
