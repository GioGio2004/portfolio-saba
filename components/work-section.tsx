"use client"
import type React from "react"
import { Github, ExternalLink } from "lucide-react"
import { SlideInSection } from "./slide-in-section"
import type { Project } from "@/types"

export const WorkSection: React.FC = () => {
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
    <div>
      <SlideInSection>
        <h2>Selected Work</h2>
      </SlideInSection>
      {projects.map((project, index) => (
        <div key={index}>
          <div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
            <div>
              <Github />
              <ExternalLink />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}