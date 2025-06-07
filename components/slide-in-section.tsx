"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { SlideInSectionProps } from "@/types"

export const SlideInSection: React.FC<SlideInSectionProps> = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    const element = elementRef.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay])

  const getTransform = (): string => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "translateX(-50px)"
        case "right":
          return "translateX(50px)"
        case "down":
          return "translateY(-50px)"
        default:
          return "translateY(50px)"
      }
    }
    return "translateY(0)"
  }

  return (
    <div
      ref={elementRef}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {children}
    </div>
  )
}
