import Company from "@/Homepages/Company";
import ContactUs from "@/Homepages/ContactUs";
import Hero from "@/Homepages/Hero";
import OurServices from "@/Homepages/OurServices";
import Question from "@/Homepages/Question";
import WhatSayClient from "@/Homepages/WhatSayClient";
import WhyChoose from "@/Homepages/WhyChoose";
import ContactFormUs from "@/Shared/ContactFormUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <Hero></Hero>
     <Company></Company>
     <OurServices></OurServices>
     <WhyChoose></WhyChoose>
     <WhatSayClient></WhatSayClient>
     <Question></Question>
     <ContactUs></ContactUs>
     <ContactFormUs></ContactFormUs>
   </div>
  );
}
