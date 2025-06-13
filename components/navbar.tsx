import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          SSR Demo
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
