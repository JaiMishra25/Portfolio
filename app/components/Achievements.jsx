import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from 'motion/react'

const Achievements = ({ isDarkMode }) => {
  const achievementsData = [
    {
      title: "CodeKaze AIR 784",
      subtitle: "Top 0.7% nationally",
      description: "Achieved All India Rank 784 out of 1,00,000+ participants in Coding Ninjas CodeKaze competition, placing in the top 0.7% nationally.",
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
      type: "Competition"
    },
    {
      title: "Amazon ML Summer School 2025",
      subtitle: "Selected Participant",
      description: "Selected for Amazon's prestigious Machine Learning Summer School 2025 program, demonstrating expertise in ML and data science.",
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      type: "Program Selection"
    },
    {
      title: "Flipkart GRiD 7.0",
      subtitle: "Semi-Finals (Top 1-2%)",
      description: "Reached the Semi-Finals of Flipkart GRiD 7.0, securing a spot among the top 1–2% of applicants in one of India’s most competitive tech challenges.",
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
      type: "Competition"
    },
    {
      title: "ServiceNow CSA",
      subtitle: "Certified System Administrator",
      description: "Achieved ServiceNow Certified System Administrator certification, demonstrating expertise in ServiceNow platform administration.",
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      type: "Certification"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="achievements" className="w-full px-[12%] py-10 scroll-mt-20">
      
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Recognition & Credentials
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        Achievements & Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore my achievements and professional certifications that showcase my dedication to continuous learning and excellence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src={isDarkMode ? achievement.iconDark : achievement.icon} alt={achievement.title} className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{achievement.title}</h3>
                  <span className="text-xs text-gray-500 dark:text-white/60 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full font-Ovo">
                    {achievement.type}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-white/80 mb-3 font-Ovo">{achievement.subtitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-white/80">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
