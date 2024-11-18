import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll for the "Experience" link with adjusted scroll position
  const handleExperienceScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default link behavior
    const experienceElement = document.getElementById("experience");
    if (experienceElement) {
      experienceElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the start of the section
        inline: "nearest",
      });

      // Adjust the scroll position after scrolling to the experience section
      window.scrollBy(0, -1750); // Adjust scroll by 100px upwards to offset
    }
    setIsOpen(false); // Close the dropdown after clicking the link
  };

  // Similar scroll function for other links
  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown when any link is clicked
  };

  return (
    <footer id="footer" className="w-full py-8 flex flex-col items-center relative">
      {/* Toggle Button for Mobile View */}
      <button
        className="md:hidden text-lg font-bold mb-4"
        onClick={toggleDropdown}
      >
        {isOpen ? "Hide Options" : "Show Options"}
      </button>

      {/* Expandable Links Container for Mobile View */}
      {isOpen && (
        <div className="absolute bottom-16 bg-gray-100 rounded-lg p-4 shadow-lg mb-4 md:hidden">
          <div className="flex flex-col items-center">
            <Link
              href="#intro"
              onClick={handleLinkClick} // Close dropdown when clicked
              className="text-base hover:text-primary/80 transition-colors py-2"
            >
              Intro
            </Link>
            <Link
              href="#experience"
              onClick={handleExperienceScroll} // Custom scroll for Experience link
              className="text-base hover:text-primary/80 transition-colors py-2"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick} // Close dropdown when clicked
              className="text-base hover:text-primary/80 transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick} // Close dropdown when clicked
              className="text-base hover:text-primary/80 transition-colors py-2"
            >
              Contact
            </Link>
          </div>
          {/* Hide Options Button */}
          <button
            className="mt-4 text-base font-bold text-blue-600 hover:underline"
            onClick={toggleDropdown}
          >
            Hide Options
          </button>
        </div>
      )}

      {/* Navigation Links for Desktop View */}
      <nav className={`hidden md:flex md:gap-8 items-center`}>
        <Link
          href="#intro"
          onClick={handleLinkClick} // Close dropdown when clicked
          className="text-base hover:text-primary/80 transition-colors"
        >
          Intro
        </Link>
        <Link
          href="#aboutme"
          onClick={handleLinkClick} // Close dropdown when clicked
          className="text-base hover:text-primary/80 transition-colors"
        >
          About Me
        </Link>
        <Link
          href="#experience"
          onClick={handleExperienceScroll} // Custom scroll for Experience link
          className="text-base hover:text-primary/80 transition-colors"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          onClick={handleLinkClick} // Close dropdown when clicked
          className="text-base hover:text-primary/80 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          onClick={handleLinkClick} // Close dropdown when clicked
          className="text-base hover:text-primary/80 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Copyright Section */}
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Copyright © {new Date().getFullYear()} Nedas Jaronis. All Rights Reserved.
      </p>
    </footer>
  );
}
