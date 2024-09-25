"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button 
      className={`
        text-2xl font-extrabold py-8 px-12 rounded-full
        bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
        hover:from-blue-500 hover:via-green-500 hover:to-yellow-500
        transition-all duration-300 transform hover:scale-110
        ${isHovered ? 'animate-pulse shadow-lg shadow-pink-500/50' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      EXTREME BUTTON!
    </Button>
  )
}