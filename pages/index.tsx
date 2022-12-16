/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
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
          <section className="container m-auto   px-[30px] relative">
            <div className="absolute sm:block hidden right-0 top-[-25px]">
              <Image src={'/home/spiral.png'} width={200} height={200} alt="sprial" />
            </div>
            <div className=" flex items-center  justify-center sm:py-[120px] py-9 w-[100%] sm:w-[80%] m-auto">
              <div className="flex flex-col gap-6 justify-center  text-center">
                <h1 className="text-dark-blue text-[30px] xs:text-[40px] sm:text-[60px] mlg:text-[100px] sm:leading-[70px] leading-[40px] mlg:leading-[94px] millimeter">
                  ACCELERATING DIGITAL TRANSFORMATION
                </h1>
                <p className="text-dark-blue text-xl md:w-[70%] m-auto w-[100%]">
                  We partner with organizations & startups to accelerate and simplify their work
                  processes by building innovative software solutions.
                </p>
                <button className="rounded-[41px]  text-xl w-[202px] bg-dark-blue text-white py-[15px] m-auto">
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </section>

          <section className="bg-blue01  py-[189px]">
            <div className="container m-auto w-full  px-[30px]">
              <div className="flex flex-col gap-y-9 ">
                <div className="flex flex-col gap-3 ">
                  <div className="border-b-2 w-[fit-content] pb-5 pr-9  border-solid border-white">
                    <h3 className="font-bold text-white text-5xl">Home For Everything</h3>
                    <h3 className="font-bold text-white text-5xl">Product Engineering</h3>
                  </div>

                  <div>
                    <p className="text-white text-base">
                      We utilize our coding intelligence to deliver first-class products
                    </p>
                    <p className="text-white text-base">
                      featuring an excellent digital experience.
                    </p>
                  </div>
                </div>
                <div
                  className="mlg:flex block gap-[100px]"
                  style={{
                    gridTemplateColumns: 'max-content 1fr',
                  }}
                >
                  <div className="flex flex-1 flex-col mlg:mb-0 mb-[60px] gap-y-[60px]">
                    <div className="flex flex-col gap-6 mt-6">
                      <p className="text-white font-bold text-4xl">Product Development</p>
                      <div>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          DevOps and Platform
                        </p>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          Engineering{' '}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          Data Engineering
                        </p>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          and Analytics
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          Application
                        </p>
                        <p className="font-bold text-4xl" style={{ color: 'rgba(0, 0, 0, 0.25)' }}>
                          Modernization
                        </p>
                      </div>
                    </div>

                    <button className="rounded-[41px]  text-xl w-[201px] border-2  border-solid text-white py-[15px]">
                      Learn More
                    </button>
                  </div>
                  <div className="flex flex-col flex-1 gap-3 items-center">
                    <Image
                      src={'/home/product-dev.png'}
                      alt="illustration"
                      width={507}
                      height={340}
                    />
                    <div>
                      <p className="text-xl text-white">
                        We explore our client’s business ideas to build scalable and future-ready
                        products that are generally acceptable and accessible in the global market.
                      </p>
                      {/* <p className="text-sm text-white">
                      products that are generally acceptable and accessible in the global market.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-[189px]">
            <div className="container m-auto px-[30px] ">
              <div className="flex flex-col gap-y-9 m-auto ">
                <div className="flex flex-col gap-3 w-[fit-content] max-w-[100%]">
                  <h3 className="font-bold text-dark-blue text-5xl border-b-2 w-[fit-content] pb-5 pr-9  border-solid border-dark-blue">
                    Case Studies
                  </h3>
                  {/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
                  <p className="text-black-01 text-base">
                    Here are some of the projects we&apos;ve built for our clients.
                  </p>
                </div>
                <div className="flex">
                  <div className="mlg:flex block flex-wrap  gap-[46px] justify-between w-full">
                    <div className="flex flex-1 flex-col gap-5 mlg:mb-0 mb-[60px]">
                      <div className="h-[273px] xs:h-[387px] bg-contain bg-center bg-no-repeat bg-[url('/home/case1-bg.png')]"></div>
                      <div className="flex flex-col gap-1  items-center">
                        <div className="flex items-center gap-3">
                          <p className="text-black01 font-semibold text-sm	sm:text-xl	">Stitchvine</p>
                          <p className="bg-black01 w-[29px] h-[2px]"></p>
                          <p className="text-black01 font-semibold text-sm	sm:text-xl">
                            Fashion Made Easy
                          </p>
                        </div>
                        <p className="text-base sm:text-sm text-[#666666]">
                          Branding & Identity, Websites & Digital Platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5">
                      <div className="h-[273px] xs:h-[387px] bg-contain bg-center bg-no-repeat bg-[url('/home/case2-bg.png')]"></div>
                      <div className="flex flex-col gap-1  items-center">
                        <div className="flex items-center gap-3">
                          <p className="text-black01 font-semibold text-sm	sm:text-xl	">Anyworks</p>
                          <p className="bg-black01 w-[29px] h-[2px]"></p>
                          <p className="text-black01 font-semibold	 text-sm	sm:text-xl">
                            Service At Your Doorstep
                          </p>
                        </div>
                        <p className="text-base sm:text-sm text-[#666666]">
                          Branding & Identity, Websites & Digital Platforms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="  pb-[189px]">
            <div className="container m-auto px-[30px]">
              <div className="flex flex-col gap-y-[60px] m-auto ">
                <div className="flex flex-col gap-3 w-[fit-content] max-w-[100%]">
                  <h3 className="font-bold text-dark-blue text-5xl border-b-2 w-[fit-content] pb-5 pr-9  border-solid border-dark-blue">
                    Our Products
                  </h3>
                  {/* <div className="bg-dark-blue w-[90%] h-[1px]"></div> */}
                  <p className="text-black-01 text-base">
                    Our products tackle emerging challenges across different sectors in Africa.
                  </p>
                </div>
                <div className="flex">
                  <div className="md:flex block flex-wrap  justify-between w-full items-center gap-[100px] m-auto">
                    <div
                      className="flex flex-1 flex-col gap-5 mlg:mb-0 mb-[60px] w-[455px] max-w-[100%] h-[455px] relative"
                      style={{
                        background: ' linear-gradient(90deg, #0095E7 3.7%, #27B3FF 93.96%)',
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                      }}
                    >
                      <div
                        className="absolute top-[50%] left-[50%]"
                        style={{ transform: 'translate(-50%, -50%)' }}
                      >
                        <Image src={'/home/flip.png'} width={109} height={148} alt="flip" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5">
                      <p className="text-5xl font-bold text-black01">Flip</p>
                      <p className="text-base text-black01">
                        An enhanced assessment platform that provides computerized tests,
                        examination management, quick grading systems, and collation of results
                        instead of the use of pen and paper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue02 py-[189px]">
            <div className="container m-auto w-ful px-[30px]">
              <div className="flex flex-col gap-y-9">
                <div className="flex">
                  <div className="msm:flex block flex-wrap  gap-[146px] justify-between items-center w-full">
                    <div className="flex flex-col flex-1 gap-8">
                      <div className="flex flex-col gap-3">
                        <div className="pb-5 pr-9 border-b-2  border-solid border-white">
                          <h3 className="font-bold text-white text-5xl">Open Source</h3>
                          <h3 className="font-bold text-white text-5xl">is Art</h3>
                        </div>
                        {/* <div className="bg-white w-full h-[1px]"></div> */}

                        <p className="text-white text-base">
                          We have deeply invested in the open source community to allow tech talents
                          all over the world to collaborate and contribute to open source projects.
                          Our open-source software can be freely accessed by any tech enthusiasts
                          willing to play a role in transforming the digital space and enhancing the
                          performance of digital products
                        </p>
                      </div>
                      <button className="rounded-[41px]  text-sm w-[206px] bg-white text-blue02 py-[15px] ">
                        Leave A Footprint
                      </button>
                    </div>
                    <div className="flex flex-1 ">
                      <Image src={'/home/open-art.png'} width={447} height={447} alt="sprial" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-[189px]">
            <div className="container px-[30px] m-auto">
              <div className=" flex flex-col gap-y-[70px] m-auto ">
                <div className="flex flex-col gap-3 w-[fit-content] max-w-[100%]">
                  <h3 className="font-bold text-dark-blue text-5xl">Our Blog</h3>
                  <div className="bg-dark-blue w-[50%] h-[1px]"></div>
                  <p className="text-black-01 text-base">
                    Check out our unique stories from digital experience to enterprise solutions.
                  </p>
                </div>
                <div className="flex">
                  <div className="xl:flex-nowrap flex-wrap flex  gap-[36px] justify-between w-full">
                    <div
                      className="flex flex-col gap-1 max-w-[300px]  items-center"
                      style={{
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                      }}
                    >
                      <div className="w-full">
                        <img src="/blog/blog1.png" alt="" />
                      </div>
                      <div className="flex flex-col gap-6 p-5 flex-1 w-full justify-between">
                        <p className="black01 text-base w-full sm:w-[80%]">
                          Lorem ipsum , consectetur adipiscing elit.
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-dark-blue">31 Aug, 2022</p>
                          <Image src={'/common/arrow-right.svg'} width={12} height={12} alt=">" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-1  max-w-[300px]  items-center"
                      style={{
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                      }}
                    >
                      <div className="w-full">
                        <img src="/blog/blog2.png" alt="" />
                      </div>
                      <div className="flex flex-col gap-6 p-5 flex-1 w-full justify-between">
                        <p className="black01 text-base w-full sm:w-[80%]">
                          Lorem ipsum , consectetur adipiscing elit.
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-dark-blue">31 Aug, 2022</p>
                          <Image src={'/common/arrow-right.svg'} width={12} height={12} alt=">" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-1   max-w-[300px] items-center"
                      style={{
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                      }}
                    >
                      <div className="w-full">
                        <img src="/blog/blog3.png" alt="" />
                      </div>
                      <div className="flex flex-col gap-6 p-5 flex-1 w-full justify-between">
                        <p className="black01 text-base w-full sm:w-[80%]">
                          Lorem ipsum , consectetur adipiscing elit.
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-dark-blue">31 Aug, 2022</p>
                          <Image src={'/common/arrow-right.svg'} width={12} height={12} alt=">" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-1  max-w-[300px] items-center"
                      style={{
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                      }}
                    >
                      <div className="w-full">
                        <img src="/blog/blog1.png" alt="" />
                      </div>
                      <div className="flex flex-col gap-6 p-5 flex-1 w-full justify-between">
                        <p className="black01 text-base w-full sm:w-[80%]">
                          Lorem ipsum , consectetur adipiscing elit.
                        </p>
                        <div className="flex justify-between">
                          <p className="text-xs text-dark-blue">31 Aug, 2022</p>
                          <Image src={'/common/arrow-right.svg'} width={12} height={12} alt=">" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="rounded-[41px]  text-sm w-[212px] bg-dark-blue text-white py-[15px] m-auto">
                  Read A Story
                </button>
              </div>
            </div>
          </section>

          <section className="bg-blue02 py-[189px]">
            <div className="container m-auto  px-[30px] w-full">
              <div className="mb-[70px] m-auto">
                <div className="flex">
                  <div className="flex flex-col gap-3 w-[700px] max-w-[100%]">
                    <div className="pb-5 pr-9 border-b-2  border-solid border-white">
                      <h3 className="font-bold text-white text-5xl">Quality Product Keeps</h3>
                      <h3 className="font-bold text-white text-5xl">You In Business</h3>
                    </div>
                    {/* <div className="bg-white w-full h-[1px]"></div> */}

                    <p className="text-white text-base leading-6">
                      At Intrapair, we’ve got the engineering of your products figured out for you.
                      Don’t take our words for granted, People are saying a lot about us!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="overflow-x-scroll py-8 flex  gap-[46px] justify-between w-full">
                  <div className="relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[60px] gap-[74px] min-w-[326px] w-[526px]">
                    <div className="absolute top-[-13px] left-[32px]">
                      <Image src={'/home/testimony-tag.svg'} width={68} height={32} alt="tag" />
                    </div>
                    <p className="text-white text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere a, mi vel
                      sollicitudin velit varius dictum. Arcu suspendisse blandit non porta
                      adipiscing rutrum.
                    </p>
                    <div>
                      <p className="text-white text-base font-semibold">Stephen Stephen</p>
                      <p className="text-white text-base ">CEO, Intrapair</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[60px] gap-[74px] min-w-[326px] w-[526px]">
                    <div className="absolute top-[-13px] left-[32px]">
                      <Image src={'/home/testimony-tag.svg'} width={68} height={32} alt="tag" />
                    </div>
                    <p className="text-white text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere a, mi vel
                      sollicitudin velit varius dictum. Arcu suspendisse blandit non porta
                      adipiscing rutrum.
                    </p>
                    <div>
                      <p className="text-white text-base font-semibold">Stephen Stephen</p>
                      <p className="text-white text-base ">CEO, Intrapair</p>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-1 border-2  border-solid border-dark-blue p-[60px] gap-[74px] min-w-[326px] w-[526px]">
                    <div className="absolute top-[-13px] left-[32px]">
                      <Image src={'/home/testimony-tag.svg'} width={68} height={32} alt="tag" />
                    </div>
                    <p className="text-white text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere a, mi vel
                      sollicitudin velit varius dictum. Arcu suspendisse blandit non porta
                      adipiscing rutrum.
                    </p>
                    <div>
                      <p className="text-white text-base font-semibold">Stephen Stephen</p>
                      <p className="text-white text-base ">CEO, Intrapair</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container m-auto  px-[30px] pt-[99px] sm:pt-[174px] pb-[99px] relative">
            <div className="absolute sm:block hidden left-0 top-0">
              <Image src={'/home/spiral2.png'} width={180} height={180} alt="spiral" />
            </div>
            <div className="flex flex-col gap-y-6 m-auto ">
              <p className="text-dark-blue text-xs font-semibold">GOT A PROJECT IN MIND?</p>
              <div className="flex">
                <div className="md:flex block flex-nowrap  justify-between w-full items-center gap-[50px] m-auto">
                  <div className="md:mb-0 mb-[30px] basis-[80%] ">
                    <div>
                      <p className="font-bold text-5xl text-blue02 leading-[50px]">
                        Let’s make something great
                      </p>
                      <p className="font-bold text-5xl text-blue02 leading-[50px]">
                        work together.
                      </p>
                    </div>
                    {/* <p className="font-bold text-5xl text-blue02">
                    work together.
                    </p> */}
                  </div>
                  <div className="flex-1">
                    {' '}
                    <Image src={'/home/arrow-right.svg'} width={61} height={37} alt=">" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AppLayout>
    </div>
  )
}
