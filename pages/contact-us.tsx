/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '../src/components/app';
import Button from '../src/components/UI/widget/button/Button';

export default function ContactUs() {
	return (
		<div>
			<Head>
				<title>Contact us - Intrapair</title>
			</Head>

			<AppLayout>
				<div className=' w-full relative'>
					<section className='container mx-auto py-10 px-4 xl:px-[114px]'>
						<div className='h-[300px] flex flex-col justify-center relative xl:mx-[84px] 2xl:mx-[160px]'>
							<Image
								src={'/images/heroFOT.png'}
								alt=''
								fill
								className='hidden md:block'
							/>
							<Image
								src={'/images/bgBanner.png'}
								alt=''
								fill
								className='md:hidden'
							/>
							<div>
								<h1
									className={`text-5xl mt-[70px] xl:text-6xl max-w-[800px] mx-auto text-center mb-10 xl:leading-[70px] font-extrabold font-milli font-outline-2 text-white`}
								>
									You&apos;re At The Home For Product Engineering
								</h1>
							</div>
						</div>
					</section>
					<section className='mt-[110px] pb-[189px]'>
						<div className='container px-4 xl:px-[114px] mx-auto relative'>
							<div className='absolute bottom-[-82px] hidden xl:block right-0'>
								<Image
									src={'/contact/blurry.png'}
									alt='blurry'
									width={171}
									height={171}
								/>
							</div>
							<div className='flex flex-wrap gap-[80px] md:gap-[180px] justify-between'>
								<div
									className='bg-white flex-1 p-[15px] sm:p-[40px] max-w-[100%] rounded-3xl '
									style={{
										boxShadow: '0px 0px 29px -4px rgba(16, 24, 40, 0.04)',
									}}
								>
									<div className='flex flex-col gap-4'>
										<p className='text-2xl font-semibold text-black01'>
											Hello, tell us about your project
										</p>
										<div className='flex flex-col gap-4'>
											<div className='flex flex-wrap gap-9'>
												<input
													type='text'
													placeholder='First Name'
													className='py-4 flex-1 placeholdertext-black01 outline-none font-base'
													style={{
														borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
													}}
												/>
												<input
													type='text'
													placeholder='Last Name'
													className='py-4 flex-1 placeholdertext-black01 outline-none font-base'
													style={{
														borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
													}}
												/>
											</div>
											<input
												type='email'
												placeholder='Email'
												className='py-4 placeholdertext-black01 outline-none font-base'
												style={{
													borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
												}}
											/>
											<div className='flex flex-wrap gap-9 '>
												<input
													type='number'
													placeholder='Phone Number'
													className='py-4 flex-1  placeholdertext-black01 outline-none font-base'
													style={{
														borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
													}}
												/>
												<input
													type='text'
													placeholder='Organization Name'
													className='py-4 flex-1  placeholdertext-black01 outline-none font-base'
													style={{
														borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
													}}
												/>
											</div>
											<input
												type='email'
												placeholder='Purpose Of Contact'
												className='py-4 placeholdertext-black01 outline-none font-base'
												style={{
													borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
												}}
											/>
											<textarea
												name='message'
												id='message'
												cols={30}
												rows={6}
												className='py-4 placeholder text-black01 outline-none font-base'
												style={{
													borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
													resize: 'none',
												}}
												placeholder='Message'
											></textarea>
											<Button
												text='Submit'
												style='bg-dark-blue border hover:bg-transparent hover:border-dark-blue hover:text-dark-blue w-[106px] lg:w-[201px] '
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-1 flex-col gap-[60px]'>
									<div className='flex flex-col gap-6'>
										<div className='flex flex-col gap-1'>
											<p className='text-xl text-[#999999]'>Sales</p>
											<Link
												href={'mailto:sales@intrapair.com'}
												className='text-xl text-dark-blue'
											>
												sales@intrapair.com
											</Link>
										</div>
										<div className='flex flex-col gap-1'>
											<p className='text-xl text-[#999999]'>Enquiries</p>
											<Link
												href={'mailto:hello@intrapair.com'}
												className='text-xl text-dark-blue'
											>
												hello@intrapair.com
											</Link>
										</div>
										<div className='flex flex-col gap-1'>
											<p className='text-xl text-[#999999]'>Recruitment</p>
											<Link
												href={'mailto:career@intrapair.com'}
												className='text-xl text-dark-blue'
											>
												career@intrapair.com
											</Link>
										</div>
									</div>
									<div className='flex flex-col gap-3'>
										<div className='flex flex-col'>
											<p className='text-base text-[#999999]'>
												You’d Prefer A Quick Call Instead?
											</p>
											<div>
												<p className='text-black01 text-base'>
													Call us on any of these phone numbers between
												</p>
												<p className='text-black01 text-base'>
													10 am and 4 pm EST, Mondays to Fridays.
												</p>
											</div>
										</div>
										<Link
											className='text-dark-blue text-xl'
											href='tel:+2349025539348'
										>
											+234 902 5539 348
										</Link>
									</div>
									<div className='flex flex-col gap-3'>
										<p className='text-base text-[#999999]'>
											We are social media friendly, send us a DM
										</p>
										<div className='flex gap-6 items-center'>
											<Link
												href='https://twitter.com/IntrapairHQ'
												passHref
												legacyBehavior
											>
												<a target={'_blank'} rel='noopener noreferrer'>
													<Image
														src={'/contact/twitter.svg'}
														alt='twitter'
														width={21}
														height={21}
													/>
												</a>
											</Link>
											<Link
												href='https://www.instagram.com/intrapairhq/'
												target={'_blank'}
												passHref
												legacyBehavior
											>
												<a target={'_blank'} rel='noopener noreferrer'>
													<Image
														src={'/contact/insta.svg'}
														alt='instagram'
														width={21}
														height={21}
													/>
												</a>
											</Link>
											<Link
												href='https://www.linkedin.com/company/intrapair/mycompany/'
												passHref
												target={'_blank'}
												legacyBehavior
											>
												<a target={'_blank'} rel='noopener noreferrer'>
													<Image
														src={'/contact/linkedin.svg'}
														alt='linkedin'
														width={21}
														height={21}
													/>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='bg-[#F0FAFF] py-[96px]'>
						<div className='container m-auto w-ful px-[30px]'>
							<div className='flex flex-col gap-y-[50px]'>
								<div className='flex flex-col gap-3 items-center'>
									<p className='text-4xl text-dark-blue font-bold rounded-xl'>
										Sign Up For Our Newsletter
									</p>
									<p className='text-base text-black01'>
										Be the first to know about releases and industry news and
										insights.
									</p>
								</div>
								<div className='flex flex-wrap gap-3 w-full md:w-[45%] m-auto'>
									<input
										type='text'
										className='border-2 border-solid outline-none rounded-full bg-white placeholdertext-black01 flex-1 px-[35px] py-[15px]'
										placeholder='Enter your email'
									/>
									<Button
										text='Submit'
										style='bg-dark-blue border hover:bg-transparent hover:border-dark-blue hover:text-dark-blue w-[106px] lg:w-[201px] '
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</AppLayout>
		</div>
	);
}
