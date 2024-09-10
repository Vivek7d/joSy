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
import Landing from "@/components/Landing";

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

export default function Home() {
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
    <div className={`${poppins.className} min-h-screen flex flex-col`}>
      {/* Navbar */}
      <Landing />
    </div>
  );
}
