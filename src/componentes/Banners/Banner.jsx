import { section } from 'framer-motion/client'
import React from 'react'
import { motion } from "framer-motion"
import { FadeLeft,Fadeup } from '../../utility/animation'
import banner from "../../assets/bannercake.png.png"
const Banner = () => {
    return (
        <section className='bg-secondary/20'>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner image */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{type:'spring', stiffness:100, delay:0.}}
                    viewport={{once:true}}
                    
                    src={banner} alt=""
                        className='w-[350px] md.max-w-[500px] h-full object-cover drop-shadow' />
                </div>
                {/* Brand info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={Fadeup(0.5)}
                            initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>
                            {" "}Brand Info</motion.h1>
                        <motion.p
                            variants={Fadeup(0.7)}
                            initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci qui sed, consequatur quae nihil fuga unde, molestiae esse laborum totam accusantium autem suscipit non animi eligendi expedita fugiat doloremque.</motion.p>
                        <motion.p
                            variants={Fadeup(0.9)}
                            initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque veritatis quisquam debitis?</motion.p>
                        <motion.div
                            variants={Fadeup(1.2)}
                            initial='hidden'
                            animate='visible'
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn '>Learn More</button>
                        </motion.div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Banner