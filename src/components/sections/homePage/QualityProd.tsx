import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const QualityProd = () => {
	return (
		<div className='container m-auto px-4 xl:px-[114px] w-full'>
			<div className='mb-[70px] m-auto'>
				<div className='flex'>
					<div className='flex flex-col gap-3 w-[700px] max-w-[100%]'>
						<motion.div
							className='pb-5 pr-[11.8rem] border-b-2  border-solid border-white w-[fit-content] '
							whileInView={{
								borderBottom: '2px solid #fff',
								paddingRight: 0,
							}}
							whileHover={{
								borderBottom: '2px solid #fff',
								paddingRight: '11.8rem',
							}}
							transition={{
								duration: 1.5,
								type: 'tween',
								ease: 'easeInOut',
							}}
						>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								Quality Product Keeps
							</h3>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								You In Business
							</h3>
						</motion.div>
						{/* <div className="bg-white w-full h-[1px]"></div> */}

						<p className='text-white text-base leading-6'>
							At Intrapair, we’ve got the engineering of your products figured
							out for you. Don’t take our words for granted, People are saying a
							lot about us!
						</p>
					</div>
				</div>
			</div>
			<div className='flex'>
				<div className='overflow-x-scroll scrollbar-hide py-8 flex  gap-[46px] justify-between w-full'>
					<div className='relative flex flex-col border-2  border-solid border-dark-blue p-[20px] xl:p-[40px] 2xl:p-[60px] gap-[54px] 2xl:gap-[74px] min-w-[326px] w-[526px] testimony-container'>
						<div className='testimony-overlay z-0 absolute top-0 left-0 w-full h-full bg-secondary-blue_02 opacity-0 duration-300 ease-in-out transition-opacity' />
						<div className='absolute top-[-13px] left-[32px] z-30'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white 2xl:text-xl z-30'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div className='z-30'>
							<p className='text-white text-base font-semibold'>
								Stephen Stephen
							</p>
							<p className='text-white text-base '>CEO, Intrapair</p>
						</div>
					</div>
					<div className='relative flex flex-col border-2  border-solid border-dark-blue p-[20px] xl:p-[40px] 2xl:p-[60px] gap-[54px] 2xl:gap-[74px] min-w-[326px] w-[526px] testimony-container'>
						<div className='testimony-overlay z-0 absolute top-0 left-0 w-full h-full bg-secondary-blue_02 opacity-0 duration-300 ease-in-out transition-opacity' />
						<div className='absolute top-[-13px] left-[32px] z-30'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white 2xl:text-xl z-30'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div className='z-30'>
							<p className='text-white text-base font-semibold '>
								Stephen Stephen
							</p>
							<p className='text-white text-base '>CEO, Intrapair</p>
						</div>
					</div>
					<div className='relative flex flex-col border-2  border-solid border-dark-blue p-[20px] xl:p-[40px] 2xl:p-[60px] gap-[54px] 2xl:gap-[74px] min-w-[326px] w-[526px] testimony-container'>
						<div className='testimony-overlay z-0 absolute top-0 left-0 w-full h-full bg-secondary-blue_02 opacity-0 duration-300 ease-in-out transition-opacity' />
						<div className='absolute top-[-13px] left-[32px] z-30'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white 2xl:text-xl z-30'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div className='z-30'>
							<p className='text-white text-base font-semibold'>
								Stephen Stephen
							</p>
							<p className='text-white text-base '>CEO, Intrapair</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QualityProd;
