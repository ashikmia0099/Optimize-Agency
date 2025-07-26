import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import SidebarHeader from './Sidebar/SidebarHeader'
import Sidebarfooter from './Sidebar/Sidebarfooter'


function DeshboardLayouts({ children }) {
  return (
    <div className=' grid grid-cols-12 max-w-[1596px] mx-auto bg-[#191919]'>
      <div className=' col-span-3 h-[750px]  border-r grid  grid-rows-12'>
        <div className='row-span-2'>
        <SidebarHeader></SidebarHeader>
        </div>
        <div className='row-span-8 overflow-y-auto'>
        <Sidebar></Sidebar>
        </div>
        <div className='row-span-2'>
        <Sidebarfooter></Sidebarfooter>
        </div>
      </div>
      <div className=' col-span-9 h-[750px] overflow-y-auto'>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DeshboardLayouts