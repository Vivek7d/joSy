'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const fetchJobListings = (skills) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "Frontend Developer", company: "TechCorp", skills: ["React", "Next.js", "TypeScript"] },
        { title: "Full Stack Engineer", company: "WebSolutions", skills: ["React", "Express", "Node.js"] },
        { title: "React Developer", company: "AppMakers", skills: ["React", "Redux", "CSS"] },
        { title: "JavaScript Engineer", company: "CodeCrafters", skills: ["JavaScript", "React", "Express"] },
      ]);
    }, 1000);
  });
};

// Function to calculate resume score based on skills (out of 10)
const calculateResumeScore = (skills) => {
  const baseScore = 5;
  const skillScore = skills.length * 0.5;
  return Math.min(baseScore + skillScore, 10);
};

export default function ResumeScore() {
  const [resumeScore, setResumeScore] = useState(0);
  const [jobListings, setJobListings] = useState([]);
  const skills = ["React", "Next.js", "Express"];

  useEffect(() => {
    setResumeScore(calculateResumeScore(skills));
    fetchJobListings(skills).then(setJobListings);
  }, []);

  return (
    <div className={`${poppins.className} max-w-4xl mx-auto p-4 space-y-6 h-auto bg-gray-100`}>

      <div class="flex justify-center items-center space-x-10 my-10">
      <Card>
        <CardHeader>
          <CardTitle>Resume Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold">{resumeScore.toFixed(1)}/10</span>
          </div>
          <Progress value={resumeScore * 10} className="w-full" />
          <p className="mt-2 text-sm text-muted-foreground">Based on your skills</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 ">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-gray-200 rounded-xl">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      </div>
 

      <Card>
        <CardHeader>
          <CardTitle>Relevant Job Openings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {jobListings.map((job, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs bg-gray-200 rounded-xl">{skill}</Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
