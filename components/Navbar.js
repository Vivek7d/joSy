// components/Sidebar.js
import { HomeIcon, BriefcaseIcon, QuestionMarkCircleIcon, BookOpenIcon, UserIcon, UserAddIcon } from "@heroicons/react/outline"; // Importing Heroicons
import Link from "next/link";
import { Poppins } from 'next/font/google';
import { LogOut } from "lucide-react";

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <div className={`${poppins.className} h-screen w-64 bg-white text-gray-900 flex flex-col shadow-lg`}>
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <h1 className="text-3xl pr-14 font-bold text-gray-900">JobSy</h1>
      </div>
      <nav className="flex-grow">
        <ul className="mt-5 space-y-6">
          <li>
            <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <HomeIcon className="h-6 w-6 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/jobs-internships" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <BriefcaseIcon className="h-6 w-6 mr-3" />
              Jobs & Internships
            </Link>
          </li>
          <li>
            <Link href="/counseling" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <UserAddIcon className="h-6 w-6 mr-3" />
              Counseling
            </Link>
          </li>
          <li>
            <Link href="/resources" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <BookOpenIcon className="h-6 w-6 mr-3" />
              Resources
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <UserIcon className="h-6 w-6 mr-3" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/logout" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              <LogOut className="h-6 w-6 mr-3" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
