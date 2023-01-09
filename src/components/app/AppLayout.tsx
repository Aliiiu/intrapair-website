import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { sidebar, closeSidebar, toggleSidebar } from '../../store/sidebar';
import AppDropdownMenu from './AppDropdownMenu';
import AppHeader from './AppHeader';
import Footer from './Footer';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	const { dropDownMenuIsOpen } = sidebar.use();
	const router = useRouter();
	useEffect(() => closeSidebar(), [router]);

	return (
		<div className=''>
			<div className='fixed z-20 w-full top-0'>
				<AppHeader isOpen={dropDownMenuIsOpen} toggleSidebar={toggleSidebar} />
				<AppDropdownMenu isOpen={dropDownMenuIsOpen} />
			</div>

			<main className='mt-[80px]'>{children}</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
