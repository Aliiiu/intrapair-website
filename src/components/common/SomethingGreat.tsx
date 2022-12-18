import React from 'react'
import Image from 'next/image'

interface Props {
  bgColor: string
}

export const SomethingGreat = ({ bgColor }: Props) => {
  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className="container m-auto px-[30px] py-[99px] sm:pt-[174px] pb-[99px] relative ">
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
                  <p className="font-bold text-5xl text-blue02 leading-[50px]">work together.</p>
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
      </div>
    </section>
  )
}

export default SomethingGreat
