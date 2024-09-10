"use client"
import React from 'react'
import { Bell, BookOpen, Briefcase, Search, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Dashboard() {
  // Mock data - in a real app, this would come from API calls or server-side props
  const user = {
    name: "Alice Johnson",
    progress: 75,
    savedSearches: ["Software Engineer", "Frontend Developer"]
  }

  const jobSuggestions = [
    { title: "Senior React Developer", company: "TechCorp", matchPercentage: 95 },
    { title: "Full Stack Engineer", company: "WebSolutions", matchPercentage: 88 },
    { title: "UI/UX Designer", company: "DesignHub", matchPercentage: 82 }
  ]

  const featuredJobs = [
    { title: "Data Scientist", company: "AI Innovations", type: "Full-time" },
    { title: "Marketing Intern", company: "BrandBoost", type: "Internship" },
    { title: "Product Manager", company: "SaaS Solutions", type: "Contract" }
  ]

  return (
    <div className={`${poppins.className} container mx-auto px-4 py-8`}>
      {/* Personalized Welcome Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome back, Rahul!</h1>
        <div className="flex items-center mb-4">
          <div className="relative w-1/2 mr-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" style={{ width: `${user.progress}%` }}></div>
            <div className="relative bg-gray-200 h-1 w-full"></div>
          </div>
          <span className="text-sm text-muted-foreground">Profile completion: {user.progress}%</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.savedSearches.map((search, index) => (
            <Button key={index} variant="outline" size="sm">{search}</Button>
          ))}
        </div>
      </section>

      {/* Quick Job Search Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Job Search</CardTitle>
            <CardDescription>Find your next opportunity</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-4">
              <Input placeholder="Job title, keywords, or company" className="flex-grow" />
              <Input placeholder="Location" className="w-1/4" />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Job Match Suggestions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI-Recommended Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobSuggestions.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Match:</span>
                  <span className="text-sm font-bold text-green-600">{job.matchPercentage}%</span>
                </div>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 h-1 bg-green-500" style={{ width: `${job.matchPercentage}%` }}></div>
                  <div className="relative bg-gray-200 h-1 w-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Services Widgets */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Career Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
            <BookOpen className="mb-2 h-6 w-6" />
            <span>Career Counseling</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
            <Briefcase className="mb-2 h-6 w-6" />
            <span>Job Search Resources</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
            <User className="mb-2 h-6 w-6" />
            <span>Find a Mentor</span>
          </Button>
        </div>
      </section>

      {/* Job Highlights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredJobs.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {job.type}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary">Manage Profile</Button>
          <Button variant="secondary">Update Resume</Button>
          <Button variant="secondary">View Applications</Button>
        </div>
      </section>

      {/* Notifications Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y divide-gray-200">
              <li className="p-4 flex items-center">
                <Bell className="mr-4 h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">New job match: Frontend Developer at TechStart</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </li>
              <li className="p-4 flex items-center">
                <Bell className="mr-4 h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Your application was viewed by DataCorp</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </li>
              <li className="p-4 flex items-center">
                <Bell className="mr-4 h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">New career workshop available: &quot;Mastering the Tech Interview&quot;</p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
