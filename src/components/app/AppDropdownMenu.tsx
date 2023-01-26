import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { Flex, HamburgerMenu } from '../common';
import { Transition } from '@headlessui/react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const DROPDOWN_MENU_DATA = [
  {
    text: 'PRODUCTS',
    url: '/products',
  },
  {
    text: 'SERVICES',
    url: '/services',
  },
  {
    text: 'CASE STUDY',
    url: '/case-study',
  },
  {
    text: 'ABOUT US',
    url: '/about',
  },
  {
    text: 'BLOG',
    url: '/blog',
  },
  {
    text: 'OPEN SOURCE',
    url: '/open-source',
  },
];

interface Props {
  isOpen: boolean;
  setOpen: Function;
}

export const AppDropdownMenu = ({ isOpen, setOpen }: Props) => {
  const mapSidebarNav = (nav: { url: string; text: string }) => {
    return (
      <li onClick={() => setOpen(!isOpen)} key={nav.text}>
        <Link
          className="text-white font-semibold text-2xl md:text-4xl xl:text-5xl hover:underline"
          href={nav.url}
        >
          {nav.text}{' '}
        </Link>
      </li>
    );
  };

  return (
    <div
      className="bg-dark-blue z-50"
      // style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="container mx-auto">
        <div
          className={'bg-dark-blue'}
          // style={{
          // 	backdropFilter: colorChange ? 'rgb(0 0 0 / 10%) 0px 1px 2px' : '',
          // }}
        >
          <div className="2xl:h-[114px] h-[80px] container mx-auto flex w-full px-4 xl:px-[114px]">
            <div className={clsx('w-full flex', { open })}>
              <Flex
                gap="10px"
                justify="space-between"
                align="center"
                width="100%"
              >
                <Link href="/">
                  {/* {isOpen ? (
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
									)} */}
                  <Image
                    alt="intrapair"
                    src="/images/logo-white.png"
                    width={130}
                    height={73}
                  />
                </Link>
                <HamburgerMenu
                  isOpen={isOpen}
                  onClick={() => {
                    // console.log(!open);
                    setOpen(!isOpen);
                  }}
                />
              </Flex>
            </div>
          </div>
        </div>
        <nav className="dropdown-menu h-[calc(100vh-80px)] 2xl:h-[calc(100vh-114px)] relative">
          <div className="absolute sm:bottom-[64px] bottom-[66px] left-[15px] md:left-[45px]">
            <div className="flex md:flex-col justify-between gap-6 items-center">
              <Link
                href="https://twitter.com/intrapairhq/"
                className="text-white  hover:text-blue01"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://instagram.com/intrapairhq/"
                className="text-white  hover:text-blue01"
              >
                <RiInstagramFill size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/intrapair/"
                className="text-white  hover:text-blue01"
              >
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
          <div className="px-4 pt-[50px] md:pt-[190px] lg:pt-[100px] 2xl:pt-[270px] pb-[70px] sm:pb-[140px] md:px-[120px] xl:px-[216px]">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-[50px] ">
              <ul className="flex flex-col gap-y-2 md:gap-y-[50px] xl:gap-y-[30px]">
                {DROPDOWN_MENU_DATA.map(mapSidebarNav)}
              </ul>
              <Flex direction="column" gap="5px">
                <p className="text-white text-xl font-milli font-semibold">
                  GET IN TOUCH
                </p>
                <Link
                  href="tel:+2349025539348"
                  className="text-white text-base md:text-2xl relative w-fit inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
                >
                  +234 902 5539 348
                </Link>
                <Link
                  href="mailto:hello@intrapair.com"
                  className="text-white text-base md:text-2xl w-fit relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
                >
                  hello@intrapair.com
                </Link>
                <Link
                  onClick={() => setOpen(isOpen)}
                  href="/contact-us"
                  className="text-white  text-base md:text-2xl w-fit relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
                >
                  Contact Us
                </Link>
              </Flex>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AppDropdownMenu;
