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
        { ' bg-[#ffffff33] backdrop-blur-lg': !isOpen }
      )}
      // style={{
      // 	backdropFilter: colorChange ? 'rgb(0 0 0 / 10%) 0px 1px 2px' : '',
      // }}
    >
      <div className="h-[7vh] container lg:py-8 mx-auto flex w-full px-4 xl:px-[114px]">
        <header className={clsx('w-full flex', { isOpen })}>
          <Flex gap="10px" justify="space-between" align="center" width="100%">
            <Link href="/">
              {isOpen ? (
                <Image
                  alt="intrapair"
                  src="/images/logo-white.png"
                  width={130}
                  height={73}
                />
              ) : (
                <Image
                  alt="intrapair-new"
                  src="/images/logo-dark.png"
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
