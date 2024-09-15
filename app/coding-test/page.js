"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Settings,
  Code,
  Database,
  Terminal,
  BookOpen,
  Trophy,
  Users,
} from "lucide-react";
import { DocumentIcon, DocumentTextIcon } from "@heroicons/react/outline";
import Link from "next/link";

const problems = [
  {
    title: "Two Sum",
    acceptance: "49.1%",
    difficulty: "Easy",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Add Two Numbers",
    acceptance: "44.0%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    acceptance: "35.4%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Median of Two Sorted Arrays",
    acceptance: "41.4%",
    difficulty: "Hard",
    frequency: "🔥🔥",
  },
  {
    title: "Longest Palindromic Substring",
    acceptance: "34.4%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Zigzag Conversion",
    acceptance: "49.2%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Reverse Integer",
    acceptance: "29.1%",
    difficulty: "Medium",
    frequency: "🔥🔥",
  },
  {
    title: "String to Integer (atoi)",
    acceptance: "17.9%",
    difficulty: "Medium",
    frequency: "🔥🔥",
  },
  {
    title: "Palindrome Number",
    acceptance: "57.5%",
    difficulty: "Easy",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Regular Expression Matching",
    acceptance: "28.4%",
    difficulty: "Hard",
    frequency: "🔥🔥",
  },
  {
    title: "Container With Most Water",
    acceptance: "56.1%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Integer to Roman",
    acceptance: "66.2%",
    difficulty: "Medium",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Roman to Integer",
    acceptance: "62.6%",
    difficulty: "Easy",
    frequency: "🔥🔥🔥",
  },
  {
    title: "Longest Common Prefix",
    acceptance: "43.8%",
    difficulty: "Easy",
    frequency: "🔥🔥",
  },
];

export default function CodingPlatform() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-primary">JobSyCode</span>
          <a href="#" className="hover:text-primary">
            Explore
          </a>
          <a href="#" className="hover:text-primary">
            Problems
          </a>
          <a href="#" className="hover:text-primary">
            Contest
          </a>
          <a href="#" className="hover:text-primary">
            Discuss
          </a>
          <a href="#" className="hover:text-primary">
            Interview
          </a>
          <a href="#" className="hover:text-primary">
            Store
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Register</Button>
          <Button className="bg-black text-white hover:text-black">
            Sign in
          </Button>
        </div>
      </nav>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Featured Courses Carousel */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <div>
                <Button variant="outline" size="icon">
                  <ChevronLeft />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Crash Course: Algorithms</CardTitle>
                  <CardDescription>
                    Master key algorithms for coding interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-black text-white hover:text-black">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>System Design for Interviews</CardTitle>
                  <CardDescription>
                    Learn to design scalable systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-black text-white hover:text-black">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Structures Mastery</CardTitle>
                  <CardDescription>
                    Deep dive into essential data structures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-black text-white hover:text-black">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Study Plan */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Study Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2" />
                    Top Interview 150
                  </CardTitle>
                  <CardDescription>
                    Must-do list for Interview Prep
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Plan
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2" />
                    JobSyCode 75
                  </CardTitle>
                  <CardDescription>
                    Ace Coding Interview with 75 Qs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Plan
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2" />
                    SQL 50
                  </CardTitle>
                  <CardDescription>
                    Crack SQL Interview in 50 Qs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Problem Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Problem Categories</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Array (1737)</Badge>
              <Badge variant="secondary">String (721)</Badge>
              <Badge variant="secondary">Hash Table (625)</Badge>
              <Badge variant="secondary">Dynamic Programming (528)</Badge>
              <Badge variant="secondary">Math (522)</Badge>
              <Badge variant="secondary">Sorting (414)</Badge>
              <Badge variant="secondary">Greedy (380)</Badge>
              <Button variant="link" size="sm">
                Expand ▾
              </Button>
            </div>
          </div>

          {/* Problem List */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Problems</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="shell">Shell</TabsTrigger>
                <TabsTrigger value="concurrency">Concurrency</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex justify-between items-center  my-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Input
                className="max-w-sm"
                type="search"
                placeholder="Search questions"
              />
              <Button variant="" size="icon">
                <Settings />
              </Button>
            </div>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Status</th>
                    <th>Title</th>
                    <th>Solution</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {problems.map((problem, index) => (
                    <tr key={index} className="border-b">
                      <td>{problem.acceptance === "-" ? "-" : "✅"}</td>
                      <td className="py-2">
                        <Link
                          href="/test"
                          className="text-primary hover:underline"
                        >
                          {problem.title}
                        </Link>
                      </td>
                      <td className="w-12 h-12 flex items-center justify-center">
                        <DocumentTextIcon className="w-6 h-6" />
                      </td>

                      <td>{problem.acceptance}</td>
                      <td
                        className={`text-${
                          problem.difficulty === "Easy"
                            ? "green"
                            : problem.difficulty === "Medium"
                            ? "yellow"
                            : "red"
                        }-600`}
                      >
                        {problem.difficulty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 p-6 border-l">
          <Calendar
            mode="single"
            selected={date}
            a
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Trending Companies</h3>
            <Input type="search" placeholder="Search for a company..." />
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline">Meta (351)</Badge>
              <Badge variant="outline">Amazon (1381)</Badge>
              <Badge variant="outline">Google (1074)</Badge>
              <Badge variant="outline">Microsoft (615)</Badge>
              <Badge variant="outline">Apple (324)</Badge>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Weekly Contest</h3>
            <Card>
              <CardHeader>
                <CardTitle>Contest 372</CardTitle>
                <CardDescription>Starts in 2 days 15 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-black text-white hover:text-black">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
