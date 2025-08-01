"use client";
import { MyProjects } from "@/data";
import Contact from "@/layout/Homepage/Contact";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const params = useParams();
  const param = params.id;
  return (
    <>
      <div className="flex flex-col justify-center items-center py-5 md:py-15">
        {/* My id is {param} */}
        {MyProjects.filter((id) => id.id === param).map((project) => (
          <div key={project.id}>
            <p className="text-3xl font-bold text-center"> {project.name}</p>
            <div className="relative my-5 md:my-10 ">
              <Image
                src={project.img}
                alt={project.name}
                width={600}
                height={300}
                // fill
                className="object-cover rounded-md"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-4 max-w-[600px] mx-auto">
              <Link href={project.link} target="_blank" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
                Visit Website
                <ArrowRight className="transition-transform duration-300 hover:-rotate-45" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/*PROJECT CONTENT SECTION*/}
      <section className="">
        {MyProjects.filter((id) => id.id === param).map((project) => (
          <div key={project.id}>{project.content}</div>
        ))}
      </section>

      {/* SEE OTHER PROJECTS SECTION*/}
      <section>
        <div className="py-20">
          <p className="text-2xl my-5">Check this Next</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {MyProjects.filter((id) => id.id !== param)
              .slice(0, 3)
              .map((project) => (
                <div
                  key={project.id}
                  className="rounded-md shadow-md overflow-hidden">
                  {/* Image Container with Background */}
                  <div className="relative bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-contain rounded-t-md p-1"
                      priority
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="px-4 py-2">
                    <span className="flex justify-between items-center group">
                      <p className="font-medium">{project.name}</p>
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight className="transition-transform duration-300 hover:-rotate-45" />
                      </Link>
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {project.info}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
