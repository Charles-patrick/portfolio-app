"use client";
import { MyProjects } from "@/data";
import Contact from "@/layout/Homepage/Contact";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function Page() {
  const params = useParams();
  const param = params.id;
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20">
        {/* My id is {param} */}
        {MyProjects.filter((id) => id.id === param).map((project) => (
          <div key={project.id}>
            <p className="text-3xl font-bold text-center"> {project.name}</p>
            <div className="relative w-200 h-100 max-w-[600px]  ">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div> 
          </div>
        ))}
      </div>
      <Contact />
    </>
  );
}
