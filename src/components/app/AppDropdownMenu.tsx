import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Flex } from 'src/components/common'
import Image from 'next/image'

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
]

interface Props {
  isOpen: boolean
}

export const AppDropdownMenu = ({ isOpen }: Props) => {
  const mapSidebarNav = (nav: { url: string; text: string }) => {
    return (
      <li key={nav.text}>
        <Link className="text-white font-semibold text-xl hover:underline" href={nav.url}>
          {nav.text}{' '}
        </Link>
      </li>
    )
  }

  return (
    <div className="bg-dark-blue  " style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="container m-auto ">
        <nav className="dropdown-menu relative">
          <div className="absolute sm:bottom-[64px] bottom-[20px] left-[15px]">
            <Flex justify="space-between" align="center" gap="1.5rem" direction="column">
              <Link href="#" className="text-white  hover:underline">
                <Image alt="twitter" src="/footer/twitter.svg" width={13} height={13} />
              </Link>
              <Link href="#" className="text-white  hover:underline">
                <Image alt="instagram" src="/footer/instagram.svg" width={13} height={13} />
              </Link>
              <Link href="#" className="text-white  hover:underline">
                <Image alt="linkedin" src="/footer/linkedin.svg" width={13} height={13} />
              </Link>
            </Flex>
          </div>
          <div className=" px-[40px] pt-[60px] pb-[70px] sm:pb-[140px] md:px-[70px]">
            <div className="flex justify-between items-center flex-wrap gap-5 relative">
              <ul className="flex flex-col gap-y-2">{DROPDOWN_MENU_DATA.map(mapSidebarNav)}</ul>
              <Flex direction="column" gap="5px">
                <p className="text-white text-xs font-semibold">GET IN TOUCH</p>
                <Link href="tel:+2349025539348" className="text-white text-sm underline">
                  +234 902 5539 348
                </Link>
                <Link href="mailto:hello@intrapair.com" className="text-white underline text-sm">
                  hello@intrapair.com
                </Link>
                <Link href="/contact-us" className="text-white underline text-sm">
                  Contact Us
                </Link>
              </Flex>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AppDropdownMenu
