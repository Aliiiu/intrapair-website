import Image from 'next/image';
import React from 'react';

const Product = () => {
	return (
		<div className='flex flex-col-reverse gap-10 md:gap-0 md:flex-row'>
			{/* <Image
				src={'/images/qualityProd.png'}
				alt=''
				width={591}
				height={440}
				className='flex-1'
			/> */}
			<div className='relative md:flex-1 w-full md:w-[600px] h-[350px] md:h-[400px]'>
				<Image src={'/images/qualityProd.png'} alt='' fill />
			</div>
			<div className='flex md:flex-1 flex-col items-center justify-center'>
				<div className='lg:ml-9'>
					<h2 className='font-semibold max-w-[551px] xl:leading-[60px] text-3xl xl:text-5xl text-secondaryBlue_05 font-encode'>
						Quality Product Keeps You in Business
					</h2>
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
