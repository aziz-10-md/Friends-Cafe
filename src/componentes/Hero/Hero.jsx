import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { motion } from "framer-motion"
import { FadeRight } from '../../utility/animation';
import plate from "../../assets/plate cake.png"
import ball from "../../assets/ball.png.png"


const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h[650px] relative">
        {/* Brand info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 '>
          <div className=' text-center md:text-left spacy-y-6 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeRight(0.6)}
              initial='hidden'
              animate='visible'
              className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>
              Taste
            
              the <span className='text-secondary'>season</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial='hidden'
              animate='visible'
              className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
            < motion.p
              variants={FadeRight(1.2)}
              initial='hidden'
              animate='visible'
              className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now get 20%
              off on your first order
            </motion.p>
            {/* Buttton Section */}
            <motion.div
              variants={FadeRight(1.5)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2 mt-5'>
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now</button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className='flex justify-center items-center' >
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, }}
            src={plate}
            alt="" className='w-[350px] md:w-[450px] drop-shadow' />
        </div>
        {/* BAll Image */}
        <div className='absolute top-14 md:top-0 left-1/1 blur-sm opacity-100 rotate-[40deg]'>
          < motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.9, }}
            src={ball} alt="" className=' w-24 md:w-[75px]' />
        </div>
        <div className='absolute top-14 md:top-10 left-1/3 blur-sm opacity-100 rotate-[40deg]'>
          < motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2, }}
            src={ball} alt="" className='w-0 md:w-[100px]' />
        </div>
        <div className='absolute top-14 md:top-64 left-72 blur-sm opacity-100 rotate-[40deg]'>
          < motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, }}
            src={ball} alt="" className='w-14 md:w-[80px]' />
        </div>
        <div className='absolute top-14 md:top-52 left-28 blur-sm opacity-100 rotate-[40deg]'>
          < motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 5, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5, }}
            src={ball} alt="" className='w-0 md:w-[50px]' />
        </div>

      </div>
    </section>
  )
}

export default Hero