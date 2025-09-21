import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
     items-center justify-center gap-4'>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8,type:'spring',stiffness:100 }}
        >
            <Image src={assets.pic1} alt='' className='rounded-full w-32' />
            
        </motion.div>
        <motion.h3 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6,delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:text-white'>
                Hi! I'm Jai Mishra <Image src={assets.hand_icon} alt='' 
            className='w-6' /></motion.h3>

            <motion.h1
            initial={{y:-30,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.8,delay:0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo dark:text-white' >
                Software Developer</motion.h1>
                <motion.p 
                initial={{opacity:0}}
                whileInView={{ opacity:1}}
                transition={{duration:0.6,delay:0.7}}
                className='max-w-2xl mx-auto font-Ovo dark:text-white'>
                  I'm a Developer passionate about building scalable web applications and seamless user experiences. I've worked with startups and platforms like Infosys and GoRoots, delivering real-time applications, dashboards, and AI-powered solutions. My expertise spans React, Next.js, Angular, Node.js, Express, and modern databases like MongoDB, PostgreSQL, and Prisma.
                </motion.p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <motion.a
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.6,delay:1}}
                    href='#contact' 
                    className='px-10 py-3 border rounded-full border-black bg-black
                     text-white flex items-center gap-2 dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors'
                    >Contact Me<Image src={assets.right_arrow_white} alt='' 
                    className='w-4' /></motion.a>

                    <motion.a
                    initial={{y:30,opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.6,delay:1}}
                    href='/Jai_Resume.pdf' download 
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors'>
                    My Resume  <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>

                </div>
            
    </div>
  )
}

export default Header