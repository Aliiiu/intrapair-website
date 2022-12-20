import Image from 'next/image';
import React from 'react';

const Product = () => {
	return (
		<div className='container m-auto px-[114px]'>
			<div className='flex flex-col gap-y-[60px] m-auto '>
				<div className='flex flex-col gap-3 w-[fit-content] max-w-[100%]'>
					<h3 className='font-bold text-dark-blue text-5xl border-b-2 w-[fit-content] pb-5 pr-9  border-solid border-dark-blue'>
						Our Products
					</h3>
					{/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
					<p className='text-black-01 text-base'>
						Our products tackle emerging challenges across different sectors in
						Africa.
					</p>
				</div>
				<div className='flex'>
					<div className='md:flex block flex-wrap  justify-between w-full items-center gap-[100px] m-auto'>
						<div
							className='flex flex-1 flex-col gap-5 mlg:mb-0 mb-[60px] w-[455px] max-w-[100%] h-[455px] relative'
							style={{
								background:
									' linear-gradient(90deg, #0095E7 3.7%, #27B3FF 93.96%)',
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<div
								className='absolute top-[50%] left-[50%]'
								style={{ transform: 'translate(-50%, -50%)' }}
							>
								<Image
									src={'/home/flip.png'}
									width={109}
									height={148}
									alt='flip'
								/>
							</div>
						</div>
						<div className='flex flex-1 flex-col gap-5'>
							<p className='text-5xl font-bold text-black01'>Flip</p>
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
