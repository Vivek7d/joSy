import React from 'react';
import { Search, Filter, MapPin, Briefcase, Calendar, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar'; // Importing Navbar component
import SearchFilter from '@/components/SearchFilter';
import JobSearch from '@/components/JobSearch';
import Pagination from '@/components/Pagination';

export default function JobInternshipListings() {
  return (
    <div className='flex'>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex-1">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Jobs & Internships</h1>
            
            {/* Search and Filter Section */}
            <SearchFilter/>

            {/* Job Listings */}
            <JobSearch />

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
