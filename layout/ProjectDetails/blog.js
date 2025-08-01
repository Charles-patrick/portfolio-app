import React from "react";

export default function BlogProjectPage() {
  return (
    <section className="max-w-2xl mx-auto py-3 md:py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
        Blog Platform
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        My Blog Platform is a content management system that enables secure
        publishing and reading experiences. The app implements GitHub and
        email/password authentication, allowing users to login using their
        Github accounts and write their own blog posts. The intuitive interface
        makes publishing accessible while maintaining robust security through
        proper authentication flows and data protection.
          </p>
          
          
      <h2 className="text-xl font-semibold mt-8 mb-2">Core Features</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Dual authentication (GitHub OAuth + email/password)</li>
        <li>User blog creation/editing interface</li>
        <li>Responsive reading experience</li>
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
              <td className="py-2 px-4 border-b">Next.js</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Authentication</td>
              <td className="py-2 px-4 border-b">
                NextAuth.js (GitHub + Credentials)
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Database</td>
              <td className="py-2 px-4 border-b">MongoDB</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Styling</td>
              <td className="py-2 px-4 border-b">Tailwind CSS</td>
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
