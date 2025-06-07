"use client"

import type React from "react"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { SlideInSection } from "./slide-in-section"
import type { Project } from "@/types"

export const WorkSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const projects: Project[] = [
    {
      title: "Web Application 01",
      tech: "React, CSS",
      description: "Personal project exploring React fundamentals",
    },
    {
      title: "Web Application 02",
      tech: "HTML, CSS, JavaScript",
      description: "Static web application with interactive features",
    },
    {
      title: "Web Application 03",
      tech: "React, JavaScript",
      description: "Component-based application with modern styling",
    },
  ]

  return (
    <section
      id="work"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <SlideInSection>
        <h3 className="text-2xl font-normal mb-12">Selected Work {hoveredProject !== null}</h3>
      </SlideInSection>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <SlideInSection key={index} delay={index * 100}>
            <div
              className="border-b border-gray-100 dark:border-gray-800 pb-8 last:border-b-0 transition-all duration-300 hover:transform hover:translate-x-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h4 className="text-lg font-normal mb-2 transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{project.tech}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </SlideInSection>
        ))}
      </div>
    </section>
  )
}
