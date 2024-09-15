import React from 'react';
import Navbar from '@/components/Navbar'; 
import ResumeScore from '@/components/ResumeScore';

export default function page() {
  return (
    <div className="flex h-auto bg-gray-100">
      {/* Sidebar (Navbar) */}
      <Navbar />

      {/* Profile Content */}
      <ResumeScore />
    </div>
  );
}
