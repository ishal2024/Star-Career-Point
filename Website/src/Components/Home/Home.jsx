import React from 'react'
import Hero from './Hero'
import AllCourses from './AllCourses'
import HighlightBanner from './HighlightBanner'
import AllFacilities from './AllFacilities'
import HeroSlider from './HeroSlider'

function Home() {
  return (
    <>
    <HeroSlider />
    <AllCourses />
    <HighlightBanner />
    <AllFacilities />
    </>
  )
}

export default Home