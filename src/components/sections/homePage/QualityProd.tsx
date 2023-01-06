import Image from 'next/image';
import React from 'react';

const QualityProd = () => {
	return (
		<div className='container m-auto px-4 xl:px-[114px] w-full'>
			<div className='mb-[70px] m-auto'>
				<div className='flex'>
					<div className='flex flex-col gap-3 w-[700px] max-w-[100%]'>
						<div className='pb-5 pr-9 border-b-2  border-solid border-white'>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								Quality Product Keeps
							</h3>
							<h3 className='font-bold text-white text-3xl xl:text-5xl'>
								You In Business
							</h3>
						</div>
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
				<div className='overflow-x-scroll py-8 flex  gap-[46px] justify-between w-full'>
					<div className='relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[20px] xl:p-[60px] gap-[74px] min-w-[326px] w-[526px]'>
						<div className='absolute top-[-13px] left-[32px]'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div>
							<p className='text-white text-base font-semibold'>
								Stephen Stephen
							</p>
							<p className='text-white text-base '>CEO, Intrapair</p>
						</div>
					</div>
					<div className='relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[20px] xl:p-[60px] gap-[74px] min-w-[326px] w-[526px]'>
						<div className='absolute top-[-13px] left-[32px]'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div>
							<p className='text-white text-base font-semibold'>
								Stephen Stephen
							</p>
							<p className='text-white text-base '>CEO, Intrapair</p>
						</div>
					</div>
					<div className='relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[20px] xl:p-[60px] gap-[74px] min-w-[326px] w-[526px]'>
						<div className='absolute top-[-13px] left-[32px]'>
							<Image
								src={'/home/testimony-tag.svg'}
								width={68}
								height={32}
								alt='tag'
							/>
						</div>
						<p className='text-white text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
							a, mi vel sollicitudin velit varius dictum. Arcu suspendisse
							blandit non porta adipiscing rutrum.
						</p>
						<div>
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
