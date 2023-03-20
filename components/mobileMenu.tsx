/*
 * Created Date: Mo Mar 2023
 * Author: Phieule
 * File: mobileMenu.tsx
 * Project: netflix-clone
 * -----
 * Last Modified: Mon Mar 20 2023
 * Modified By: Phieule
 * -----
 * Copyright (c) 2023 Voices of Sales Consultancy
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'

interface MobileMenuProps {
  visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hover:underline'>Home</div>
        <div className='px-3 text-center text-white hover:underline'>Series</div>
        <div className='px-3 text-center text-white hover:underline'>Films</div>
        <div className='px-3 text-center text-white hover:underline'>New & Popular</div>
        <div className='px-3 text-center text-white hover:underline'>My List</div>
        <div className='px-3 text-center text-white hover:underline'>Browse by Languages</div>
      </div>
    </div>
  )
}

export default MobileMenu
