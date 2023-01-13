import Image from 'next/image';
import React from 'react';
import Button from '../../UI/widget/button/Button';

const OpenSource = () => {
	return (
		<div className='container m-auto w-ful px-4 xl:px-[114px]'>
			<div className='flex flex-col gap-y-9'>
				<div className='flex'>
					<div className='msm:flex block flex-wrap  gap-[146px] justify-between items-center w-full'>
						<div className='flex flex-col flex-1 gap-8'>
							<div className='flex flex-col gap-3'>
								<div className='pb-2 xl:pb-5 pr-9 border-b-[0.5px]  border-solid border-white'>
									<h3 className='font-bold text-white max-w-[320px] text-3xl xl:text-5xl'>
										Open Source is Art
									</h3>
								</div>
								{/* <div className="bg-white w-full h-[1px]"></div> */}

								<p className='text-white text-base'>
									We have deeply invested in the open source community to allow
									tech talents all over the world to collaborate and contribute
									to open source projects. Our open-source software can be
									freely accessed by any tech enthusiasts willing to play a role
									in transforming the digital space and enhancing the
									performance of digital products
								</p>
							</div>
							{/* <button className='rounded-[41px]  text-sm w-[206px] bg-white text-blue02 py-[15px] '>
								Leave A Footprint
							</button> */}
							<Button
								text='Leave A Footprint'
								style='bg-white text-blue02 hover:bg-transparent hover:border hover:text-white'
							/>
						</div>
						<div className='flex flex-1 '>
							<Image
								src={'/home/open-art.png'}
								width={447}
								height={447}
								alt='sprial'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OpenSource;
