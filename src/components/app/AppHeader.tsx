import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Flex, HamburgerMenu } from '../common';

interface Props {
	isOpen: boolean;
	toggleSidebar: () => any;
}
export const AppHeader = ({ isOpen, toggleSidebar }: Props) => {
	const [colorChange, setColorchange] = useState(false);
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

	return (
		<div
			className={clsx(
				{ 'bg-dark-blue': isOpen },
				{ ' bg-white w-full container mx-auto': !isOpen }
			)}
			style={{ boxShadow: colorChange ? 'rgb(0 0 0 / 10%) 0px 1px 2px' : '' }}
		>
			<div className='h-[70px] flex w-full px-4 xl:px-[114px]'>
				<header className={clsx('w-full flex', { isOpen })}>
					<Flex gap='10px' justify='space-between' align='center' width='100%'>
						<Link href='/'>
							{isOpen ? (
								<Image
									alt='intrapair'
									src='/header/logo-white.svg'
									width={130}
									height={73}
								/>
							) : (
								<Image
									alt='intrapair'
									src='/header/logo-black.svg'
									width={130}
									height={73}
								/>
							)}
						</Link>
						<HamburgerMenu isOpen={isOpen} onClick={toggleSidebar} />
					</Flex>
				</header>
			</div>
		</div>
	);
};

export default AppHeader;
