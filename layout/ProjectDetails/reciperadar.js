import React from "react";

export default function RecipeRadarProjectPage() {
  return (
    <section className="max-w-2xl mx-auto py-3 md:py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
        Recipe Radar
      </h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Recipe Radar is a dynamic meal discovery app that lets users search for
        recipes across various categories, view detailed meal information, and
        manage a personalized list of favorite meals. Powered by the MealDB API,
        the app provides instant access to thousands of recipes from around the
        world. Users can easily add meals to their favorites for quick access,
        and remove them at any time. The intuitive interface makes it simple to
        explore new dishes, organize favorites, and enjoy cooking inspiration
        tailored to your tastes.
      </p>

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
              <td className="py-2 px-4 border-b">React, Next.js</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Styling</td>
              <td className="py-2 px-4 border-b">Tailwind CSS</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">API</td>
              <td className="py-2 px-4 border-b">MealDB API</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">State Management</td>
              <td className="py-2 px-4 border-b">React useState, useEffect</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Deployment</td>
              <td className="py-2 px-4 border-b">Vercel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">Core Features</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Search for meals by name or category</li>
        <li>
          Browse meals in different categories (e.g., breakfast, dinner,
          dessert)
        </li>
        <li>View detailed information for each meal</li>
        <li>Add meals to favorites for quick access</li>
        <li>Remove meals from favorites easily</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Project Structure</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>
          <strong>components:</strong> Search bar, meal cards, favorites list
        </li>
        <li>
          <strong>pages:</strong> Main app, meal details
        </li>
        <li>
          <strong>styles:</strong> Tailwind CSS for UI
        </li>
        <li>
          <strong>utils:</strong> API calls, favorites management
        </li>
      </ul>
    </section>
  );
}
