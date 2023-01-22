import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../button/Button';

export default function Accordion({
	title,
	content,
	imgSrc,
	width,
	height,
}: {
	title: string;
	content: string;
	imgSrc: string;
	width: number;
	height: number;
}) {
	return (
		<div className='w-full pb-3'>
			<div className='w-full max-w-md rounded-2xl'>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-2xl font-bold text-white focus:outline-none '>
								<span>{title}</span>
								{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-blue_05'>
								<div className='flex flex-col flex-1 gap-3 items-start'>
									<Image
										src={imgSrc}
										alt='illustration'
										width={width}
										height={height}
									/>
									<div>
										<p className='text-xs text-white'>{content}</p>
									</div>
									<Button
										text='Learn More'
										style='border-2 border-white hover:bg-white w-[130px] mt-2 text-sm py-2 hover:text-blue-400'
									/>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
