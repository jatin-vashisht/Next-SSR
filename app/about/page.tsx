import { Suspense } from "react"
import ImageGallery from "@/components/image-gallery"

// This is a Server Component by default in the App Router
export default async function About() {
  // Simulate fetching data from an API with a delay to demonstrate SSR
  const data = await fetchAboutData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Our SSR Demo</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          This demo project showcases the power of Server-Side Rendering (SSR) in Next.js and compares deployment
          performance between Vercel and Cloudflare.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Project Goals</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Demonstrate SSR capabilities in Next.js</li>
            <li>Compare performance metrics between hosting providers</li>
            <li>Showcase caching strategies</li>
            <li>Evaluate edge computing benefits</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <Suspense fallback={<div>Loading team photos...</div>}>
          <ImageGallery images={data.teamImages} />
        </Suspense>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Next.js (App Router)</li>
              <li>React Server Components</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Deployment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vercel (serverless)</li>
              <li>Cloudflare Pages (edge)</li>
              <li>Caching strategies</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

// Simulate fetching data
async function fetchAboutData() {
  // Artificial delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    teamImages: [
      {
        id: 1,
        src: "/placeholder.svg?height=400&width=400",
        alt: "Team Member 1",
        width: 400,
        height: 400,
      },
      {
        id: 2,
        src: "/placeholder.svg?height=400&width=400",
        alt: "Team Member 2",
        width: 400,
        height: 400,
      },
      {
        id: 3,
        src: "/placeholder.svg?height=400&width=400",
        alt: "Team Member 3",
        width: 400,
        height: 400,
      },
    ],
  }
}
