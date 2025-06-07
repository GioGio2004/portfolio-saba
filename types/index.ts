import type React from "react"
export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface TypingTextProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}

export interface SlideInSectionProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export interface Project {
  title: string
  tech: string
  description: string
}
