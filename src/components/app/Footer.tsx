import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Flex } from '../common';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export const Footer = () => {
  return (
    <div className="bg-blue02">
      <div className="container m-auto py-[81px] lg:py-[140px] px-4 xl:px-[114px]">
        <Flex justify="space-between" wrap="wrap" gap="3rem">
          <Flex direction="column" justify="space-between">
            <Image
              alt="intrapair"
              src="/images/logo.png"
              width={150}
              height={63}
            />
            <p className="text-white text-sm">
              We’ve Got Your PRODUCTS Figured Out.
            </p>
            <div>
              <p className="text-white text-sm">
                Build quality products from ideas to actualization
              </p>
              <p className="text-white text-sm">
                with our excellent engineering professionals.
              </p>
            </div>
          </Flex>
          <Flex gap="3rem">
            <Flex direction="column" justify="space-between">
              <Link href="/#products" className="text-white  hover:underline">
                Products{' '}
              </Link>

              <Link href="/services" className="text-white  hover:underline">
                Services{' '}
              </Link>

              <Link href="/case-study" className="text-white  hover:underline">
                Case Study{' '}
              </Link>
            </Flex>
            <Flex direction="column" justify="space-between">
              <Link href="/about" className="text-white hover:underline">
                About Us{' '}
              </Link>

              <Link href="/blog" className="text-white  hover:underline">
                Blog{' '}
              </Link>

              <Link
                href="/#open-source"
                className="text-white  hover:underline"
              >
                Open Source{' '}
              </Link>
            </Flex>
          </Flex>
          <Flex direction="column" justify="space-between">
            <p className="text-white font-semibold">GET IN TOUCH</p>
            <Flex justify="space-between" align="center">
              <Link
                href="#"
                className="text-white  hover:underline hover:text-blue_04"
              >
                {/* <Image
                  alt="twitter"
                  src="/footer/twitter.svg"
                  width={20}
                  height={20}
                /> */}
                <FaTwitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-white  hover:underline hover:text-blue_04"
              >
                {/* <Image
                  alt="instagram"
                  src="/footer/instagram.svg"
                  width={20}
                  height={20}
                /> */}
                <RiInstagramFill size={24} />
              </Link>
              <Link
                href="#"
                className="text-white  hover:underline hover:text-blue_04"
              >
                {/* <Image
                  alt="linkedin"
                  src="/footer/linkedin.svg"
                  width={20}
                  height={20}
                /> */}
                <FaLinkedinIn size={24} />
              </Link>
            </Flex>
            <Link
              href="tel:+2349025539348"
              className="text-white relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0 "
            >
              +234 902 5539 348
            </Link>
            <Link
              href="mailto:hello@intrapair.com"
              className="text-white relative inline-block after:block after:scale-x-[1] after:content-[''] after:origin-[100%_0%] after:transform after:duration-500 after:ease-in-out after:hover:scale-x-0 after:hover:origin-[0%_100%] after:border-b-[1px] after:border-white after:pb-0"
            >
              hello@intrapair.com
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
