import { Camera, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
  });
export default function ProfileForm() {
  return (
    <div className={`${poppins.className} flex-1 p-6 sm:p-8 lg:p-12`}>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 p-6">Your Profile</h1>

          {/* Profile Picture */}
          <div className="flex items-center p-6 border-b border-gray-200">
            <div className="relative">
              <img
                src="./profile.jpg"
                alt="Profile picture"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <Camera className="h-5 w-5" />
                <span className="sr-only">Change profile picture</span>
              </button>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-900">Rahul Sharma</h2>
              <p className="text-gray-600">Software Developer</p>
            </div>
          </div>

          {/* Personal Information */}
          <section className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" name="address" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </form>
          </section>

          {/* Education */}
          <section className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 border rounded-lg bg-gray-50">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Bachelor of Technology</h4>
                  <p className="text-gray-600">Computer Science</p>
                  <p className="text-sm text-gray-500">Rajasthan Technical University, 2018 - 2022</p>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Delete education entry</span>
                </button>
              </div>
            </div>
            <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
              <Plus className="h-5 w-5 mr-2" />
              Add Education
            </button>
          </section>

          {/* Skills */}
          <section className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">SQL</span>
            </div>
            <form className="flex gap-2">
              <input type="text" placeholder="Add a skill" className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add</button>
            </form>
          </section>

          {/* Work Experience */}
          <section className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 border rounded-lg bg-gray-50">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Software Developer Intern</h4>
                  <p className="text-gray-600">TechCorp India</p>
                  <p className="text-sm text-gray-500">June 2021 - August 2021</p>
                  <p className="mt-2 text-gray-700">Worked on developing and maintaining web applications using React and Node.js.</p>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Delete work experience entry</span>
                </button>
              </div>
            </div>
            <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
              <Plus className="h-5 w-5 mr-2" />
              Add Work Experience
            </button>
          </section>

          {/* Save Button */}
          <div className="flex justify-end p-6">
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
              Save Profile
            </button>
          </div>
        </div>
      </div>
  )
}
