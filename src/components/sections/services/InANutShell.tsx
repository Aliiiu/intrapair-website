import Image from 'next/image';
import React from 'react';

const InANutShell = () => {
	return (
		<div className='flex flex-col md:flex-row px-4 justify-between gap-10 lg:gap-0 md:px-4 xl:px-0 py-20 md:py-0'>
			<div className=' xl:px-[114px] flex flex-col justify-center'>
				<div className='flex xl:px-0 flex-col gap-6'>
					<h3 className='text-secondaryBlue_05 font-semibold text-3xl xl:text-4xl'>
						Intrapair In A Nutshell
					</h3>
					<p className='max-w-[400px]'>
						21st-century organizations are fully aware of the significance of
						building quality and reliable digital solutions. At Intrapair, we
						provide professional services to solve your business needs.
					</p>
				</div>
			</div>
			<div className='relative hidden md:block h-[400px] lg:h-[480px] xl:h-[629px] w-[500px] xl:w-[694px]'>
				<Image src={'/images/inaNutshell2.png'} alt='' fill />
			</div>
			<div className='flex-1 md:hidden block'>
				<Image
					src={'/images/inAnutshell.png'}
					alt=''
					width={342}
					height={356}
				/>
			</div>
		</div>
	);
};

export default InANutShell;
