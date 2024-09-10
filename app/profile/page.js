import React from 'react';
import { Camera, Plus, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Importing Navbar component
import ProfileForm from '@/components/ProfileForm';

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (Navbar) */}
      <Navbar />

      {/* Profile Content */}
      <ProfileForm />
    </div>
  );
}
