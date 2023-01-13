import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cursor from '../../UI/widget/customCursor/Cursor';

const Product = () => {
	return (
		<div className='container mx-auto px-4 xl:px-[114px]'>
			<div className='flex flex-col gap-y-[60px] m-auto '>
				<div className='flex flex-col gap-3 w-[fit-content] max-w-[100%]'>
					<h3 className='font-bold text-dark-blue text-3xl xl:text-5xl border-b-[0.5px] w-[fit-content] pb-2 xl:pb-5 pr-4 xl:pr-9  border-solid border-dark-blue'>
						Our Products
					</h3>
					{/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
					<p className='text-black-01 text-base'>
						Our products tackle emerging challenges across different sectors in
						Africa.
					</p>
				</div>
				<div className='flex'>
					<div className='md:flex block w-full items-center'>
						{/* <div
							className='flex flex-1 overflow-hidden flex-col cursor-none gap-5 mlg:mb-0 mb-[60px] w-[455px] max-w-[100%] h-[355px] xl:h-[455px] relative'
							style={{
								background:
									' linear-gradient(90deg, #0095E7 3.7%, #27B3FF 93.96%)',
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<Cursor>
								<div className='hover:scale-110 transition ease-in-out duration-500 w-full h-[355px] xl:h-[455px]'>
									<Link
										href={'flip'}
										className='absolute top-[50%] left-[50%]'
										style={{ transform: 'translate(-50%, -50%)' }}
									>
										<div className='relative w-[90px] lg:w-[109px] h-[120px] lg:h-[148px]'>
											<Image src={'/home/flip.png'} fill alt='flip' />
										</div>
									</Link>
								</div>
							</Cursor>
						</div> */}
						<div className='overflow-hidden w-[60%]'>
							<Link
								href={'/stitchvine'}
								className='h-[303px] cursor-none w-[720px] xs:h-[430px] md:h-[480px] 2xl:h-[580px]'
							>
								<Cursor style='bg-white text-blue-400'>
									<div className='h-[303px] hover:scale-110 transition ease-in-out duration-500 xs:h-[430px] md:h-[480px] 2xl:h-[580px] relative'>
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
