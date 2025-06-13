export const dynamic = "force-dynamic"

import { Suspense } from "react"
import ImageGallery from "@/components/image-gallery"
import VideoPlayer from "@/components/video-player"

// This is a Server Component by default in the App Router
export default async function Home() {
  // Simulate fetching data from an API with a delay to demonstrate SSR
  const data = await fetchHomeData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js SSR Demo</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
        <p className="text-lg mb-6">
          This page is server-side rendered, providing better SEO and initial load performance. We're using Next.js App
          Router which uses React Server Components by default.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Server-Side Rendering Benefits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improved SEO with fully rendered HTML</li>
            <li>Better performance metrics for initial page load</li>
            <li>Reduced client-side JavaScript</li>
            <li>Better user experience for low-powered devices</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
        <Suspense fallback={<div>Loading images...</div>}>
          <ImageGallery images={data.images} />
        </Suspense>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Video</h2>
        <VideoPlayer
          src="http://primathon-ssr.b-cdn.net/BigBuckBunny.mp4"
          poster="/placeholder.svg?height=720&width=1280"
          title="Big Buck Bunny"
        />
      </section>
    </div>
  )
}

// Simulate fetching data
async function fetchHomeData() {
  // Artificial delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    images: [
      {
        id: 1,
        src: "http://primathon-ssr.b-cdn.net/1.avif",
        alt: "Placeholder Image 1",
        width: 600,
        height: 400,
      },
      {
        id: 2,
        src: "http://primathon-ssr.b-cdn.net/2.avif",
        alt: "Placeholder Image 2",
        width: 600,
        height: 400,
      },
      {
        id: 3,
        src: "http://primathon-ssr.b-cdn.net/3.avif",
        alt: "Placeholder Image 3",
        width: 600,
        height: 400,
      },
    ],
  }
}
