import { Bell, ChevronRight, Search } from 'lucide-react'
import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
  });
export default function Dashboard() {
  return (

    
      <main className={`${poppins.className} flex-1 overflow-y-auto`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome, Rahul!</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-64 pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Progress Tracker */}
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="flex justify-between items-center">
              <div className="w-2/3 bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-500">70% Complete</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Complete your profile to increase your chances of getting hired!</p>
          </div>

          {/* Job Board and AI Recommendations */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Job Board</h2>
              <div className="space-y-4">
                {/* Job listing example */}
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium text-blue-600">Software Developer</h3>
                  <p className="text-sm text-gray-500">TechCorp India • Jaipur, Rajasthan</p>
                  <p className="text-sm text-gray-600 mt-2">Full-time • 2-5 years experience</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm font-medium text-green-600">New</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                  </div>
                </div>
                {/* More job listings would go here */}
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Jobs
              </button>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium text-blue-600">Data Analyst Intern</h3>
                  <p className="text-sm text-gray-500">DataTech Solutions • Remote</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm font-medium text-purple-600">98% Match</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                  </div>
                </div>
                {/* More AI recommendations would go here */}
              </div>
            </div>
          </div>

          {/* Counseling and Profile */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Counseling & Guidance</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2">Book a Session</h3>
                  <p className="text-sm text-gray-600 mb-4">Get personalized career advice from our experts.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Schedule Now
                  </button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2">Resume Review</h3>
                  <p className="text-sm text-gray-600 mb-4">Get your resume reviewed by industry professionals.</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                    Upload Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Profile Completion</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Personal Information</span>
                  <span className="text-sm text-green-600">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Education</span>
                  <span className="text-sm text-yellow-600">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Skills</span>
                  <span className="text-sm text-red-600">Incomplete</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  Complete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
