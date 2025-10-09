'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isResidentialOpen, setIsResidentialOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">TRIUMPH</span>
              <span className="text-gray-800"> PAINTERS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Residential Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResidentialOpen(true)}
              onMouseLeave={() => setIsResidentialOpen(false)}
            >
              <Link href="/residential" className="text-gray-700 hover:text-primary font-medium flex items-center">
                Residential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 w-56 transition-opacity duration-200 ${isResidentialOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link href="/residential" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                  All Residential Services
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href="/interior-painting" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                  House Interior Painting
                </Link>
                <Link href="/exterior-painting" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                  House Exterior Painting
                </Link>
                <Link href="/condo-painting" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                  Condo & Apartment Painting
                </Link>
              </div>
            </div>

            <Link href="/commercial" className="text-gray-700 hover:text-primary font-medium">
              Commercial
            </Link>
            <Link href="/industrial" className="text-gray-700 hover:text-primary font-medium">
              Industrial
            </Link>
            <Link href="/epoxy" className="text-gray-700 hover:text-primary font-medium">
              Epoxy Flooring
            </Link>
            <Link href="/service-areas" className="text-gray-700 hover:text-primary font-medium">
              Service Areas
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link href="tel:305-555-0123" className="text-primary font-semibold text-lg">
                305-555-0123
              </Link>
            </div>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-6">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
