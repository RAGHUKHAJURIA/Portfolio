import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { skills } from "../../data/portfolio";

interface LeetCodeGraphProps {
  username: string;
}

const LeetCodeGraph: React.FC<LeetCodeGraphProps> = ({ username }) => {
  const graphUrl = `https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`;

  if (!username) {
    return (
      <div style={{ color: '#f87171', padding: '1rem', border: '1px solid #f87171', borderRadius: '8px', textAlign: 'center' }}>
        Please provide a valid username.
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <img
        src={graphUrl}
        alt={`LeetCode activity graph for ${username}`}
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
};

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
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
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="p-8 rounded-xl border border-blue-500/20 bg-gray-900/50 backdrop-blur-md shadow-xl">
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-3 rounded-full font-medium text-white bg-gray-800/60 border border-blue-500/30 backdrop-blur-sm"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mt-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Coding Activity
              </h3>
            </div>
            <Card className="p-4 rounded-xl border border-blue-500/20 bg-gray-900/50 backdrop-blur-md shadow-xl">
              <LeetCodeGraph username="Raghu_khajuria" />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
