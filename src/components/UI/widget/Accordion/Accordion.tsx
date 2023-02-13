import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../button/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqArray } from '../../../sections/homePage/ProductEng';

export const AppAccordion = ({
	title,
	content,
	imgSrc,
	width,
	height,
	panel,
}: {
	title?: string;
	content?: string;
	imgSrc?: string;
	width?: number;
	height?: number;
	panel?: { [x: string]: any };
}) => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<>
			{faqArray.map((item) => (
				<div key={item.key}>
					<Accordion
						expanded={expanded === item.panel?.title}
						onChange={handleChange(item.panel?.title)}
						sx={{
							backgroundColor: '#1FB0FF',
							outline: 'none',
							boxShadow: 'none',
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={item.panel?.controls}
							id={item.panel?.id}
						>
							<div className='flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-2xl font-bold text-white focus:outline-none '>
								<span>{item.title}</span>
								{/* <div className='text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-80'>
								Investments
							</div> */}
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<div className='flex flex-col flex-1 gap-3 items-start'>
								<Image
									src={'/images/prodDev.png'}
									alt='illustration'
									width={607}
									height={447}
								/>
								<div>
									<p className='text-xs text-white'>{item.content}</p>
								</div>
								<Button
									text='Learn More'
									style='border-2 border-white hover:bg-white w-[130px] mt-2 text-sm py-2 hover:text-blue-400'
								/>
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
			))}
			{/* <Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
				sx={{ backgroundColor: '#1FB0FF', outline: 'none', boxShadow: 'none' }}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={panel?.controls}
					id={panel?.id}
				>
					<div className='flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-2xl font-bold text-white focus:outline-none '>
						<span>Product Development</span>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className='flex flex-col flex-1 gap-3 items-start'>
						<Image
							src={'/images/prodDev.png'}
							alt='illustration'
							width={607}
							height={447}
						/>
						<div>
							<p className='text-xs text-white'>{content}</p>
						</div>
						<Button
							text='Learn More'
							style='border-2 border-white hover:bg-white w-[130px] mt-2 text-sm py-2 hover:text-blue-400'
						/>
					</div>
				</AccordionDetails>
			</Accordion> */}
		</>
	);
};

// export default function Accordion({
// 	title,
// 	content,
// 	imgSrc,
// 	width,
// 	height,
// }: {
// 	title: string;
// 	content: string;
// 	imgSrc: string;
// 	width: number;
// 	height: number;
// }) {
// 	return (
// 		<div className='w-full pb-3'>
// 			<div className='w-full max-w-md rounded-2xl'>
// 				<Disclosure>
// 					{({ open }) => (
// 						<>
// 							<Disclosure.Button className='flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-2xl font-bold text-white focus:outline-none '>
// 								<span>{title}</span>
// 								{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
// 							</Disclosure.Button>
// 							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-blue_05'>
// 								<div className='flex flex-col flex-1 gap-3 items-start'>
// 									<Image
// 										src={imgSrc}
// 										alt='illustration'
// 										width={width}
// 										height={height}
// 									/>
// 									<div>
// 										<p className='text-xs text-white'>{content}</p>
// 									</div>
// 									<Button
// 										text='Learn More'
// 										style='border-2 border-white hover:bg-white w-[130px] mt-2 text-sm py-2 hover:text-blue-400'
// 									/>
// 								</div>
// 							</Disclosure.Panel>
// 						</>
// 					)}
// 				</Disclosure>
// 			</div>
// 		</div>
// 	);
// }
