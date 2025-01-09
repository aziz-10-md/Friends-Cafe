import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { motion } from "framer-motion"
import { Fadeup,FadeRight } from '../../utility/animation';
import fruit1 from "../../assets/honey.png"
import Menus3 from '../menus/Menus3';
export default function HoneyCake() {
    
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h[650px] relative">
        {/* Brand info */}
        <div className=' w-72 flex justify-center items-center md:right-16 ' >
          <motion.img
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:'spring', stiffness:100, delay:0.}}
            viewport={{once:true}}
            src={fruit1}
            alt="" className='w-[200px]  md:w-[450px] drop-shadow sm:justify-center items-center' />
        </div>
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 '>
          <div className=' text-center md:text-left spacy-y-6 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeRight(0.6)}
              initial='hidden'
              animate='visible'
              className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia uppercase'>    
              Honey <span className='text-secondary'>cake</span>
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
              <span className='text-gray-950 w-200'>
                    <p>$3.00</p>
                </span>
            </motion.p>
            {/* Buttton Section */}
            <motion.div
              variants={FadeRight(1.5)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2 mt-5'>
                
                Order Now</button>
            </motion.div>
          </div>
        </div>
        <Menus3/>
        
        </div>
  )
}
