import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from 'motion/react'

const Experience = ({ isDarkMode }) => {
  const experienceData = [
    {
      company: "GoRoots",
      position: "Full Stack Developer Intern",
      period: " May 2025 - Present",
      description: "Built GPT-4 powered chatbot, booking system with React Big Calendar, analytics dashboard with AWS S3 & PostgreSQL.",
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark
    },
    {
      company: "Infosys Springboard",
      position: "Full Stack Developer Intern", 
      period: "Oct 2024 - Jan 2025",
      description: "Developed Angular components for real-time bidding, implemented JWT authentication, built admin dashboards.",
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Professional Journey
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore my professional journey and the valuable experience I've gained through internships at leading companies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src={isDarkMode ? experience.iconDark : experience.icon} alt={experience.company} className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{experience.company}</h3>
                  <span className="text-sm text-gray-500 dark:text-white/60 font-Ovo">{experience.period}</span>
                </div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-white/80 mb-3 font-Ovo">{experience.position}</h4>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-white/80">{experience.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
