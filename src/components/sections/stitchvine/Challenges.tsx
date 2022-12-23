import React from 'react';

const Challenges = () => {
	return (
		<div className='flex flex-col md:flex-row gap-10 xl:gap-0'>
			<div className='flex flex-1 flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 font-semibold'>
						The Challenge
					</h3>
					<p className='text-sm xl:text-xl max-w-lg'>
						In the process of building a working app that would serve as a
						relief to fashion designers, we needed to understand what their
						relevant problems were and how best to solve them. After conducting
						extensive research, we realized that measurements and fabric mixups,
						disorderly working environment, and mismanagement of time were the
						major problems faced. We had huge obstacles with the app
						architecture to obtain the desired results.
					</p>
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 font-semibold'>The Solution</h3>
					<p className='text-sm xl:text-xl max-w-lg'>
						We put together a team of competent designers and committed
						developers for the project. We started by building a platform that
						enabled fashion designers to automate all basic problems related to
						the art of fashion designing. We implemented a fabric catalog to
						prevent fabric mix-up and a fashion portfolio that would help users
						create a good impression for customers. We also included a feature
						that would help keep track of time and also enable users to deliver
						their customer&apos;s fabrics on time.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
