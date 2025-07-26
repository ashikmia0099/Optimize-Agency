import React from 'react'
import CareerBanner from './CareerJsxFiles/CareerBanner'
import CareerOpertunitys from './CareerJsxFiles/CareerOpertunitys'
import CurrentOpening from './CareerJsxFiles/CurrentOpening'
import FooterHero from '../SharedFiles/FooterHero'

function Page() {
  return (
    <div>
        <CareerBanner></CareerBanner>
        <CareerOpertunitys></CareerOpertunitys>
        <CurrentOpening></CurrentOpening>
        <FooterHero></FooterHero>
    </div>
  )
}

export default Page