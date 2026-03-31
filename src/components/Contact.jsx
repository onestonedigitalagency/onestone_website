import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Contact({ isOpen, onClose }) {
  const [email, setEmail] = useState("");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const closeButtonVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      y: 200,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: 200,
      scale: 0.95,
      transition: { duration: 0.25 }
    }
  };

  // Staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 w-full min-h-screen flex flex-col justify-center items-center py-10 px-4"
          onClick={handleBackdropClick}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="mb-4 bg-white rounded-full flex items-center justify-center p-3 hover:bg-gray-100 hover:rotate-90 transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Close modal"
            variants={closeButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={28} strokeWidth={1.5} className="text-black" />
          </motion.button>

          {/* Modal Content */}
          <motion.div 
            className="w-full p-5 md:p-10 md:max-w-7xl h-fit bg-white rounded-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Row 1 - Header Section */}
              <motion.div
                id="row-1"
                className="flex text-left justify-between flex-wrap gap-4"
                variants={itemVariants}
              >
                <div id="col-1">
                  <h1 className="text-5xl md:text-7xl uppercase leading-tight">
                    Let's
                  </h1>
                  <h1 className="uppercase text-5xl md:text-7xl leading-tight">
                    <span className="lowercase italic">work</span> together
                  </h1>
                </div>
                <div
                  id="col-2"
                  className="flex flex-col justify-end items-start md:items-end"
                >
                  <a
                    href="mailto:Hello@onestone.com"
                    rel="noopener noreferrer"
                    className="text-lg md:text-3xl italic font-light hover:underline"
                  >
                    Hello@onestone.com
                  </a>
                  <p className="text-lg md:text-3xl italic font-light">
                    Uttarpardesh, India
                  </p>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="border-b border-gray-200 mt-8 mb-5"
                variants={itemVariants}
              ></motion.div>

              {/* Row 2 - Social & Newsletter */}
              <motion.div 
                id="row-2" 
                className="flex flex-col md:flex-row justify-between gap-8 pt-5"
                variants={itemVariants}
              >
                {/* Social Links */}
                <div
                  id="col-1"
                  className="md:border-r md:border-gray-300 italic text-left md:pr-10 md:self-stretch md:flex md:flex-col md:justify-top"
                >
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter Form */}
                <div
                  id="col-2"
                  className="flex flex-1 md:h-96 justify-center items-center"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center w-full max-w-xl gap-2"
                  >
                    <input
                      className="outline-none placeholder:text-gray-500 w-full text-2xl md:text-3xl italic font-light border-b border-black pb-2 focus:border-b-2 transition-all"
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Subscribe to the newsletter"
                      aria-label="Email address for newsletter subscription"
                    />
                    <motion.button
                      type="submit"
                      className="italic px-4 py-2 text-xl md:text-2xl hover:underline whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Okay
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Contact;