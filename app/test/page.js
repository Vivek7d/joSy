"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
  Play,
  Check,
  MessageSquare,
  Settings,
  List,
  Shuffle,
  UploadIcon,
  UploadCloudIcon,
} from "lucide-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript"; // Import the language mode
import "ace-builds/src-noconflict/theme-dracula"; // Import the theme

export default function ProblemInterface() {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;
        int n=nums.size();
        for(int i=0;i<n;i++){
            int num= nums[i];
            int moreNeeded= target-num;
            if(mp.find(moreNeeded)!=mp.end()){
                return {mp[moreNeeded],i};
            }
            mp[num]=i;
        }
        return {-1,-1}
    }
};`);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-300">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-2 bg-[#282828] border-b border-[#3e3e3e]">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">⦿</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <List className="h-4 w-4 mr-2" />
            Problem List
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-green-500 hover:text-green-400"
          >
            <UploadCloudIcon className="h-4 w-4 mr-2" />
            Submit
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Settings className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            Register
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            Sign in
          </Button>
          <Button
            size="sm"
            className="bg-[#f0a500] text-white hover:bg-[#f0a500]/90"
          >
            Premium
          </Button>
        </div>
      </nav>

      <div className="flex">
        {/* Problem Description */}
        <div className="w-1/2 p-4 border-r border-[#3e3e3e]">
          <Tabs defaultValue="description">
            <TabsList className="border-b border-[#3e3e3e] bg-transparent">
              <TabsTrigger
                value="description"
                className="text-gray-400 hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#f0a500]"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="editorial"
                className="text-gray-400 hover:text-white data-[state=active]:text-white"
              >
                Editorial
              </TabsTrigger>
              <TabsTrigger
                value="solutions"
                className="text-gray-400 hover:text-white data-[state=active]:text-white"
              >
                Solutions
              </TabsTrigger>
              <TabsTrigger
                value="submissions"
                className="text-gray-400 hover:text-white data-[state=active]:text-white"
              >
                Submissions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <h1 className="text-2xl font-bold mb-4 text-white">1. Two Sum</h1>
              <div className="flex space-x-2 mb-4">
                <Badge className="bg-[#00af9b] text-white">Easy</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 border-[#3e3e3e] hover:text-white hover:border-white"
                >
                  Topics
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 border-[#3e3e3e] hover:text-white hover:border-white"
                >
                  Companies
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 border-[#3e3e3e] hover:text-white hover:border-white"
                >
                  Hint
                </Button>
              </div>
              <p className="mb-4">
                Given an array of integers{" "}
                <code className="text-[#f0a500]">nums</code> and an integer{" "}
                <code className="text-[#f0a500]">target</code>, return{" "}
                <em>
                  indices of the two numbers such that they add up to{" "}
                  <code className="text-[#f0a500]">target</code>
                </em>
                .
              </p>
              <p className="mb-4">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use the{" "}
                <em>same</em> element twice.
              </p>
              <p className="mb-4">You can return the answer in any order.</p>
              <h2 className="text-xl font-bold mt-6 mb-2 text-white">
                Example 1:
              </h2>
              <pre className="bg-[#282828] p-4 rounded-md">
                <strong>Input:</strong> nums = [2,7,11,15], target = 9{"\n"}
                <strong>Output:</strong> [0,1]{"\n"}
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
                return [0, 1].
              </pre>
              <h2 className="text-xl font-bold mt-6 mb-2 text-white">
                Example 2:
              </h2>
              <pre className="bg-[#282828] p-4 rounded-md">
                <strong>Input:</strong> nums = [3,2,4], target = 6{"\n"}
                <strong>Output:</strong> [1,2]
              </pre>
              <h2 className="text-xl font-bold mt-6 mb-2 text-white">
                Example 3:
              </h2>
              <pre className="bg-[#282828] p-4 rounded-md">
                <strong>Input:</strong> nums = [3,3], target = 6{"\n"}
                <strong>Output:</strong> [0,1]
              </pre>
              <h2 className="text-xl font-bold mt-6 mb-2 text-white">
                Constraints:
              </h2>
              <ul className="list-disc pl-5">
                <li className="mb-2">
                  <code className="text-[#f0a500]">
                    2 &le; nums.length &le; 10^4
                  </code>
                </li>
                <li className="mb-2">
                  <code className="text-[#f0a500]">
                    -10^9 &le; nums[i] &le; 10^9
                  </code>
                </li>
                <li className="mb-2">
                  <code className="text-[#f0a500]">
                    -10^9 &le; target &le; 10^9
                  </code>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="editorial" className="mt-4">
              <h2 className="text-xl font-bold mb-2 text-white">Editorial</h2>
              <h3 className="text-lg font-semibold text-white">
                Approach 1: Brute Force
              </h3>
              <h4 className="text-md font-semibold text-white">Algorithm</h4>
              <p className="mb-4 text-white">
                The brute force approach is simple. Loop through each element x
                and find if there is another value that equals to target−x.
              </p>
              <h4 className="text-md font-semibold text-white">
                Implementation
              </h4>
              <p className="mb-4 text-white">
                The brute force approach can be implemented by using a nested
                loop to check every possible pair of elements in the array.
              </p>
              <h4 className="text-md font-semibold text-white">
                Complexity Analysis
              </h4>
              <p className="mb-4 text-white">
                Time complexity: O(n<sup>2</sup>). For each element, we try to
                find its complement by looping through the rest of the array
                which takes O(n) time. Therefore, the time complexity is O(n
                <sup>2</sup>).
              </p>
              <p className="mb-4 text-white">
                Space complexity: O(1). The space required does not depend on
                the size of the input array, so only constant space is used.
              </p>
            </TabsContent>
            {/* Add other TabsContent here for "editorial", "solutions", and "submissions" */}
          </Tabs>
        </div>

        {/* Code Editor */}
        <div className="w-1/2 p-4">
          <Card className="bg-[#282828] border-[#3e3e3e]">
            <CardHeader>
              <CardTitle className="text-white">Your Code</CardTitle>
            </CardHeader>
            <CardContent>
              <AceEditor
                mode={language}
                theme="dracula"
                name="codeEditor"
                value={code}
                onChange={setCode}
                editorProps={{ $blockScrolling: true }}
                style={{ width: "100%", height: "40vh" }} // Adjust the height and width as needed
              />
            </CardContent>
          </Card>
          <Card className="mt-4 bg-[#282828] border-[#3e3e3e]">
            <CardHeader>
              <CardTitle className="text-gray-300 text-sm font-normal">
                Testcase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="case1">
                <TabsList className="bg-[#1a1a1a]">
                  <TabsTrigger
                    value="case1"
                    className="text-gray-400 hover:text-white data-[state=active]:text-white data-[state=active]:bg-[#282828]"
                  >
                    Case 1
                  </TabsTrigger>
                  <TabsTrigger
                    value="case2"
                    className="text-gray-400 hover:text-white"
                  >
                    Case 2
                  </TabsTrigger>
                  <TabsTrigger
                    value="case3"
                    className="text-gray-400 hover:text-white"
                  >
                    Case 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="case1">
                  <div className="space-y-2 text-gray-300 mt-2">
                    <div>
                      <strong>nums = </strong>
                      <code className="bg-[#1a1a1a] p-1 rounded">
                        [2,7,11,15]
                      </code>
                    </div>
                    <div>
                      <strong>target = </strong>
                      <code className="bg-[#1a1a1a] p-1 rounded">9</code>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
