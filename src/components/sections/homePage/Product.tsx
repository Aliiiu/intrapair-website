import Image from 'next/image';
import Link from 'next/link';
import Cursor from '../../UI/widget/customCursor/Cursor';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const hoverVariant = {
	hover: {
		scale: 1.5,
	},
	initial: {
		scale: 1,
	},
};

const Product = () => {
	return (
		<div className='container mx-auto px-4 xl:px-[114px]'>
			<div className='flex flex-col gap-y-[60px] m-auto '>
				<div className='flex flex-col gap-3 w-[fit-content] max-w-[100%]'>
					{/* <h3 className='font-bold text-dark-blue text-3xl xl:text-5xl border-b-[0.5px] w-[fit-content] pb-2 xl:pb-5 pr-4 xl:pr-9  border-solid border-dark-blue'>
						Our Products
					</h3> */}
					<motion.div
						className='pb-2 xl:pb-4 pr-[5rem] border-b-[0.5px] w-[fit-content] border-solid border-dark-blue mb-2'
						whileHover={{
							borderBottom: '0.5px solid #185EA1',
							paddingRight: '5em',
						}}
						whileInView={{
							borderBottom: '2px solid #185EA1',
							paddingRight: 0,
						}}
						transition={{
							duration: 1.5,
							type: 'tween',
							ease: 'easeInOut',
						}}
					>
						<h3 className='font-bold text-dark-blue max-w-[320px] text-3xl xl:text-5xl'>
							Our Product
						</h3>
					</motion.div>
					{/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
					<p className='text-black-01 text-base'>
						Our products tackle emerging challenges across different sectors in
						Africa.
					</p>
				</div>
				<div className='flex'>
					<div className='md:flex block w-full items-center'>
						<div className='overflow-hidden w-[60%]'>
							<Link
								href={'/stitchvine'}
								className='h-[303px] cursor-none w-[720px] xs:h-[430px] md:h-[480px] 2xl:h-[580px]'
							>
								<Cursor style='bg-white text-blue-400'>
									<div className='h-[303px] hover:scale-125 transition ease-in-out duration-500 xs:h-[430px] md:h-[480px] 2xl:h-[580px] relative'>
										<Image src={'/images/flipBig.png'} alt='' fill />
									</div>
								</Cursor>
							</Link>
						</div>
						<div className='w-[40%] flex flex-col gap-3 pl-[80px] xl:gap-5'>
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
			</div>
		</div>
	);
};

export default Product;
