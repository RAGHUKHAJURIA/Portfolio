import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="text-center lg:text-left" // Align text left on larger screens
        >
          {/* Name at the very top */}
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-12" // Keep spacing for separation from content block
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Raghu Khajuria
            </span>
          </motion.h1>

          {/* Image and Info parallel section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center lg:items-start mb-12">
            {/* Title and Description (Left Column on larger screens) */}
            <div>
              <motion.p
                variants={textVariants}
                className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-700 dark:text-gray-300 lg:text-left"
                whileHover={{ scale: 1.01 }}
              >
                Full Stack Developer & Ai Enthusiast
              </motion.p>

              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 leading-relaxed lg:text-left"
                whileHover={{ scale: 1.01 }}
              >
                A passionate web developer, specializing in MERN stack and also
                AI technologies.
              </motion.p>
            </div>

            {/* Profile Image (Right Column on larger screens) */}
            <motion.div
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-end" // Center image on small screens, right-align on large
            >
              <div className="relative inline-block">
                <motion.img
                  src="./../../dist/assets/profile.jpg"
                  alt="Profile"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="md"
                className="rounded-lg px-4 py-2"
                // IMPORTANT: If this path doesn't work, try other common paths:
                // 1. If your resume is directly in the 'public' folder: '/Raghu_Khajuria_Resume.pdf'
                // 2. If your resume is in 'public/assets/': '/assets/Raghu_Khajuria_Resume.pdf' (current)
                // 3. If your build output structure changes, check the final deployed path.
                onClick={() =>
                  window.open("/Raghu_Khajuria_Resume.pdf", "_blank")
                } // Changed path to direct root
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textVariants}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/RAGHUKHAJURIA",
                label: "GitHub",
              },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-gray-800/20 dark:bg-gray-700/20 backdrop-blur-lg border border-blue-500/20 dark:border-blue-400/20 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-all duration-300"
                whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={
                  href === "#contact"
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
              >
                <Icon size={24} className="text-blue-400 dark:text-blue-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
