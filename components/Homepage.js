import React from 'react';
import { Bell, BookOpen, Briefcase, ChevronRight, FileText, Layout, MessageSquare, Search, User } from 'lucide-react';
import Navbar from './Navbar';
import { Poppins } from 'next/font/google';
import Dashboard from './Dashboard';

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Homepage() {
  return (
    <div className="flex h-auto space-y-3 bg-gray-100">
      {/* Sidebar */}
      <Navbar />
      <Dashboard />
    </div>
  );
}
