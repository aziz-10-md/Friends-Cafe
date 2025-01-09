import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className='bg-primary/20 py-12 mt-12'>
            < motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1 , delay:0.2}}
            className='container flex justify-between items-center'>
                {/* logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <p className="text-primary">Friends</p>
                    <p className="text-secondary">Cafe</p>
                    <FaLeaf className="text-green-500" />
                </div>
                {/*social icons section */}
                <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
                   <a href="https://www.instagram.com/aj___esh/profilecard/?igsh=MXR5eGN1amg4eTlxYw=="><  FaInstagram/></a> 
                  <a href="https://www.facebook.com/ajes.ahamed.56?mibextid=ZbWKwL"><FaFacebook/></a>
                    <FaTwitter/>  
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer