import React from 'react';

const Challenges = () => {
	return (
		<div className='flex flex-col md:flex-row gap-10 xl:gap-0'>
			<div className='flex flex-1 flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 font-semibold'>
						The Challenge
					</h3>
					<p className=' text-sm xl:text-xl max-w-lg'>
						One of the major problems encountered in building this project was
						getting enough information on the kind of services offered by
						artisans. We further encountered a minor setback in the
						implementation of a live geographical location. The architecture of
						the app was also complex because we needed to build the
						infrastructures for both user&apos;s app and the artisan&apos;s app.
						Finally, we had continuous trouble connecting in real-time, the
						activities on the user app and the activities on the artisan app.
					</p>
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 font-semibold'>The Solution</h3>
					<p className=' text-sm xl:text-xl max-w-lg'>
						We built a platform that enabled real-time communication between
						artisans and users. Users could book requests for a service and the
						artisans accept the booking requests instantly. We implemented the
						geographical location feature to allow users to locate and keep
						track of trusted and proficient artisans around their vicinity. We
						however implemented a verified wallet feature that guarantees a safe
						and secured payment method ensuring smooth transactions between
						users and artisans.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
