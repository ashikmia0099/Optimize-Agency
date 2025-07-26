import React from 'react'
import WorkBanner from './WorkJsxFiles/WorkBanner'
import AllWorks from './WorkJsxFiles/AllWorks'

import FooterBanner from '../Services/ServicesJsxFiles/FooterBanner'

function Page() {
  return (
    <div>
        <WorkBanner></WorkBanner>
        <AllWorks></AllWorks>
        <FooterBanner></FooterBanner>
    </div>
  )
}

export default Page