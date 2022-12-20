import Image from 'next/image';
import React from 'react';

const ProductEng = () => {
	return (
		<div className='container m-auto w-full  px-[114px]'>
			<div className='flex flex-col gap-y-9 '>
				<div className='flex flex-col gap-3 '>
					<div className='border-b-2 w-[fit-content] pb-5 pr-9  border-solid border-white'>
						<h3 className='font-bold text-white text-5xl'>
							Home For Everything
						</h3>
						<h3 className='font-bold text-white text-5xl'>
							Product Engineering
						</h3>
					</div>

					<div>
						<p className='text-white text-base'>
							We utilize our coding intelligence to deliver first-class products
						</p>
						<p className='text-white text-base'>
							featuring an excellent digital experience.
						</p>
					</div>
				</div>
				<div
					className='mlg:flex block gap-[100px]'
					style={{
						gridTemplateColumns: 'max-content 1fr',
					}}
				>
					<div className='flex flex-1 flex-col mlg:mb-0 mb-[60px] gap-y-[60px]'>
						<div className='flex flex-col gap-6 mt-6'>
							<p className='text-white font-bold text-4xl'>
								Product Development
							</p>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									DevOps and Platform
								</p>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Engineering{' '}
								</p>
							</div>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Data Engineering
								</p>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									and Analytics
								</p>
							</div>
							<div>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Application
								</p>
								<p
									className='font-bold text-4xl'
									style={{ color: 'rgba(0, 0, 0, 0.25)' }}
								>
									Modernization
								</p>
							</div>
						</div>

						<button className='rounded-[41px]  text-base w-[201px] border-2  border-solid text-white py-[15px]'>
							Learn More
						</button>
					</div>
					<div className='flex flex-col flex-1 gap-3 items-center'>
						<Image
							src={'/home/product-dev.png'}
							alt='illustration'
							width={507}
							height={340}
						/>
						<div>
							<p className='text-xl text-white'>
								We explore our client’s business ideas to build scalable and
								future-ready products that are generally acceptable and
								accessible in the global market.
							</p>
							{/* <p className="text-sm text-white">
                      products that are generally acceptable and accessible in the global market.
                      </p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductEng;
