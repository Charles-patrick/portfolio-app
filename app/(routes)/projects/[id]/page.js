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
            <div className="relative w-[300px] md:w-[600px] h-100 max-w-[600px] my-5 md:my-10">
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
      {/*PROJECT INFO SECTION*/}
      <section className="">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet dictum, urna erat dictum erat, at cursus enim erat nec
          enim. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam euismod, urna eu tincidunt
          consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod
          nunc. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum
          sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
          condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
          feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
        </p>
      </section>

      {/* SEE OTHER PROJECTS SECTION*/}
      <section>
        <div className="py-20">
          <p className="text-2xl my-5">Check this Next</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {MyProjects.filter((id) => id.id !== param)
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((project) => (
                <div key={project.id} className="rounded-md shadow-md">
                  <div className="relative w-full h-100">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                  <div className="px-4 py-2">
                    <span className="flex justify-between items-center group">
                      <p>{project.name}</p>
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight className="transition-transform duration-300 hover:-rotate-45" />
                      </Link>
                    </span>
                    <p>{project.info}</p>
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
