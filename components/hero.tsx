import React from 'react'

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-50"></div>
      <div className="relative z-10 text-center text-foreground">
        <h1 className="text-5xl font-bold">Full-Stack Developer</h1>
        <p className="mt-4 text-xl">Building modern and responsive web applications</p>
      </div>
    </div>
  )
}