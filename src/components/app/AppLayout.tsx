import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { sidebar, closeSidebar, toggleSidebar } from '../../store/sidebar';
import AppDropdownMenu from './AppDropdownMenu';
import AppHeader from './AppHeader';
import Footer from './Footer';
import { Transition } from '@headlessui/react';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	const { dropDownMenuIsOpen } = sidebar.use();
	const router = useRouter();
	useEffect(() => closeSidebar(), [router]);

	return (
		<div
		// show={true}
		// enter='transition ease-in-out duration-700 delay-700 transform'
		// enterFrom='-translate-x-full'
		// enterTo='translate-x-0'
		// leave='transition ease-in-out duration-700 transform'
		// leaveFrom='translate-x-0'
		// leaveTo='-translate-x-full'
		>
			<div className='fixed z-20 w-full top-0'>
				<AppHeader isOpen={dropDownMenuIsOpen} toggleSidebar={toggleSidebar} />
				{/* <AppDropdownMenu isOpen={dropDownMenuIsOpen} /> */}
			</div>

			<main className='mt-[80px]'>{children}</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
