import { Disclosure } from '@headlessui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Accordion({
	title,
	content,
}: {
	title: string;
	content: string;
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
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm bg-white text-blue_05'>
								{content}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
