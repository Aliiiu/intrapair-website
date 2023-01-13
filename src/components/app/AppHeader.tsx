import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Flex, HamburgerMenu } from '../common';
import { Transition } from '@headlessui/react';
import AppDropdownMenu from './AppDropdownMenu';

interface Props {
	isOpen: boolean;
	toggleSidebar: () => any;
}
export const AppHeader = ({ isOpen, toggleSidebar }: Props) => {
	const [colorChange, setColorchange] = useState(false);
	const [open, setOpen] = useState(false);
	if (typeof window !== 'undefined') {
		const changeNavbarColor = () => {
			if (window.scrollY >= 80) {
				setColorchange(true);
			} else {
				setColorchange(false);
			}
		};
		window.addEventListener('scroll', changeNavbarColor);
	}

	useEffect(() => {
		console.log(colorChange);
	}, [colorChange]);

	return (
		<header>
			<Transition show={open}>
				{/* <Transition.Child
					enter='transition ease-in-out duration-500 transform'
					enterFrom='-translate-x-full'
					enterTo='translate-x-0'
					leave='transition ease-in-out duration-500 delay-200 transform'
					leaveFrom='translate-x-0'
					leaveTo='-translate-x-full'
				>
					<div className='top-0 left-0 right-0 bg-red-600 bottom-0 fixed Overlay h-[100vh] overflow-y-scroll'></div>
				</Transition.Child> */}
				<Transition.Child
					enter='transition ease-in-out duration-500 delay transform'
					enterFrom='-translate-x-full'
					enterTo='translate-x-0'
					leave='transition ease-in-out duration-500 transform'
					leaveFrom='translate-x-0'
					leaveTo='-translate-x-full'
				>
					<AppDropdownMenu isOpen={open} setOpen={setOpen} />
				</Transition.Child>
			</Transition>
			<div
				className={`${colorChange ? 'bg-[#ffffff33] backdrop-blur-lg' : ''}`}
			>
				<div className='2xl:h-[114px] h-[80px] xl:h-[100px] container mx-auto flex w-full px-4 xl:px-[114px]'>
					<div className={clsx('w-full flex', { open })}>
						<Flex
							gap='10px'
							justify='space-between'
							align='center'
							width='100%'
						>
							<Link href='/'>
								{open ? (
									<Image
										alt='intrapair'
										src='/images/logo-white.png'
										width={130}
										height={73}
									/>
								) : (
									<Image
										alt='intrapair-new'
										src='/images/logo-dark.png'
										width={130}
										height={73}
									/>
								)}
							</Link>
							<HamburgerMenu
								isOpen={open}
								onClick={() => {
									setOpen(!open);
								}}
							/>
						</Flex>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
