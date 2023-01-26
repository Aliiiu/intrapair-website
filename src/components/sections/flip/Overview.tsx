import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const ListComponent = (props: any) => (
	<>
		<div className=''>
			<ul>
				<li className='text-black font-semibold text-base mb-1 lg:mb-2'>
					{props.name}
				</li>
				{props.items.map((content: any, index: any) => (
					<li key={content}>
						<span className='font-light text-white text-xs xl:text-sm'>
							{content}
						</span>
					</li>
				))}
			</ul>
		</div>
	</>
);

const Overview = () => {
	return (
		<div className='flex gap-2 xl:gap-0'>
			<div className='flex flex-1 flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Overview
					</h3>
					<p className='text-white text-sm xl:text-xl'>
						The idea to build FLIP was to eradicate the stress of using pen and
						paper in conducting assessments for schools and organizations.
					</p>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Platforms
					</h3>
					<p className='text-white text-sm xl:text-xl'>Web Application</p>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Target Users
					</h3>
					<p className='text-white text-sm xl:text-xl'>
						Schools and Organizations.
					</p>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Stack/Technology Used
					</h3>
					<p className='text-white text-sm xl:text-xl'>
						Javascript, MongoDB , VueJs
					</p>
				</div>
			</div>
			<div className='flex flex-col flex-1 items-center'>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Deliverables
					</h3>
					<ListComponent
						items={[
							'Branding',
							'Website',
							'Admin Web App',
							'Student Web App',
							'Result Checker WebApp',
						]}
					/>
					<div className='flex gap-4 items-center'>
						<Link href='https://www.flipcbt.com/' passHref legacyBehavior>
							<a target={'_blank'} rel='noopener noreferrer'>
								<span className='font-semibold text-sm md:text-base text-secondaryBlue_03'>
									Visit Live
								</span>
								<HiOutlineArrowLongRight className='text-secondaryBlue_05 text-3xl md:text-4xl' />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
