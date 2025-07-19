import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { projects } from "../../data/portfolio";

export const Projects: React.FC = () => {
  // Category filter state and logic are no longer directly used for display,
  // but keeping them for potential future use or if 'projects' data relies on it.
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // Now displaying all projects. When you add more projects to the 'projects' array,
  // they will automatically appear in the grid.
  const displayedProjects = projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>

          {/* Category Filter section removed as per request */}

          {/* Projects Grid - now using flexbox for dynamic centering and wrapping */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-8" // Changed from grid to flex for dynamic centering
          >
            {displayedProjects.map(
              (
                project // Using displayedProjects (now includes all projects)
              ) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 max-w-sm" // Added responsive widths and max-w-sm
                  onClick={() => window.open(project.liveUrl, "_blank")} // Make entire card clickable
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover border-b border-blue-500/20"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Removed overlay with GitHub/Live buttons as card itself is clickable */}
                    </div>

                    <div className="p-4">
                      <p className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                      </p>
                      {/* Removed Code/Live buttons as card itself is clickable */}
                    </div>
                  </Card>
                </motion.div>
              )
            )}
          </motion.div>

          {/* View More Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://github.com/RAGHUKHAJURIA?tab=repositories",
                    "_blank"
                  )
                }
              >
                View All Projects on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
