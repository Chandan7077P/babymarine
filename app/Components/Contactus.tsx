"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const fadeInVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Contactus: React.FC = () => {
  return (
    <section id="contact-us" className="py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // ✅ updated
          className="text-3xl font-bold text-blue-900 mb-8 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // ✅ updated
          transition={{ delay: 0.15 }}
          className="md:w-1/2 text-2xl text-blue-900 font-bold text-center md:text-left mb-6"
        >
          Get in Touch
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Details */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // ✅ updated
            transition={{ delay: 0.3 }}
            className="md:w-1/2 space-y-6 text-left mt-6"
          >
            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-6 h-6 text-blue-950" />
              <p className="text-lg font-medium text-blue-950">
                <span className="font-bold">Address:</span> Thoppumpady, Kochi,
                Kerala, India - 682005
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-blue-950" />
              <p className="text-lg font-medium text-blue-950">
                <span className="font-bold">Phone:</span> +91 9349513602
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-blue-950" />
              <p className="text-lg font-medium text-blue-950">
                <span className="font-bold">Email:</span>{" "}
                seafood@babymarineintl.com
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // ✅ updated
            transition={{ delay: 0.45 }}
            className="md:w-1/2 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                <span className="font-medium text-blue-950">Your Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                <span className="font-medium text-blue-950">Your Email</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                <span className="font-medium text-blue-950">Your Query</span>
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 bg-blue-950 hover:text-white hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full shadow"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
