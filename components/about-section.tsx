

import type React from "react"
import { SlideInSection } from "./slide-in-section"

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <SlideInSection direction="left">
          <div>
            <h3 className="text-2xl font-normal mb-8">About</h3>
            <div className="space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                I&apos;m a student at Georgian Technical University with a 3.7 GPA, currently exploring the world of web
                development with a focus on React and modern JavaScript.
              </p>
              <p>
                My journey started with HTML and CSS, progressed through JavaScript fundamentals, and now I&apos;m
                building practical applications with React to strengthen my skills.
              </p>
              <p>
                I&apos;m motivated to grow as a developer and contribute to meaningful projects while continuing my
                education and expanding my technical knowledge.
              </p>
            </div>
          </div>
        </SlideInSection>
        <SlideInSection direction="right" delay={200}>
          <div>
            <h4 className="text-lg font-normal mb-6">Skills</h4>
            <div className="space-y-4 text-sm">
              <div className="transform transition-transform duration-300 hover:translate-x-2">
                <p className="mb-2 font-medium">Frontend</p>
                <p className="text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript, React (basics)</p>
              </div>
              <div className="transform transition-transform duration-300 hover:translate-x-2">
                <p className="mb-2 font-medium">Languages</p>
                <p className="text-gray-600 dark:text-gray-400">English (C1 - fluent speaking, C1 grammar)</p>
              </div>
              <div className="transform transition-transform duration-300 hover:translate-x-2">
                <p className="mb-2 font-medium">Education</p>
                <p className="text-gray-600 dark:text-gray-400">Georgian Technical University (3.7 GPA)</p>
              </div>
            </div>
          </div>
        </SlideInSection>
      </div>
    </section>
  )
}
