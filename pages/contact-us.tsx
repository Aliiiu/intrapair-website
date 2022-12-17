/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AppLayout } from 'src/components/app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Intrapair</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <div className=" w-full relative">
          <section className="container m-auto   px-[30px]">
            <div className=" flex items-center  justify-center sm:py-[120px] py-9 ">
              <div className="h-[273px] xs:h-[387px] relative w-full bg-contain bg-center bg-no-repeat bg-[url('/common/flowery.png')]">
                <div
                  className="absolute top-[50%] left-[50%]"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <h1 className="text-dark-blue text-[30px] xs:text-[40px] sm:text-[60px] mlg:text-[64px] sm:leading-[70px] leading-[40px] mlg:leading-[94px] millimeter">
                    You&apos;re At The Home For
                  </h1>
                  <h1 className="text-dark-blue text-[30px] xs:text-[40px] sm:text-[60px] mlg:text-[64px] sm:leading-[70px] leading-[40px] mlg:leading-[94px] millimeter">
                    Product Engineering{' '}
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className=" pb-[189px]">
            <div className="container px-[30px] m-auto relative">
              <div className="absolute bottom-[-82px] right-0">
                <Image src={'/contact/blurry.png'} alt="blurry" width={171} height={171} />
              </div>
              <div className="flex flex-wrap gap-[80px] md:gap-[180px] justify-between">
                <div
                  className="bg-white flex-1 p-[15px] sm:p-[40px] max-w-[100%] rounded-3xl "
                  style={{ boxShadow: '0px 0px 29px -4px rgba(16, 24, 40, 0.04)' }}
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold text-black01">
                      Hello, tell us about your project
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-9">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="py-4 flex-1 placeholdertext-black01 font-base"
                          style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="py-4 flex-1 placeholdertext-black01 font-base"
                          style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="py-4 placeholdertext-black01 font-base"
                        style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                      />
                      <div className="flex flex-wrap gap-9 ">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="py-4 flex-1  placeholdertext-black01 font-base"
                          style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                        />
                        <input
                          type="text"
                          placeholder="Organization Name"
                          className="py-4 flex-1  placeholdertext-black01 font-base"
                          style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Purpose Of Contact"
                        className="py-4 placeholdertext-black01 font-base"
                        style={{ borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)' }}
                      />
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        className="py-4 placeholder text-black01 font-base"
                        style={{
                          borderBottom: ' 0.5px solid rgba(51, 51, 51, 0.4)',
                          resize: 'none',
                        }}
                        placeholder="Message"
                      ></textarea>
                      <button className="rounded-[41px] mt-8  text-xl w-[202px] bg-dark-blue text-white py-[15px] ">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[60px]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-xl text-[#999999]">Sales</p>
                      <p className="text-xl text-dark-blue">sales@intrapair.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl text-[#999999]">Enquiries</p>
                      <p className="text-xl text-dark-blue">hello@intrapair.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl text-[#999999]">Recruitment</p>
                      <p className="text-xl text-dark-blue">career@intrapair.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                      <p className="text-base text-[#999999]">You’d Prefer A Quick Call Instead?</p>
                      <div>
                        <p className="text-black01 text-base">
                          Call us on any of these phone numbers between
                        </p>
                        <p className="text-black01 text-base">
                          10 am and 4 pm EST, Mondays to Fridays.
                        </p>
                      </div>
                    </div>
                    <Link className="text-dark-blue text-xl" href="tel:+2349025539348">
                      +234 902 5539 348
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-base text-[#999999]">
                      We are social media friendly, send us a DM
                    </p>
                    <div className="flex gap-6 items-center">
                      <Link href="#">
                        <Image src={'/contact/twitter.svg'} alt="twitter" width={21} height={21} />
                      </Link>
                      <Link href="#">
                        <Image src={'/contact/insta.svg'} alt="instagram" width={21} height={21} />
                      </Link>
                      <Link href="#">
                        <Image
                          src={'/contact/linkedin.svg'}
                          alt="linkedin"
                          width={21}
                          height={21}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#F0FAFF] py-[189px]">
            <div className="container m-auto w-ful px-[30px]">
              <div className="flex flex-col gap-y-[50px]">
                <div className="flex flex-col gap-3 items-center">
                  <p className="text-4xl text-dark-blue font-bold rounded-xl">
                    Sign Up For Our Newsletter
                  </p>
                  <p className="text-base text-black01">
                    Be the first to know about releases and industry news and insights.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full md:w-[45%] m-auto">
                  <input
                    type="text"
                    className="border-2 border-solid  rounded-full bg-white placeholdertext-black01 flex-1 px-[35px] py-[15px]"
                    placeholder="Enter your email"
                  />
                  <button className="rounded-[41px] text-xl w-[202px] bg-dark-blue text-white py-[15px] ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AppLayout>
    </div>
  )
}
