import Image from 'next/image';
import React from 'react';

const Blog = () => {
	return (
		<div className='container px-[114px] m-auto'>
			<div className=' flex flex-col gap-y-[70px] m-auto '>
				<div className='flex flex-col gap-3 w-[fit-content] max-w-[100%]'>
					<h3 className='font-bold text-dark-blue text-5xl'>Our Blog</h3>
					<div className='bg-dark-blue w-[50%] h-[1px]'></div>
					<p className='text-black-01 text-base'>
						Check out our unique stories from digital experience to enterprise
						solutions.
					</p>
				</div>
				<div className='flex'>
					<div className='xl:flex-nowrap flex-wrap flex  gap-[36px] justify-between w-full'>
						<div
							className='flex flex-col gap-1 max-w-[300px]  items-center'
							style={{
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<div className='w-full'>
								<img src='/blog/blog1.png' alt='' />
							</div>
							<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
								<p className='black01 text-base w-full sm:w-[80%]'>
									Lorem ipsum , consectetur adipiscing elit.
								</p>
								<div className='flex justify-between'>
									<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
									<Image
										src={'/common/arrow-right.svg'}
										width={12}
										height={12}
										alt='>'
									/>
								</div>
							</div>
						</div>
						<div
							className='flex flex-col gap-1  max-w-[300px]  items-center'
							style={{
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<div className='w-full'>
								<img src='/blog/blog2.png' alt='' />
							</div>
							<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
								<p className='black01 text-base w-full sm:w-[80%]'>
									Lorem ipsum , consectetur adipiscing elit.
								</p>
								<div className='flex justify-between'>
									<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
									<Image
										src={'/common/arrow-right.svg'}
										width={12}
										height={12}
										alt='>'
									/>
								</div>
							</div>
						</div>
						<div
							className='flex flex-col gap-1   max-w-[300px] items-center'
							style={{
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<div className='w-full'>
								<img src='/blog/blog3.png' alt='' />
							</div>
							<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
								<p className='black01 text-base w-full sm:w-[80%]'>
									Lorem ipsum , consectetur adipiscing elit.
								</p>
								<div className='flex justify-between'>
									<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
									<Image
										src={'/common/arrow-right.svg'}
										width={12}
										height={12}
										alt='>'
									/>
								</div>
							</div>
						</div>
						<div
							className='flex flex-col gap-1  max-w-[300px] items-center'
							style={{
								boxShadow:
									'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
							}}
						>
							<div className='w-full'>
								<img src='/blog/blog1.png' alt='' />
							</div>
							<div className='flex flex-col gap-6 p-5 flex-1 w-full justify-between'>
								<p className='black01 text-base w-full sm:w-[80%]'>
									Lorem ipsum , consectetur adipiscing elit.
								</p>
								<div className='flex justify-between'>
									<p className='text-xs text-dark-blue'>31 Aug, 2022</p>
									<Image
										src={'/common/arrow-right.svg'}
										width={12}
										height={12}
										alt='>'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className='rounded-[41px]  text-sm w-[212px] bg-dark-blue text-white py-[15px] m-auto'>
					Read A Story
				</button>
			</div>
		</div>
	);
};

export default Blog;
