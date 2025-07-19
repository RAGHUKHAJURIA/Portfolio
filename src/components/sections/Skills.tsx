import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card"; // Ensure Card component is imported
import { skills } from "../../data/portfolio"; // Assuming 'skills' array contains objects like { name: 'React', category: 'Frontend' }

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for individual skill tags
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 }, // Added y for a slight lift effect
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            {/* Optional: Add a brief introductory paragraph here if desired */}
            {/* <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I proficiently use in my development journey.
            </p> */}
          </motion.div>

          {/* Wrapper Card for the entire skills grid to create the outer border */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="p-8 rounded-xl border border-blue-500/20 bg-gray-900/50 backdrop-blur-md shadow-xl">
              {" "}
              {/* Applied styling to the Card */}
              {/* Display all skills as static tags */}
              <motion.div
                variants={containerVariants} // Use container variants for the grid of tags
                className="flex flex-wrap justify-center gap-4" // Removed mb-16 as it's now inside the Card
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
                    }} // Enhanced hover effect
                    transition={{ duration: 0.2 }}
                    // Adjusted styling for the individual tags to match the screenshot more closely
                    className="px-6 py-3 rounded-full font-medium text-white bg-gray-800/60 border border-blue-500/30 backdrop-blur-sm"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
