import React from "react";

export default function KadickProjectPage() {
  return (
    <section className="max-w-2xl mx-auto py-3 md:py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
        Kadick Integrated Website
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        As a member of the development team, I contributed to the Kadick
        Integrated agency banking website , a comprehensive platform designed to
        showcase the company’s services, products, and solutions in the
        financial and telecommunications sectors. The site serves as a digital
        hub for Kadick’s agency banking operations, providing clear information
        about our offerings, including mobile money, bill payments, airtime
        top-ups, and other telco-related services. Visitors can explore detailed
        product pages, learn about our business model, and access resources
        tailored for agents and partners. The website is built to drive
        engagement, support onboarding, and reflect Kadick’s commitment to
        innovation and financial inclusion in Nigeria.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Core Features</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Responsive multi-page layout (Home, About, Services, Contact)</li>
        <li>Interactive contact form with email notifications</li>
        <li>Service showcase with dynamic cards</li>
        <li>
          Product pages for agency banking, telco services, and payment
          solutions
        </li>
        <li>Modern, branded design with custom graphics</li>
        <li>Resources and onboarding information for agents and partners</li>
        <li>Clear presentation of business model and value proposition</li>
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
              <td className="py-2 px-4 border-b">Forms</td>
              <td className="py-2 px-4 border-b">React Hook Form</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Deployment</td>
              <td className="py-2 px-4 border-b">Heroku</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
