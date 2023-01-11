import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { Flex } from '../common';
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
}

export const AppDropdownMenu = ({ isOpen }: Props) => {
  const mapSidebarNav = (nav: { url: string; text: string }) => {
    return (
      <li key={nav.text}>
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
      className="bg-dark-blue  "
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="container m-auto ">
        <nav className="dropdown-menu h-[93vh] relative">
          <div className="absolute sm:bottom-[64px] bottom-[66px] left-[45px]">
            <div className="flex md:flex-col justify-between gap-6 items-center">
              <Link href="#" className="text-white  hover:text-blue01">
                {/* <Image
                  alt="twitter"
                  src="/footer/twitter.svg"
                  width={24}
                  height={20}
                /> */}
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-white  hover:text-blue01">
                {/* <Image
                  alt="instagram"
                  src="/footer/instagram.svg"
                  width={24}
                  height={20}
                /> */}

                <RiInstagramFill size={24} />
              </Link>
              <Link href="#" className="text-white  hover:text-blue01">
                {/* <Image
                  alt="linkedin"
                  src="/footer/linkedin.svg"
                  width={24}
                  height={20}
                /> */}
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
          <div className="px-4 pt-[50px] md:pt-[190px] lg:pt-[100px] 2xl:pt-[270px] pb-[70px] sm:pb-[140px] md:px-[120px] xl:px-[216px]">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-[50px] ">
              <ul className="flex flex-col gap-y-2 md:gap-y-[50px] xl:gap-y-[30px]">
                {DROPDOWN_MENU_DATA.map(mapSidebarNav)}
              </ul>
              <Flex direction="column" gap="8px">
                <p className="text-white text-xl font-milli font-semibold">
                  GET IN TOUCH
                </p>

                <Link
                  href="tel:+2349025539348"
                  className="text-white text-base md:text-2xl relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
                >
                  +234 902 5539 348
                </Link>

                <Link
                  href="mailto:hello@intrapair.com"
                  className="text-white text-base md:text-2xl relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
                >
                  hello@intrapair.com
                </Link>
                <Link
                  href="/contact-us"
                  className="text-white  text-base md:text-2xl relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
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
