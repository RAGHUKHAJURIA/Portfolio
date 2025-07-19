import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Send, MapPin, Phone, Mail as MailIcon } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ContactFormData } from "../../types";

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "rgba(59, 130, 246, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          color: "#1f2937",
        },
      });

      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Banglore, India",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "6006863792",
    },
    {
      icon: MailIcon,
      title: "Email",
      details: "emaple@domain.com",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </motion.div>

          <div className="gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <motion.input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/30 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all text-white placeholder-gray-400"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <motion.input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/30 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all text-white placeholder-gray-400"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <motion.textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800/30 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 outline-none transition-all resize-none text-white placeholder-gray-400"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Send className="mr-2" size={20} />
                        </motion.div>
                      ) : (
                        <Send className="mr-2" size={20} />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
