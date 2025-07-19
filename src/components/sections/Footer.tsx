import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Removed ArrowUp and Heart as they are no longer used

export const Footer: React.FC = () => {
  // Removed scrollToTop function as the button is removed

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RAGHUKHAJURIA', label: 'GitHub' }, // Your GitHub link
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' }, // Replace with your LinkedIn profile
    { icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },   // Replace with your Twitter handle
    { icon: Mail, href: '#contact', label: 'Email' } // Link to the contact section
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links - now the primary content of the footer */}
        <motion.div
          className="flex justify-center space-x-6" // Centered social links
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }} // Adjusted delay
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('#') ? '_self' : '_blank'} // Open external links in new tab
              rel={href.startsWith('#') ? '' : 'noopener noreferrer'}
              className="p-3 bg-gray-800/30 backdrop-blur-lg border border-blue-500/20 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all"
              whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={href === '#contact' ? (e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } : undefined}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Removed Copyright section */}
        {/* Removed Scroll to Top Button */}
      </div>
    </footer>
  );
};