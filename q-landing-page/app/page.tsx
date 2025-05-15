import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with gradient background */}
      <header className="bg-gradient-to-r from-[#FFA07A] to-[#FF1493] p-4 flex items-center justify-between">
        {/* Hamburger menu */}
        <button className="text-white">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Logo */}
        <div className="text-white text-xl font-bold ml-4">HAROTECH</div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/contact" className="text-white">
            Contact Us
          </Link>
          <Link href="/price" className="text-white">
            Price
          </Link>

          {/* Search bar */}
          <div className="relative">
            <input type="text" placeholder="Search" className="px-4 py-2 rounded-md w-64 text-gray-800" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-12 py-8">
        {/* Hero section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Left column */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-medium text-gray-700 mb-4">
              Precision-
              <br />
              Engineered Tools
            </h2>
            <p className="text-gray-600 mb-6">
              We deliver high-performance Hydricylic Machines and Semiconductor tools, rigorously tested for
              industrial-grade durability and accuracy.
            </p>
            <button className="bg-[#FF5A5F] text-white px-8 py-3 rounded-full hover:bg-[#FF4246] transition">
              SHOP MORE ....
            </button>
          </div>

          {/* Middle column with icons */}
          <div className="md:col-span-4 flex flex-col">
              <h2 className="text-4xl font-medium text-gray-700 mb-4">
              Advanced
              <br />
              Manufacturing
            </h2>
            <p className="text-gray-600 mb-6">
              Crafted with cutting-edge tech and strict quality controls, our tools ensure reliability for both
              large-scale and niche applications.
            </p>
              <div className="flex items-center gap-4">
                <div className="text-[#FFD700]">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                  </svg>
                </div>
                <div className="text-gray-600">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
              <div className="mt-4">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M4 11h16M9 16h6M12 14v4" />
                  <circle cx="12" cy="7" r="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right column with image */}
          <div className="md:col-span-4">
            
            <div className="mt-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Precision tools"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Lower section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column - Screws image */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Screws and fasteners"
                width={350}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">
              Built to endure, perform, and deliver—every time.
            </h3>
          </div>

          {/* Middle column - Drill image */}
          <div className="md:col-span-4">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=350"
                alt="Drilling machine"
                width={350}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right column - Affordable section */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">Affordable & Accessible</h3>
            <p className="text-gray-600 mb-6">
              Available across major metro cities, our solutions offer top quality at competitive prices—backed by
              expert support and warranty.
            </p>
            <button className="bg-[#FF5A5F] text-white px-6 py-3 rounded-full hover:bg-[#FF4246] transition mb-4">
              AT IT'S BEST PRICE
            </button>
            <div className="flex items-center gap-4 mt-4">
              <div className="text-gray-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 6l-8.6 8.6M12 6h2v2M10 18H8v-2M3 3l18 18" />
                </svg>
              </div>
              <div className="text-[#FFD700]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 12h4v10h12V12h4L12 2z" />
                  <path d="M9 14h6v8H9z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
