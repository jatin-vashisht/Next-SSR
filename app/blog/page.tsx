import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  readTime: string
}

// This is a Server Component by default in the App Router
export default async function Blog() {
  // Simulate fetching data from an API with a delay to demonstrate SSR
  const posts = await fetchBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="mb-8">
        <p className="text-lg">Explore our latest articles about web performance, SSR, and deployment strategies.</p>
      </div>

      <Suspense fallback={<div>Loading blog posts...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
          Read more →
        </Link>
      </div>
    </div>
  )
}

// Simulate fetching data
async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Artificial delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    {
      id: 1,
      title: "Understanding Server-Side Rendering in Next.js",
      excerpt: "Learn how SSR works in Next.js and why it's beneficial for your web applications.",
      date: "June 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Vercel vs Cloudflare: Performance Showdown",
      excerpt: "A detailed comparison of performance metrics between Vercel and Cloudflare deployments.",
      date: "June 8, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Optimizing Caching Strategies for Edge Deployments",
      excerpt: "Best practices for implementing effective caching strategies at the edge.",
      date: "June 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Power of Incremental Static Regeneration",
      excerpt: "How ISR combines the benefits of static generation and server-side rendering.",
      date: "June 1, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Measuring Web Vitals for Better User Experience",
      excerpt: "A guide to understanding and improving Core Web Vitals in your applications.",
      date: "May 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Building for the Edge: Best Practices",
      excerpt: "Learn how to optimize your applications for edge computing environments.",
      date: "May 25, 2025",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "10 min read",
    },
  ]
}
