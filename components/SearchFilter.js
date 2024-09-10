import { Filter, Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function SearchFilter() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="relative col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search jobs or internships..."
                    className="pl-10 w-full"
                  />
                </div>
                <select className="w-full md:w-auto">
                  <option value="">All Job Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                </select>
                <select className="w-full md:w-auto">
                  <option value="">All Locations</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Button variant="outline" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
                <span className="text-sm text-gray-500">Showing 1-10 of 56 results</span>
              </div>
            </div>
  )
}
