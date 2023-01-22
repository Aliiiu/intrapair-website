import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface Props {
	bgColor: string;
}

export const SomethingGreat = ({ bgColor }: Props) => {
	const [animate, setAnimate] = useState(false);

	return (
		<section style={{ backgroundColor: bgColor }} className='relative'>
			<div className='absolute sm:block hidden left-0 top-0'>
				<div className='relative w-[150px] xl:w-[180px] h-[120px] xl:h-[150px]'>
					<Image src={'/svgs/spiral.svg'} fill alt='spiral' />
				</div>
			</div>
			<div className='container px-4 xl:px-[114px] mx-auto py-[120px] xl:py-[209px]'>
				<div className='flex flex-col items-center md:items-start xl:gap-y-6 '>
					<p className='text-dark-blue text-base font-semibold'>
						GOT A PROJECT IN MIND?
					</p>
					<motion.div
						onHoverStart={() => setAnimate(true)}
						onHoverEnd={() => setAnimate(false)}
						className='flex w-full mt-8'
					>
						<div className='md:flex block justify-between w-full items-center'>
							<div className='md:mb-0 mb-[30px]'>
								<h1 className='font-bold text-3xl md:text-4xl xl:text-6xl text-center md:text-left text-blue02 max-w-[300px] mx-auto sm:max-w-[500px] xl:max-w-[870px] xl:leading-[70px]'>
									Let’s make something great work together.
								</h1>
							</div>

							<div className='flex-1 flex justify-center md:justify-end'>
								{' '}
								<Link href={'contact-us'}>
									{/* <motion.div
										className={`relative w-[61px] transition-[width] cursor-pointer duration-500 ease-in-out h-[31px] xl:h-[67px] ${
											animate ? 'xl:w-[91px]' : 'xl:w-[61px]'
										}`}
										whileInView={{ width: 80 }}
										whileHover={{ width: 90 }}
										transition={{
											type: 'spring',
											duration: 0.3,
											bounce: 0.25,
											damping: 10,
										}}
									>
										<Image src={'/svgs/arrowRt.svg'} fill alt='right arrow' />
									</motion.div> */}
									<div className='relative'>
										<span
											className={`arrow ${animate ? 'before:w-[80px]' : ''}`}
										></span>
									</div>
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SomethingGreat;
