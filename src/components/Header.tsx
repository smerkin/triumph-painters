import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
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
            <Link href="/residential" className="text-gray-700 hover:text-primary font-medium">
              Residential
            </Link>
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
