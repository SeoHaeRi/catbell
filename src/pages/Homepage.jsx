import Header from 'components/header/Header'
import Mainview from 'components/mainview/Mainview'
import Section1 from 'components/section1/Section1'
import React from 'react'
import './homepage.css'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <Mainview />
      <Section1 />
    </div>
  )
}
