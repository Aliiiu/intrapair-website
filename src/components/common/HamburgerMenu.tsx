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
          <Image src="/header/close.svg" width={18} height={28} alt="close menu" />
        ) : (
          <Image src="/header/ham-menu.svg" width={20} height={32} alt="open menu" />
        )}
      </button>
    </>
  )
}

export default HamburgerMenu
