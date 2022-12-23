import React from 'react';
import Image from 'next/image';

interface Props {
	bgColor: string;
}

export const SomethingGreat = ({ bgColor }: Props) => {
	return (
		<section style={{ backgroundColor: bgColor }} className='relative'>
			<div className='absolute sm:block hidden left-0 top-0'>
				<div className='relative w-[150px] xl:w-[180px] h-[120px] xl:h-[150px]'>
					<Image src={'/svgs/spiral.svg'} fill alt='spiral' />
				</div>
			</div>
			<div className='container m-auto px-4 xl:px-[114px] py-[99px] sm:first-line:pt-[100px] xl:pt-[204px] pb-20 xl:pb-[200px]'>
				<div className='flex flex-col items-center gap-y-6 m-auto '>
					<p className='text-dark-blue text-base font-semibold'>
						GOT A PROJECT IN MIND?
					</p>
					<div className='flex'>
						<div className='md:flex block flex-nowrap  justify-between w-full items-center gap-[50px] m-auto'>
							<div className='md:mb-0 mb-[30px] basis-[80%] '>
								<h1 className='font-bold text-2xl md:text-3xl xl:text-6xl text-center text-blue02 max-w-[870px] xl:leading-[70px]'>
									Let’s make something great work together.
								</h1>
							</div>

							<div className='flex-1 flex justify-center md:justify-end'>
								{' '}
								<div className='relative w-[51px] xl:w-[61px] h-[31px] xl:h-[37px]'>
									<Image src={'/home/arrow-right.svg'} fill alt='>' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SomethingGreat;
