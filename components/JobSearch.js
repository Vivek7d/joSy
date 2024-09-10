import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function JobSearch() {
  return (
    <div className="space-y-6">
              {/* Job Card 1 */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-blue-600">Software Developer</CardTitle>
                      <p className="text-gray-600">TechCorp India</p>
                    </div>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    Jaipur, Rajasthan
                    <Briefcase className="ml-4 mr-2 h-4 w-4" />
                    2-5 years experience
                    <Calendar className="ml-4 mr-2 h-4 w-4" />
                    Posted 2 days ago
                  </div>
                  <p className="text-gray-700 mb-4">
                    We are looking for a skilled software developer to join our team and work on exciting projects...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <Button className="mt-4">Apply Now</Button>
                </CardContent>
              </Card>

              {/* Internship Card */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-green-600">Data Science Intern</CardTitle>
                      <p className="text-gray-600">AI Solutions Ltd.</p>
                    </div>
                    <Badge variant="secondary">Internship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    Remote
                    <Calendar className="ml-4 mr-2 h-4 w-4" />
                    Posted 1 week ago
                  </div>
                  <p className="text-gray-700 mb-4">
                    Exciting opportunity for students to gain hands-on experience in data science and machine learning...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                  </div>
                  <Button className="mt-4">Apply Now</Button>
                </CardContent>
              </Card>

              {/* More job/internship cards would be added here */}
            </div>
  )
}
