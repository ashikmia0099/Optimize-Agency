import React from 'react'
import ContactUsBanner from './ContactUsJsxFiles/ContactUsBanner'
import ContactUsMedium from './ContactUsJsxFiles/ContactUsMedium'

import FollowUs from './ContactUsJsxFiles/FollowUs'
import QuestionBanner from './ContactUsJsxFiles/QuestionBanner'
import Question from '@/Homepages/Question'
import FooterHero from '../SharedFiles/FooterHero'
import ContactFormUs from '@/Shared/ContactFormUs'
import ContactUsForm from './ContactUsJsxFiles/ContactUsForm'

function Page() {
  return (
    <div>
      <ContactUsBanner></ContactUsBanner>
      <ContactUsMedium></ContactUsMedium>
      <ContactUsForm></ContactUsForm>

      <FollowUs></FollowUs>
      <Question></Question>
      <FooterHero></FooterHero>
    </div>
  )
}

export default Page