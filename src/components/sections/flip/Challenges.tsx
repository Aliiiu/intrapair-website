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
						We discovered how much time is expended in curating examination
						questions & printing question papers, arranging supplies, and
						evaluating scripts. We thought of how to make these processes
						easier, faster, cost-effective, and more enjoyable.
					</p>
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 font-semibold'>The Solution</h3>
					<p className=' text-sm xl:text-xl max-w-lg'>
						Our skilled and resourceful team got to work on building the
						application software that not only helps to conduct assessments but
						also has an automatic grading feature inherent for schools. We
						implemented a feature that allows participants from different
						locations to remotely take monitored assessments on any electronic
						device that fits the configuration of the application software.
						Conclusively, building the FLIP project was demanding but geared our
						team to tackle the challenges of setting up assessments.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
