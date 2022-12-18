import Image from 'next/image';
import React from 'react';

const Product = () => {
	return (
		<div className='flex'>
			<Image
				src={'/images/qualityProd.png'}
				alt=''
				width={591}
				height={440}
				className='flex-1 bg-orange-100'
			/>
			<div className='flex flex-1 flex-col items-center justify-center'>
				<div className='ml-9'>
					<h2 className='font-semibold max-w-[551px] xl:leading-[60px] text-5xl text-secondaryBlue_05 font-encode'>
						Quality Product Keeps You in Business
					</h2>
					<p className='font-encode max-w-[488px] mt-8 text-grey_05'>
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
