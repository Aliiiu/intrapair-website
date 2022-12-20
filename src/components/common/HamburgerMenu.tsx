import React from 'react'
import Image from 'next/image'

interface Props {
  onClick: () => void;
  isOpen: boolean
}

export const HamburgerMenu = ({ onClick, isOpen }: Props) => {
  return (
    <>
      <button onClick={onClick}>
        {isOpen === true ? (
          <Image src="/header/close.svg" width={24} height={34} alt="close menu" />
        ) : (
          <Image src="/header/ham-menu.svg" width={26} height={38} alt="open menu" />
        )}
      </button>
    </>
  )
}

export default HamburgerMenu
