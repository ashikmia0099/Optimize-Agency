import React from 'react'
import ServiceBanner from './ServicesJsxFiles/ServiceBanner'
import Design from './ServicesJsxFiles/Design'
import Engineering from './ServicesJsxFiles/Engineering'
import ProjectManagement from './ServicesJsxFiles/ProjectManagement'
import FooterBanner from './ServicesJsxFiles/FooterBanner'

function Page() {
  return (
    <div>
        <ServiceBanner></ServiceBanner>
        <Design></Design>
        {/* <Engineering></Engineering> */}
        {/* <ProjectManagement></ProjectManagement> */}
        <FooterBanner/>
    </div>
  )
}

export default Page