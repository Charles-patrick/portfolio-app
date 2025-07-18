"use client";
const { cva } = require("class-variance-authority");
const React = require("react");
const Link = require("next/link");

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

// React component version
function Button({ label, intent, size, href, ...props }) {
  const className = button({ intent, size });
  if (href) {
    // If href is provided, render as a link styled as a button
    return (
      <Link href={href} legacyBehavior>
        <a className={className} {...props}>
          {label}
        </a>
      </Link>
    );
  }
  // Otherwise, render as a button
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
}

module.exports = Button;
