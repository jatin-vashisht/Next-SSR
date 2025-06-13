"use client"

import { useRef, useEffect } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        console.log("Video metadata loaded")
      })
    }
  }, [])

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
        <video ref={videoRef} controls poster={poster} className="w-full h-full" preload="metadata" autoPlay muted playsInline>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
