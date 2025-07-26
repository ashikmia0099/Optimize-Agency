import React from 'react'
import AboutUsBanner from './AboutUsJsxFiles/AboutUsBanner'
import AboutUsHero from './AboutUsJsxFiles/AboutUsHero'
import AllAboutUs from './AboutUsJsxFiles/AllAboutUs'

import FooterHero from '../SharedFiles/FooterHero'

function Page() {
  return (
    <div>
        <AboutUsBanner></AboutUsBanner>
        <AboutUsHero></AboutUsHero>
        <AllAboutUs></AllAboutUs>
        <FooterHero></FooterHero>
    </div>
  )
}

export default Page