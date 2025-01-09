import React from 'react'
import Hero from '../Hero/Hero'
import Menus from '../menus/Menus'
import Banner from '../Banners/Banner'
import Menus2 from '../menus/Menus2'
import Banner2 from '../Banners/Banner2'
import Banner3 from '../Banners/Banner3'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Menus/>
        <Banner/>
        <Menus2/>
        <Banner2 />
        <Banner3 />
        <Footer/>
    </div>
  )
}
