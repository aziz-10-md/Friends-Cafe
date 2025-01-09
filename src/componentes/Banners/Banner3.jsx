import React from 'react'
import bannerPng from "../../assets/cakebanner.png"
import { motion } from "framer-motion"
import { FadeLeft } from '../../utility/animation'

const bgStyle = {
backgroundImage: `url(${bannerPng})`,
backgroundPostion:"center",
backgroundSize:"cover",
backgroundRepeat:"no-repeat",
backgroundAttachment:"fixed"

}

const Banner3 = () => {
  return (
    <section className='container mb-12'>
    <div
    style={bgStyle}
    className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Blank image */}
        <div></div>
        {/* Brand info */}
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    className='text-3xl lg:text-6xl font-bold uppercase'>
                    {" "} GET FRESH FRUITS TODAY</motion.h1>
                <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci qui sed, consequatur quae nihil fuga unde, molestiae esse laborum totam accusantium autem suscipit non animi eligendi expedita fugiat doloremque.</motion.p>
                <motion.p
                    variants={FadeLeft(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci qui sed, consequatur quae nihil fuga unde.</motion.p>
                <motion.div
                    variants={FadeLeft(1.1)}
                    initial='hidden'
                    animate='visible'
                    className='flex justify-center md:justify-start'>
                    <button className='primary-btn '>Order Now</button>
                </motion.div>
            </div>
        </div> 
    </div>
</section>
)
}

export default Banner3