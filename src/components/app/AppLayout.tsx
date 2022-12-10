import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppHeader, AppDropdownMenu, Footer } from 'src/components/app'
import { sidebar, toggleSidebar, closeSidebar } from 'src/store/sidebar'

interface Props {
  children: React.ReactNode
}
export const AppLayout = ({ children }: Props) => {
  const { dropDownMenuIsOpen } = sidebar.use()
  const router = useRouter()
  useEffect(() => closeSidebar(), [router])

  return (
    <div>
      <div className='fixed w-full top-0'>
        <AppHeader isOpen={dropDownMenuIsOpen} toggleSidebar={toggleSidebar} />
        <AppDropdownMenu isOpen={dropDownMenuIsOpen} />
      </div>

      <main className="my-[80px]">{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
