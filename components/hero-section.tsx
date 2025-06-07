"use client"

import type React from "react"

import { ArrowUpRight } from "lucide-react"
import { SlideInSection } from "./slide-in-section"
import { TypingText } from "./typing-text"
import Image from "next/image"

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const typingTexts: string[] = [
    "Currently studying at Georgian Technical University (3.7 GPA) while exploring modern web development.",
    "Passionate about creating clean, functional applications with React and JavaScript.",
    "Motivated to grow as a developer and contribute to meaningful projects.",
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SlideInSection direction="left">
            <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-8">
              Student developer learning React and building web experiences
            </h2>
          </SlideInSection>

          <SlideInSection direction="left" delay={200}>
            <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 min-h-[120px]">
              <TypingText texts={typingTexts} speed={50} deleteSpeed={30} pauseTime={3000} />
            </div>
          </SlideInSection>

          <SlideInSection direction="left" delay={400}>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate("work")}
                className="inline-flex items-center gap-2 text-sm border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View Work <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </SlideInSection>
        </div>

        <SlideInSection direction="right" delay={300}>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center transition-colors duration-300 relative overflow-hidden">
                  <Image 
                    src="/saba image.jpg"
                    alt="Profile image"
                    width={400}
                    height={250}
                  />
               
            </div>
          </div>
        </SlideInSection>
      </div>
    </section>
  )
}
