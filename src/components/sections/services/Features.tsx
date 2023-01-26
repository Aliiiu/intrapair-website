import { height } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const ListComponent = (props: any) => (
	<>
		<div className='text-left'>
			<ul>
				<li className='text-black font-semibold text-base mb-1 lg:mb-2'>
					{props.name}
				</li>
				{props.items.map((content: any, index: any) => (
					<li key={content}>
						<div className='flex items-center gap-4 mb-4'>
							<hr className='w-4 h-[2px] bg-grey_03' />
							<span className='font-light text-black text-opacity-50 text-sm'>
								{content}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	</>
);

const serviceRendered = [
	{
		id: 1,
		feature: 'Product Development',
		content: `With our team of excellent programmers, all hands are on the
							keyboard. We efficiently write the codes that turn out to be great
							products. The products we build at Intrapair are user-impressive,
							traffic-driven, and scalable across all platforms and devices
							configuration.`,
		img: `/images/prodDev.png`,
		height: 'xl:h-450px',
		subList: [
			'Digital Branding & Strategy',
			'Product Design  & Prototyping',
			'Product Requirement Document',
		],
		subList2: [
			'UX Writing',
			'Mobile App Development',
			'Website & Webapp Development',
		],
	},
	{
		id: 2,
		feature: 'DevOps and Platform Engineering',
		content: `We are versatile with digital solutions that can automate the sequential processes of several organizations’ products, saving time, minimizing cost, and limiting human resources.`,
		img: `/images/devOps.png`,
		height: 'xl:h-502px',
		subList: [
			'CI/CD Pipeline',
			'Site Reliability Engineering',
			'Monitoring and Logging',
		],
		subList2: ['Cloud Deployment', 'Load Balancing'],
	},
	{
		id: 3,
		feature: 'Data Engineering and Analytics',
		content: `Data resources are fundamental to every organization. We are conversant with the technology required to develop a robust infrastructure to accommodate heavy bytes of data that provide useful insights into the growth of businesses.`,
		img: `/images/dataEng.png`,
		height: 'xl:h-390px',
		subList: ['Data Infrastructure', 'Data Warehouse'],
		subList2: ['Data Pipeline', 'Data Consulting'],
	},
	{
		id: 4,
		feature: 'Application Modernization',
		content: `We transform legacy applications into elegant software products to enhance and accelerate business functions.
`,
		img: `/images/appDev.png`,
		height: 'xl:h-475px',
		subList: [
			'UX Writing',
			'Mobile App Development',
			'Website & Webapp Development',
		],
		subList2: ['Product Requirement Document', 'Product Design & Prototyping'],
	},
];

const Features = () => {
	return (
		<div className='flex flex-col gap-10 lg:gap-40'>
			{serviceRendered.slice(0, 3).map((item) => (
				<div
					key={item.id}
					className={`flex flex-col-reverse ${
						item.id % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'
					} gap-12 xl:gap-24`}
				>
					<div
						className={`md:flex-1 w-full h-[300px] ${
							item.id === 3 ? 'xl:h-[300px]' : 'xl:h-[350px]'
						} 2xl:h-[400px] relative`}
					>
						<Image src={item.img} alt='' fill />
					</div>
					<div className='flex md:flex-1 flex-col justify-center'>
						<div className='flex flex-col gap-2 xl:gap-8'>
							<h3 className='font-semibold text-2xl lg:text-3xl xl:text-4xl text-secondaryBlue_05 '>
								{item.feature}
							</h3>
							<p className='text-grey_05'>{item.content}</p>
							<div
								className={`flex flex-col md:flex-row justify-between ${
									item.id === 2 || item.id === 3 ? 'xl:w-[70%]' : 'w-full'
								}`}
							>
								<ListComponent items={item.subList} />
								<ListComponent items={item.subList2} />
							</div>
						</div>
					</div>
				</div>
			))}
			{serviceRendered.slice(3).map((item) => (
				<div
					key={item.id}
					className={`flex flex-col-reverse ${
						item.id % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'
					} gap-12 xl:gap-24`}
				>
					<div
						className={`md:flex-1 w-full h-[300px] lg:h-[400px] xl:h-[475px] 2xl:h-[550px] relative`}
					>
						<Image src={item.img} alt='' fill />
					</div>
					<div className='flex md:flex-1 flex-col justify-center'>
						<div className='flex flex-col gap-2 xl:gap-8'>
							<h3 className='font-semibold text-2xl lg:text-3xl xl:text-4xl text-secondaryBlue_05 '>
								{item.feature}
							</h3>
							<p className='text-grey_05'>{item.content}</p>
							<div
								className={`flex flex-col md:flex-row justify-between xl:w-[90%]`}
							>
								<ListComponent items={item.subList} />
								<ListComponent items={item.subList2} />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Features;
