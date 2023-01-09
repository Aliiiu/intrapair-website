import Image from 'next/image';
import React from 'react';

const Product = () => {
	return (
		<div className='flex flex-col-reverse gap-10 md:gap-0 md:flex-row'>
			<div className='relative md:flex-1 w-full md:w-[500px] h-[350px] md:h-[400px] 2xl:h-[500px]'>
				<Image src={'/images/qualityProd.png'} alt='' fill />
			</div>
			<div className='flex md:flex-1 flex-col justify-center'>
				<div className='w-full'>
					<div className='border-solid border-b-[0.5px] w-[80%] xl:w-full 2xl:w-[90%] xl:pr-0 pb-3 xl:pb-5 border-dark-blue'>
						<h2 className='font-semibold text-3xl xl:text-[44px] 2xl:text-5xl text-secondaryBlue_05 font-encode'>
							Quality Product Keeps
						</h2>
						<h2 className='font-semibold text-3xl mt-1 xl:mt-3 xl:text-[44px] 2xl:text-5xl text-secondaryBlue_05 font-encode'>
							You in Business
						</h2>
					</div>
					<p className='font-encode max-w-[488px] mt-4 lg:mt-8 text-grey_05'>
						We are a remarkable team of ardent creators, imaginative designers,
						experienced developers, and dedicated project managers who put in
						collective efforts and innovative ideas to deliver reliable and
						delightful products.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
