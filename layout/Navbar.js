"use client";
import { useEffect, useState } from "react";
import { NavData } from "@/data";
import { ThemeButton, ThemeButtonMobile } from "@/components/ui/theme-button";
import { useTheme } from "next-themes";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const { setTheme } = useTheme();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setShowDropdown(false);
      setShowHamburgerDropdown(false);
    };
  }, [lastScrollY]);

  return (
    <>
      {/*DESKTOP NAVBAR*/}
      <div
        className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300
        ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }
      `}>
        <div
          className="
        hidden md:flex justify-between items-center gap-4 
        shadow-md border border-gray-200 dark:border-gray-800 
        backdrop-blur-lg bg-white dark:bg-black 
        px-6 py-2 rounded-full transition-colors 
      ">
          {NavData.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="
              flex items-center gap-2 text-sm font-medium
              text-black dark:text-white 
              hover:text-gray-700 dark:hover:text-gray-300 
              transition-colors
            ">
              <span className="capitalize whitespace-nowrap">{item.label}</span>
            </a>
          ))}
          <div className="relative">
            <ThemeButton setShowDropdown={setShowDropdown} />
            {showDropdown && (
              <div
                className="
        absolute right-0 mt-2 w-32
        bg-white dark:bg-black border border-gray-200 dark:border-gray-700
        rounded-md shadow-md z-50 text-sm">
                <button
                  onClick={() => {
                    setTheme("dark");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Dark
                </button>
                <button
                  onClick={() => {
                    setTheme("light");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Light
                </button>
                <button
                  onClick={() => {
                    setTheme("system");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  System
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*MOBILE NAVBAR*/}
      <div
        className={`
        fixed top-4 right-[20px] z-50 transition-transform duration-300
        ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }
      `}>
        <div
          className="
        flex md:hidden justify-between items-center 
        shadow-md border border-gray-200 dark:border-gray-800 
        backdrop-blur-lg bg-white dark:bg-black 
        px-3 py-0 rounded-full transition-colors 
      ">
          <Hamburger
            toggled={hamburgerOpen}
            toggle={setHamburgerOpen}
            size={20}
          />
          {hamburgerOpen && (
            <div className="absolute top-12 right-0 w-40 text-center bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md shadow-md z-50">
              {NavData.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setHamburgerOpen(false)}
                  className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 py-3">
                <ThemeButtonMobile
                  setShowHamburgerDropdown={setShowHamburgerDropdown}
                />
                {showHamburgerDropdown && (
                  <div className="mt-2 bg-white dark:bg-black rounded-b-md z-50 text-sm">
                    <button
                      onClick={() => {
                        setTheme("dark");
                        setHamburgerOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Dark
                    </button>
                    <button
                      onClick={() => {
                        setTheme("light");
                        setHamburgerOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Light
                    </button>
                    <button
                      onClick={() => {
                        setTheme("system");
                        setHamburgerOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      System
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
