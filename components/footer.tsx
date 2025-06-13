export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">SSR Demo</h3>
            <p className="text-gray-300">Comparing performance on Vercel and Cloudflare</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Links</h4>
            <ul className="text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} SSR Demo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
