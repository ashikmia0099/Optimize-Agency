import React from 'react'
import BannerSection from './LeftSection/BannerSection'
import ProgrammingSection1 from './LeftSection/ProgrammingSection1'
import ProgrammingSection2 from './LeftSection/ProgrammingSection2'
import Card from '../MeddleSection/Card'
import LastSectionBanner from '../LastSection/LastSectionBanner'
import LastSectionSecondBanner from '../LastSection/LastSectionSecondBanner'
import TopStories from './RightSection/TopStories'
import TopStoriesSecond from './RightSection/TopStoriesSecond'
import LastSectionNews from '../LastSection/LastSectionNews'

function TopSection() {
    return (
        <div className='bg-[#191919]'>
            <div className='max-w-[1596px] mx-auto  grid lg:grid-cols-5 gap-5'>
                {/* left section */}
                <div className=' lg:col-span-4 '>
                    <BannerSection></BannerSection>
                    <ProgrammingSection1></ProgrammingSection1>
                    <ProgrammingSection2></ProgrammingSection2>
                    
                </div>
                {/* right section */}
                <div className=' lg:col-span-1 '>
                <TopStories></TopStories>
                
                </div>
            </div>
            {/* middle section */}
            <div className='max-w-[1596px] mx-auto  '>
            <Card></Card>
            </div>

            {/* last section */}
            <div className='max-w-[1596px] mx-auto  grid lg:grid-cols-5 lg:gap-2.5 mt-5 md:mt-10'>
                {/* left section */}
                <div className=' lg:col-span-4 '>
                    <LastSectionBanner></LastSectionBanner>
                    
                    <LastSectionSecondBanner></LastSectionSecondBanner>
                    
                </div>
                {/* right section */}
                <div className=' lg:col-span-1 '>
                    <TopStoriesSecond></TopStoriesSecond>
                </div>
            </div>
            
        </div>
    )
}

export default TopSection