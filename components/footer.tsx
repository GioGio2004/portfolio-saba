import type React from "react"
import { SlideInSection } from "./slide-in-section"

export const Footer: React.FC = () => {
  return (
    <SlideInSection>
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Saba Khvichia</p>
        </div>
      </footer>
    </SlideInSection>
  )
}
