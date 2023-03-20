/*
 * Created Date: Mo Mar 2023
 * Author: Phieule
 * File: navbarItem.tsx
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

interface NavbarItemProps {
  label: string
  active?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  return (
    <div
      className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}
    >
      {label}
    </div>
  )
}

export default NavbarItem
