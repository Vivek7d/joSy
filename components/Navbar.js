// components/Sidebar.js
import { HomeIcon, BriefcaseIcon, BookOpenIcon, UserIcon, UserAddIcon } from "@heroicons/react/outline"; // Importing Heroicons
import Link from "next/link";
import { Poppins } from 'next/font/google';
import { LogOut } from "lucide-react";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <div className={`${poppins.className} h-[180vh] w-64 bg-[#f7fee7] text-gray-900 flex flex-col `}>
      <div className="flex items-center justify-center h-20 pr-16 pt-3 border-gray-200">
        <Link href="/">
          <Image
            src="/logo-1.png" // Replace with the correct path to your logo
            alt="JobSy Logo"
            width={120} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="cursor-pointer"
          />
        </Link>
      </div>
      <nav className="flex-grow bg-[#f7fee7] ">
        <ul className="mt-5 space-y-6 font-semibold">
          <li>
            <Link href="/dashboard" className="flex  items-center px-4 py-2 text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <HomeIcon className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/jobs-internships" className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <BriefcaseIcon className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Jobs & Internships
            </Link>
          </li>
          <li>
            <Link href="/counseling" className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <UserAddIcon className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Counseling
            </Link>
          </li>
          <li>
            <Link href="/resources" className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <BookOpenIcon className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Resources
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <UserIcon className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/logout" className="flex items-center px-4 py-2  text-gray-700 hover:bg-[#f7fee7] hover:text-blue-600">
              <LogOut className="h-6 w-6 mr-3 hover:bg-[#f7fee7]" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
