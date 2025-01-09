import { div, img, section } from 'framer-motion/client';
import React from 'react';
import Fruit from "../../assets/ice1.png";
import Fruit2 from "../../assets/ice2.png";
import Fruit3 from "../../assets/ice3.png";
import Fruit4 from "../../assets/ice4.png";
import { delay, motion } from "framer-motion"
import { FadeLeft } from '../../utility/animation';

const MenusData = [
    {
        id: 1,
        title: "Chocolate",
        link: "/chocolate",
        price: "$3.00",
        img: Fruit,
        delay:0.3,
    },
    {
        id: 2,
        title: "Mango",
        link: "/",
        price: "$2.05",
        img: Fruit2,
        delay:0.6,

    },
    {
        id: 3,
        title: "Red Velvet",
        link: "/",
        price: "$6.55",
        img: Fruit3,
        delay:0.9,

    },
    {
        id: 4,
        title: "Black Current ",
        link: "/",
        price: "$10.00",
        img: Fruit4,
        delay:1.2,

    },
];


const Menus2 = () => {
    return (
        <section>
            <div className="container pt-12 pb-20">
                <motion.h1
                initial={{opacity:0, x:-200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.3}}
                className='text-2xl font-bold text-left pb-10 uppercase'> ice cream</motion.h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {MenusData.map((menu) => (
                        < motion.div
                        variants={FadeLeft(menu.delay)}
                        initial='hidden'
                        whileInView={'visible'}
                        whileHover={{scale:1.1}}
                        className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.35)] flex flex-row justify-around items-center gap-3'>
                            <img src={menu.img} alt="" className='w-[60px] mb-4 scale-110 transform -translate-y-6' />
                            <div>
                                <h1 className='text-lg font-semibold'>{menu.title}</h1>
                                <p className='text-lg font-semibold text-secondary '>{menu.price}</p>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menus2