"use client"

import { useRef, useEffect, useState } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current
      
      const handlePlay = () => {
        setIsPlaying(true)
      }
      
      const handlePause = () => {
        setIsPlaying(false)
      }
      
      videoElement.addEventListener("play", handlePlay)
      videoElement.addEventListener("pause", handlePause)
      
      return () => {
        videoElement.removeEventListener("play", handlePlay)
        videoElement.removeEventListener("pause", handlePause)
      }
    }
  }, [])
  
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      setIsMuted(false)
      
      // Ensure video is playing when unmuted
      if (!isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Play failed after unmute:", error)
        })
      }
    }
  }

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          controls
          poster={poster}
          className="w-full h-full"
          autoPlay
          muted={isMuted}
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {isMuted && isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
            onClick={handleUnmute}
          >
            <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <span className="font-medium">Click to unmute</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
