import React from 'react'
import ProcessBanner from './ProcessJsxFiles/ProcessBanner'
import AllProcess from './ProcessJsxFiles/AllProcess'
import ContactUs from '@/Homepages/ContactUs'

function Page() {
  return (
    <div>
        <ProcessBanner></ProcessBanner>
        <AllProcess></AllProcess>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Page