"use client";

import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function C7() {
  return (
    <div className="w-full" id="c7">
      {/* Contact Planner Section */}
      <div className="bg-gray-200 text-center py-8 px-4 w-full">
        <h2 className="text-2xl font-semibold text-sky-950">
          Contact our Travel Planner
        </h2>
        <p className="text-gray-600 mt-2">
          Move one step closer to your dream vacation
        </p>
        <div className="mt-4 flex flex-wrap justify-center space-x-4 gap-4 w-full">
          <a
            href="tel:+917902059525"
            className="border border-yellow-900 text-yellow-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-yellow transition"
          >
            CALL US
          </a>
          <a
            href="https://wa.me/917902059525"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/simplyraahi?igsh=bWN3a2hneGU1NXJj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#003B4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-32 h-32 relative">
                  <Image 
                    src="/Logo SimplyRaahi.PNG" 
                    alt="Simply Raahi" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Discover. Unwind. Wander</h3>
                <p className="text-gray-300 max-w-md">
                  Curating the best travel packages to your favourite destinations
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Call us:</span> 7902059525
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Email:</span> info@simplyraahi.com
                  </p>
                  <p className="text-gray-300">
                    Talla Cheenakhan, Dharanaula Road,
                    Near Kapisha Petrol Pump,
                    Almora, 263601
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links - Vertical */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Tours
                </Link>
                <Link href="/personalised" className="text-gray-300 hover:text-white transition-colors">
                  Personalized Tours
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-white mb-6">Connect With Us</h4>
            <div className="flex justify-center gap-6">
              <a href="https://www.google.com/search?q=SimplyRaahi+&client=safari&sca_esv=4aae2c6cddf73431&rls=en&sxsrf=AHTn8zqtw0j9V3NzcqAODhYzoe4zjpDUdw%3A1747405761380&ei=wUsnaJuCF6yQnesP99eE8Ag&ved=0ahUKEwjb5r3dmaiNAxUsSGcHHfcrAY4Q4dUDCBA&uact=5&oq=SimplyRaahi+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDFNpbXBseVJhYWhpIDIEECMYJzIGEAAYDRgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FMgUQABjvBUjEEFCIBFjtCXAAeACQAQCYAZ4EoAHaE6oBCzAuMS4zLjIuMC4yuAEDyAEA-AEBmAIBoAKlApgDAIgGAZIHAzItMaAHoCuyBwMyLTG4B6UC&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="#4285F4" viewBox="0 0 24 24">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/simplyraahi/about/
" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-[#0077B5] rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
              <a href="https://wa.me/917902059525" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-green-500 rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.instagram.com/simplyraahi?igsh=bWN3a2hneGU1NXJj" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.facebook.com/share/1BFCRZeiLw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-blue-600 rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </div>
              </a>
              <a href="https://x.com/simplyraahi?s=21" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-black rounded-full p-2.5 hover:opacity-90">
                  <svg className="w-full h-full" fill="white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}