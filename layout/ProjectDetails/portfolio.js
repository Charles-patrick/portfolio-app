import React from "react";

export default function PortfolioProjectPage() {
    return (
      <section className="max-w-2xl mx-auto py-3 md:py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
           Portfolio Website
        </h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This is my portfolio website. This space showcases my technical journey through
          education, professional work, and hands-on projects with details of each project.
          It serves as a comprehensive overview of my skills, experiences, and the technologies
          i work with  . the website is designed to be user-friendly, visually appealing, and responsive,
          ensuring a seamless experience across devices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Core Features</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
          <li>
            Responsive multi-section layout (Home, About, Projects, Contact)
          </li>
          <li>Detailed project pages with images and explanations</li>
          <li>Interactive contact form with email notifications</li>
          <li>Downloadable CV for quick access</li>
          <li>Animated elements and smooth transitions</li>
          <li>Dark mode toggle for accessibility</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Technical Stack</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="py-2 px-4 border-b">Component</th>
                <th className="py-2 px-4 border-b">Technology Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Frontend</td>
                <td className="py-2 px-4 border-b">Next.js, React</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Styling</td>
                <td className="py-2 px-4 border-b">Tailwind CSS</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Icons & Graphics</td>
                <td className="py-2 px-4 border-b">Lucide, Devicon</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Forms</td>
                <td className="py-2 px-4 border-b">Formspree</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Deployment</td>
                <td className="py-2 px-4 border-b">Vercel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
}