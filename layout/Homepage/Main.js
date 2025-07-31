"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Download } from "lucide-react";
import TypingText from "@/components/typingtext";

export default function Main() {
  return (
    <div className="">
      <section
        id="home"
        className="flex justify-center items-center min-h-screen py-5 md:py-20 dark-bg-black ">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-2/3 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-blue-600">Lebron James</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-white">
                  I'm a <TypingText />
                </h2>
              </div>

              <div className="flex items-center text-gray-500 space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Lagos, Nigeria</span>
              </div>

              <p className="text-lg text-gray-600 dark:text-white leading-relaxed max-w-2xl">
                I craft elegant, responsive digital experiences that blend
                intuitive design with seamless functionality. With a focus on
                performance and accessibility, I transform complex requirements
                into clean, user-friendly interfaces.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4 w-full">
                <button
                  href='#contact'
                  className="w-full px-4 md:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
                  Contact Me
                </button>
                <Link
                  href=""
                  download
                  className="w-full flex items-center justify-center gap-2 px-3 md:px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </Link>
              </div>
            </div>

            {/* Optional Image - More subtle and professional */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/user3.jpg"
                  alt="Lebron James - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
