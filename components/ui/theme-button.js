"use client";
import { Moon, Sun } from "lucide-react";

export function ThemeButton({ setShowDropdown }) {
  const showDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={showDropdown} className="">
          <Sun className="h-[1.2rem] w-[1.2rem] block dark:hidden -mb-1" />
          <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block -mb-1" />
        </button>
      </div>
    </>
  );
}
export function ThemeButtonMobile({ setShowHamburgerDropdown }) {
  const showHamburgerDropdown = () => {
    setShowHamburgerDropdown((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={showHamburgerDropdown} className="">
          <Sun className="h-[1.2rem] w-[1.2rem] block dark:hidden -mb-1" />
          <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block -mb-1" />
        </button>
      </div>
    </>
  );
}
