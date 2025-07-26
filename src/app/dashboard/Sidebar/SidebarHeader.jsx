import React from 'react'
import profileimage from '../../../../public/images/blogsimages/Container.png'
import Image from 'next/image'

function SidebarHeader() {
  return (
    <div className=' border-b pb-5'>

        <div className=' flex items-center gap-5 px-5 py-2 pt-5'>
            {/* image */}
            <div>
                <Image src={profileimage} className=' h-16 w-16 rounded-full'></Image>
            </div>
            {/* text */}
            <div>
                <h4 className=' text-xl font-semibold text-[#ffffff]'>Ashik Ahammed</h4>
                <h4 className=' text-lg  text-[#747474] font-semibold'>Admin</h4>
            </div>
        </div>
    </div>
  )
}

export default SidebarHeader