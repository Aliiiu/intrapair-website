import React from 'react';
import {
	HiOutlineArrowLongLeft,
	HiOutlineArrowLongRight,
} from 'react-icons/hi2';

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
						Stitchvine is a power-packed tool to help upscale fashion businesses
						- organize customers’ clothing details, document orders, set a
						reminder & fix a working timeline, create customized invoices &
						receipts and manage fabrics catalogs.
					</p>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Platforms
					</h3>
					<p className='text-white text-sm xl:text-xl'>Android only</p>
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className=' text-secondaryBlue_05 text-xs xl:text-base font-semibold'>
						Target Users
					</h3>
					<p className='text-white  text-sm xl:text-xl'>
						Fashion designers, illustrators, schools, vendors, and other fashion
						enthusiasts.
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
							'User Web App',
							'Mobile App',
						]}
					/>
					<a href='' className='font-semibold text-secondaryBlue_03'>
						Visit Live
						<HiOutlineArrowLongRight className='text-secondaryBlue_05 text-4xl' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Overview;
