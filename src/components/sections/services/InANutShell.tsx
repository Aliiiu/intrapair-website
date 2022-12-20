import Image from 'next/image';
import React from 'react';

const InANutShell = () => {
	return (
		<div className='flex max-h-[626px] overflow-y-hidden'>
			<div className='flex-1 px-[114px] flex flex-col justify-center'>
				<div className='flex px-14 flex-col gap-6'>
					<h3 className='text-secondaryBlue_05 font-semibold text-4xl'>
						Intrapair In A Nutshell
					</h3>
					<p className='max-w-[400px]'>
						21st-century organizations are fully aware of the significance of
						building quality and reliable digital solutions. At Intrapair, we
						provide professional services to solve your business needs.
					</p>
				</div>
			</div>
			<div className='flex-1 grid gap-2 grid-cols-3 '>
				<div className='grid gap-4 grid-rows-3'>
					<div className='overflow-hidden rounded-2xl w-[210px] h-[240px] relative'>
						<Image src={'/images/nutShell1.png'} alt='' fill />
					</div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					{/* <div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div> */}
				</div>
				<div className='grid gap-4 grid-rows-3'>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='overflow-hidden relative rounded-2xl w-[210px] h-[240px]'>
						<Image src={'/images/nutShell2.png'} alt='' fill />
					</div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					{/* <div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div> */}
				</div>
				<div className='grid gap-4 grid-rows-3'>
					<div className='overflow-hidden relative rounded-2xl w-[210px] h-[240px]'>
						<Image src={'/images/nutShell3.png'} alt='' fill />
					</div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					<div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div>
					{/* <div className='bg-[#B2DAFF] rounded-2xl w-[210px] h-[240px]'></div> */}
				</div>
			</div>
		</div>
	);
};

export default InANutShell;
