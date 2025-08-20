import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { projects } from "../../data/portfolio";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

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

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-8"
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 max-w-sm"
                onClick={() => window.open(project.liveUrl, "_blank")}
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
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://github.com/RAGHUKHAJURIA",
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
