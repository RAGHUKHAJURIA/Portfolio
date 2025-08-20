import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Send } from "lucide-react";
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
      const apiUrl = import.meta.env.VITE_SHEETDB_API_URL;

      if (!apiUrl) {
        toast.error("Google Sheet API URL is missing. Check your .env file.");
        return;
      }

      await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString(),
        }),
      });

      toast.success("Your message has been sent successfully!");

      reset();
    } catch (error) {
      console.error("Error submitting form to Google Sheet:", error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 relative">
      
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937", 
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 16px",
          },
        }}
        containerStyle={{
          marginTop: "80px", 
        }}
      />

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
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send me a message
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Message */}
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

                  {/* Submit */}
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
                      {isSubmitting ? "Saving..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
