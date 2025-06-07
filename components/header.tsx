"use client"

import type React from "react"
import { SlideInSection } from "./slide-in-section"


interface HeaderProps {
  onNavigate: (sectionId: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <SlideInSection direction="down">
      <header className="border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-normal">Saba Khvichia</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">React Developer</p>
          </div>
          <nav className="flex gap-8">
            <button
              onClick={() => onNavigate("work")}
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
    </SlideInSection>
  )
}
