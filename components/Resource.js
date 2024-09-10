import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Accessibility, Bell, BookOpen, Download, FileText, Filter, Plus, Search } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Resource() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex-1`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Career Resources</h1>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
        
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Input type="text" placeholder="Search resources..." className="flex-grow" />
              <select className="w-full sm:w-auto">
                <option value="">All Categories</option>
                <option value="resume">Resume Writing</option>
                <option value="interview">Interview Preparation</option>
                <option value="career">Career Planning</option>
              </select>
              <Button variant="outline">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> More Filters
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Resource Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Resource Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FileText className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Resume Writing Guide</h3>
                  <p className="text-sm text-gray-500">PDF | 2.5 MB</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                A comprehensive guide to crafting an effective resume for fresh graduates and experienced professionals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Resume</Badge>
                <Badge>Job Search</Badge>
              </div>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </CardContent>
          </Card>
          
          {/* Interview Prep Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">Interview Preparation Toolkit</h3>
                  <p className="text-sm text-gray-500">Interactive | Online</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Interactive modules covering common interview questions, body language tips, and industry-specific advice.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Interview</Badge>
                <Badge>Soft Skills</Badge>
              </div>

              <Button className="w-full">Access Resource</Button>
            </CardContent>
          </Card>
          
          {/* Career Planning Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <FileText className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold">Career Path Explorer</h3>
                  <p className="text-sm text-gray-500">Interactive Tool</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Explore various career paths based on your skills, interests, and educational background.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Career Planning</Badge>
                <Badge>Self-Assessment</Badge>
              </div>
              <Button className="w-full">Launch Tool</Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Submit Request Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-8">
              <Plus className="mr-2 h-4 w-4" /> Request New Resource
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Request a Resource</DialogTitle>
              <DialogDescription>
                Suggest a new resource or material that you&apos;d find helpful. We&apos;ll review your request and try to add it to our collection.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resource-type" className="text-right">
                  Type
                </Label>
                <select id="resource-type" className="col-span-3">
                  <option value="">Select type</option>
                  <option value="article">Article</option>
                  <option value="guide">Guide</option>
                  <option value="tool">Interactive Tool</option>
                  <option value="template">Template</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="topic" className="text-right">
                  Topic
                </Label>
                <Input id="topic" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea id="description" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button className='bg-black text-white' type="submit">Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Updates Section */}
        <Card>
          <CardHeader>
            <CardTitle>Latest Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <Badge className="mt-1">New</Badge>
                <div>
                  <h4 className="font-semibold">AI in Job Search: Leveraging Technology for Your Career</h4>
                  <p className="text-sm text-gray-600">New guide on using AI tools to enhance your job search and application process.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Badge variant="outline" className="mt-1">New</Badge>
                <div>
                  <h4 className="font-semibold">Resume Templates 2023</h4>
                  <p className="text-sm text-gray-600">Our popular resume templates have been updated with the latest design trends and best practices.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Badge className="mt-1">New</Badge>
                <div>
                  <h4 className="font-semibold">Virtual Networking Guide</h4>
                  <p className="text-sm text-gray-600">Learn how to build and maintain professional relationships in the digital age.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
