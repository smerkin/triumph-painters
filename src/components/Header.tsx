'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isResidentialOpen, setIsResidentialOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileResidentialOpen, setIsMobileResidentialOpen] = useState(false)

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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Phone and CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {/* Residential with submenu */}
            <div className="mb-2">
              <button
                onClick={() => setIsMobileResidentialOpen(!isMobileResidentialOpen)}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium flex items-center justify-between"
              >
                Residential
                <svg 
                  className={`w-4 h-4 transition-transform ${isMobileResidentialOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileResidentialOpen && (
                <div className="pl-4 bg-gray-50">
                  <Link 
                    href="/residential" 
                    className="block px-4 py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Residential Services
                  </Link>
                  <Link 
                    href="/interior-painting" 
                    className="block px-4 py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    House Interior Painting
                  </Link>
                  <Link 
                    href="/exterior-painting" 
                    className="block px-4 py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    House Exterior Painting
                  </Link>
                  <Link 
                    href="/condo-painting" 
                    className="block px-4 py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Condo & Apartment Painting
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/commercial" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Commercial
            </Link>
            <Link 
              href="/industrial" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industrial
            </Link>
            <Link 
              href="/epoxy" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Epoxy Flooring
            </Link>
            <Link 
              href="/service-areas" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile CTA Section */}
            <div className="mt-4 px-4 space-y-3">
              <Link href="tel:305-555-0123" className="block text-center text-primary font-semibold text-lg py-2">
                📞 305-555-0123
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  REQUEST A QUOTE
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
