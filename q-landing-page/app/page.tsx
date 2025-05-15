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
                <Image
                src="/icon1.png"
                alt="icon"
                width={100}
                height={100}
                className="rounded-lg object-cover h-[100px] w-[100px]"
              />
                </div>
                <div className="text-gray-600">
                <Image
                src="/icon4.png"
                alt="icon"
                width={100}
                height={100}
                className="rounded-lg object-cover h-[100px] w-[100px]"
              />
                </div>
            </div>
          </div>

          {/* Right column with image */}
          <div className="md:col-span-4">
            
            <div className="mt-4">
              <Image
                src="/pic1.jpg"
                alt="Precision tools"
                width={400}
                height={300}
                className="rounded-lg object-cover h-[300px] w-[400px]"
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
                src="/pic2.png"
                alt="Screws and fasteners"
                width={350}
                height={250}
                className="rounded-lg object-cover h-[250px] w-[350px]"
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
                src="/pic3.jpeg"
                alt="Drilling machine"
                width={350}
                height={300}
                className="rounded-lg object-cover h-[300px] w-[350px]"
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
              <Image
                src="/icon2.png"
                alt="Drilling machine"
                width={100}
                height={100}
                className="rounded-lg object-cover h-[100px] w-[100px]"
              />
              </div>
              <div className="text-[#FFD700]">
              <Image
                src="/icon3.png"
                alt="icon"
                width={100}
                height={100}
                className="rounded-lg object-cover h-[100px] w-[100px]"
              />
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
