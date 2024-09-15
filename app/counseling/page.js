"use client";
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Search, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar"; // Importing Navbar component
import { Poppins } from 'next/font/google';


const counselors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Career Guidance",
    rating: 4.8,
    reviews: 120,
    bio: "Specializes in career guidance for IT and engineering students with 5+ years of experience.",
  },
  {
    id: 2,
    name: "Mr. Rahul Verma",
    specialty: "Academic Counseling",
    rating: 4.5,
    reviews: 85,
    bio: "Experienced in academic counseling with a focus on high school and college students.",
  },
  {
    id: 3,
    name: "Ms. Anjali Kumar",
    specialty: "Personal Development",
    rating: 4.7,
    reviews: 95,
    bio: "Provides personal development and life coaching with over 7 years of experience.",
  },
  {
    id: 4,
    name: "Dr. Amit Patel",
    specialty: "Career Guidance",
    rating: 4.9,
    reviews: 150,
    bio: "Expert in career planning and development for professionals with over 10 years of experience.",
  },
  {
    id: 5,
    name: "Ms. Neha Agarwal",
    specialty: "Academic Counseling",
    rating: 4.6,
    reviews: 100,
    bio: "Specializes in academic counseling and tutoring for STEM subjects.",
  },
  // Add more counselors if needed
];

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  // Add more time slots as needed
];

const feedbackSessions = [
  { id: 1, counselor: "Dr. Priya Sharma", date: "May 15, 2023" },
  { id: 2, counselor: "Mr. Rahul Verma", date: "May 10, 2023" },
  // Add more sessions if needed
];
const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function CounselingServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState(timeSlots);

  const handleCounselorDropdown = (event) => {
    setSelectedCounselor(event.target.value);
  };
  // Filter counselors based on the search query
  const filteredCounselors = counselors.filter((counselor) =>
    counselor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update available time slots based on selected counselor
  useEffect(() => {
    // Here, you can fetch or define available time slots based on selected counselor
    // For now, using a static list for simplicity
    setAvailableTimeSlots(timeSlots);
  }, [selectedCounselor]);

  const handleBookAppointment = () => {
    if (selectedCounselor && selectedDate && selectedTime) {
      const counselor = counselors.find(
        (c) => c.id === parseInt(selectedCounselor)
      );
      const newAppointment = {
        id: appointments.length + 1,
        counselor: counselor.name,
        date: selectedDate,
        time: selectedTime,
      };
      setAppointments([...appointments, newAppointment]);
      // Optionally, reset the form
      setSelectedCounselor("");
      setSelectedDate("");
      setSelectedTime("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <div className={`${poppins.className} min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Counseling Services
          </h1>

          <Tabs defaultValue="find-counselors" className="space-y-4">
            <TabsList>
              <TabsTrigger value="find-counselors">Find Counselors</TabsTrigger>
              <TabsTrigger value="schedule-sessions">
                Schedule Sessions
              </TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="find-counselors">
              <Card>
                <CardHeader>
                  <CardTitle>Find a Counselor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-4">
                    <Input
                      type="text"
                      placeholder="Search counselors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-grow"
                    />
                    <select className="w-full sm:w-auto">
                      <option value="">All Specialties</option>
                      <option value="career">Career Guidance</option>
                      <option value="academic">Academic Counseling</option>
                      <option value="personal">Personal Development</option>
                    </select>
                    <Button>
                      <Search className="mr-2 h-4 w-4" /> Search
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCounselors.map((counselor) => (
                      <Card key={counselor.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4 mb-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src="/placeholder.svg?height=48&width=48"
                                alt={counselor.name}
                              />
                              <AvatarFallback>
                                {counselor.name.split(" ")[0][0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-lg font-semibold">
                                {counselor.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {counselor.specialty}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-4">
                            {counselor.bio}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Star className="h-5 w-5 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm font-semibold">
                                {counselor.rating} ({counselor.reviews} reviews)
                              </span>
                            </div>
                            <Button size="sm">Book Session</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule-sessions">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Counseling Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      <select
                        className="flex-grow border rounded-md py-2 px-4 bg-white"
                        value={selectedCounselor}
                        onChange={(e) => setSelectedCounselor(e.target.value)}
                      >
                        <option value="">Select Counselor</option>
                        {counselors.map((counselor) => (
                          <option key={counselor.id} value={counselor.id}>
                            {counselor.name}
                          </option>
                        ))}
                      </select>

                      <select
                        className="flex-grow border rounded-md py-2 px-4 bg-white"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        disabled={!selectedCounselor}
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>

                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="flex-grow border rounded-md py-2 px-4 bg-white"
                      />
                    </div>

                    <Button
                      onClick={handleBookAppointment}
                      className="w-full py-2 bg-black hover:text-black text-white rounded-md"
                    >
                      Book Appointment
                    </Button>

                    {appointments.length > 0 && (
                      <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">
                          Your Appointments
                        </h2>
                        <div className="space-y-4">
                          {appointments.map((appointment) => (
                            <Card key={appointment.id}>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                  <div>
                                    <h3 className="text-lg font-semibold">
                                      {appointment.counselor} Appointment
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                      <Calendar className="inline mr-2 h-4 w-4" />{" "}
                                      {appointment.date}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <Clock className="inline mr-2 h-4 w-4" />{" "}
                                      {appointment.time}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback">
              <Card>
                <CardHeader>
                  <CardTitle>Session Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {feedbackSessions.map((session) => (
                      <Card key={session.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold">
                                {session.counselor} Session
                              </h3>
                              <p className="text-sm text-gray-500">
                                <User className="inline mr-2 h-4 w-4" />{" "}
                                {session.counselor}
                                <Calendar className="inline ml-4 mr-2 h-4 w-4" />{" "}
                                {session.date}
                              </p>
                            </div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="h-6 w-6 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                          <Textarea
                            className="w-full p-2 border rounded-md"
                            rows={4}
                            placeholder="Share your thoughts about the session..."
                          />
                          <Button className="mt-4">Submit Feedback</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
