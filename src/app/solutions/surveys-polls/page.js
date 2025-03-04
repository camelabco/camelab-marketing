import AnimatedImgSection from '@/app/component/animatedImgSection'
import Footer from '@/app/component/footer'
import Header from '@/app/component/header'
import SolutionsHeroSection from '@/app/component/solutionsHeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
    <Header/>
      <AnimatedImgSection title='Gather On-Demand Insights with Community Powered' heighLight='Surveys & Polls' description='Harness real-time data collection to make informed decisions, adapt to changing trends, and keep your finger on the pulse of your audience’s preferences.'/>
      <Footer/>
    </div>
  )
}
