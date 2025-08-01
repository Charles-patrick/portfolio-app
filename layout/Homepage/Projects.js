import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MyProjects } from "@/data";

export default function Projects() {
  return (
    <div>
      <section id="projects" className=" pt-10">
        <div className="flex justify-center flex-col md:items-center mx-auto max-w-[70rem] w-full px-2 md:px-4">
          <div className="py-6">
            <div className="flex justify-between items-center ">
              <div>
                <p className="font-semibold text-3xl md:text-5xl">
                  My Projects
                </p>
              </div>
              <div>
                <Link
                  href="/projects"
                  className="flex items-center gap-1  group">
                  View All
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-rotate-45"
                  />
                </Link>
              </div>
            </div>

            {/*PROJECTS PART*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-[40px]">
              {MyProjects.slice(0, 4).map((data, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[290px] lg:w-[400px] shadow-md rounded-md transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-contain rounded-t-md bg-gray-100"
                      priority
                    />
                  </div>
                  <div className="px-3 py-3">
                    <span className="flex justify-between items-center group">
                      <p className="font-bold">{data.name}</p>
                      <Link href={`/projects/${data.id}`}>
                        <ArrowRight className="transition-transform duration-300 hover:-rotate-45" />
                      </Link>
                    </span>
                    <p>{data.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
