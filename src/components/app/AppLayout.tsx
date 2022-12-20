import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppHeader, AppDropdownMenu, Footer } from 'src/components/app';
import { sidebar, toggleSidebar, closeSidebar } from 'src/store/sidebar';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	const { dropDownMenuIsOpen } = sidebar.use();
	const router = useRouter();
	useEffect(() => closeSidebar(), [router]);

	return (
		<div className=''>
			<div className='fixed z-10 w-full top-0 bg-white'>
				<AppHeader isOpen={dropDownMenuIsOpen} toggleSidebar={toggleSidebar} />
				<AppDropdownMenu isOpen={dropDownMenuIsOpen} />
			</div>

			<main className='mt-[80px]'>{children}</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
