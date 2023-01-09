import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const CaseStudy: FC<{ showTitle: boolean }> = ({ showTitle }) => {
	return (
		<div className='container mx-auto px-4 xl:px-[114px] '>
			<div className='flex flex-col gap-y-9'>
				{showTitle && (
					<div className='flex flex-col gap-3 w-[fit-content] max-w-[100%]'>
						<h3 className='font-bold text-dark-blue text-3xl xl:text-5xl border-b-[0.5px] w-[fit-content] pb-2 xl:pb-5 pr-4 xl:pr-9  border-solid border-dark-blue'>
							Case Studies
						</h3>
						{/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
						<p className='text-black-01 text-base'>
							Here are some of the projects we&apos;ve built for our clients.
						</p>
					</div>
				)}
				<div className='flex'>
					<div className='flex md:flex-row flex-col justify-between gap-5 xl:gap-10 w-full'>
						<Link
							href={'/stitchvine'}
							className='flex flex-1 flex-col gap-5  mlg:mb-0 mb-[60px]'
						>
							<div className='h-[303px] xs:h-[430px] md:h-[480px] 2xl:h-[580px] relative'>
								<Image src={'/images/case1.png'} alt='' fill />
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex items-center gap-3'>
									<p className='text-black01 font-semibold text-sm	sm:text-xl	'>
										Stitchvine
									</p>
									<p className='bg-black01 w-[19px] xl:w-[29px] h-[2px]'></p>
									<p className='text-black01 font-semibold text-sm md:text-base	lg:text-xl'>
										Fashion Made Easy
									</p>
								</div>
								<p className='text-base sm:text-sm text-[#666666]'>
									Branding & Identity, Websites & Digital Platforms
								</p>
							</div>
						</Link>
						<Link href={'/anyworks'} className='flex flex-1 flex-col gap-5'>
							<div className='h-[303px] xs:h-[430px] md:h-[480px] 2xl:h-[580px] relative'>
								<Image src={'/images/case2.png'} alt='' fill />
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex items-center gap-3'>
									<p className='text-black01 font-semibold text-sm	sm:text-xl	'>
										Anyworks
									</p>
									<p className='bg-black01 w-[19px] xl:w-[29px] h-[2px]'></p>
									<p className='text-black01 font-semibold	 text-sm md:text-base	lg:text-xl'>
										Service At Your Doorstep
									</p>
								</div>
								<p className='text-base sm:text-sm text-[#666666]'>
									Branding & Identity, Websites & Digital Platforms
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudy;
