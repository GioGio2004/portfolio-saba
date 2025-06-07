import type React from "react"
import { Mail, Github } from "lucide-react"
import { SlideInSection } from "./slide-in-section"

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <SlideInSection>
        <div className="max-w-2xl">
          <h3 className="text-2xl font-normal mb-8">Let&apos;s Connect</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            I&apos;m always interested in learning opportunities, internships, and projects where I can apply and grow
            my React development skills.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:saba.khvichia@example.com"
              className="inline-flex items-center gap-2 text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </SlideInSection>
    </section>
  )
}
