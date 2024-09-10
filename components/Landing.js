"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  BriefcaseIcon,
  LightbulbIcon,
  GraduationCapIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RocketIcon,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const jobSuggestions = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "Marketing Specialist",
  "Financial Analyst",
];

export default function Landing() {
    const [searchTerm, setSearchTerm] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Software Engineer",
      quote:
        "JobSy's AI matching helped me land my dream job at a top tech company!",
    },
    {
      name: "Michael R.",
      role: "Marketing Manager",
      quote:
        "The career resources on JobSy were invaluable in my professional development.",
    },
    {
      name: "Emily L.",
      role: "Recent Graduate",
      quote:
        "Thanks to JobSy's career support, I found an amazing entry-level position in my field.",
    },
  ];

  const features = [
    {
      icon: <BriefcaseIcon className="w-12 h-12 text-blue-600" />,
      title: "AI-Driven Job Matching",
      description:
        "Our advanced algorithms ensure you find the most relevant job opportunities.",
    },
    {
      icon: <LightbulbIcon className="w-12 h-12 text-blue-600" />,
      title: "Extensive Resources",
      description:
        "Access a vast library of resources to enhance your skills and knowledge.",
    },
    {
      icon: <GraduationCapIcon className="w-12 h-12 text-blue-600" />,
      title: "Expert Counseling",
      description:
        "Get personalized career advice from industry professionals.",
    },
    // New Features
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Networking Opportunities",
      description:
        "Connect with a community of professionals and expand your network.",
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Highly Rated",
      description:
        "Our platform is highly rated by users for its effectiveness and user experience.",
    },
    {
      icon: <RocketIcon className="w-12 h-12 text-blue-600" />,
      title: "Career Growth",
      description:
        "Accelerate your career with our innovative tools and resources.",
    },
  ];

  const jobSuggestions = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "Marketing Specialist",
    "Financial Analyst",
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${poppins.className}`}>
       <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo-1.png" // Replace with the correct path to your logo
              alt="JobSy Logo"
              width={120} // Adjust the width as needed
              height={40} // Adjust the height as needed
              className="cursor-pointer filter invert contrast-200"
            />
          </div>
          <div className="flex space-x-6">
            <Link href="/dashboard" className="text-white hover:text-blue-300">
              Jobs
            </Link>
            <Link href="/dashboard" className="text-white hover:text-blue-300">
              Internships
            </Link>
            <Link href="/dashboard" className="text-white hover:text-blue-300">
              Resources
            </Link>
            <Link href="/dashboard" className="text-white hover:text-blue-300">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-12 relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 ">
        <motion.div
          animate={{
            scale: [1, 1.1, 1.2, 1.1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute w-72 h-72 bg-white opacity-10"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Find Your Dream Job with JobSy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 font-semibold"
          >
            AI-powered job matching for your perfect career fit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
            ><Link href="/dashboard">Get Started</Link>
              
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              <Link href="/dashboard">Explore Opportunities</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className={`${poppins.className} py-16 bg-gray-100`}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose JobSy
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl font-semibold mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-600"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Functionality */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Discover Your Next Career Move
          </motion.h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Input
                className="w-full p-4 text-lg rounded-full pr-16 shadow-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search for jobs, skills, or companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                className=" absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full  text-white shadow-md"
                size="icon"
              >
                <SearchIcon className="w-5 h-5 text-blue-900" />
              </Button>
            </div>
            {searchTerm && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute w-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
              >
                <CardContent className="p-0">
                  <ul>
                    {jobSuggestions
                      .filter((job) =>
                        job.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((job, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                          onClick={() => setSearchTerm(job)}
                        >
                          {job}
                        </motion.li>
                      ))}
                  </ul>
                </CardContent>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <p className="text-xl italic mb-4">
                {testimonials[currentTestimonial].quote}
              </p>
              <p className="font-semibold text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-500">
                {testimonials[currentTestimonial].role}
              </p>
            </motion.div>
            <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
              <Button
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-200"
                onClick={() =>
                  setCurrentTestimonial(
                    (currentTestimonial - 1 + testimonials.length) %
                      testimonials.length
                  )
                }
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-200"
                onClick={() =>
                  setCurrentTestimonial(
                    (currentTestimonial + 1) % testimonials.length
                  )
                }
              >
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About JobSy</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} JobSy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
