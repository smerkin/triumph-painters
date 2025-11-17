import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">CONTACT INFO</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="text-gray-300">📍</span>
                <span className="ml-2">1450 Brickell Bay Dr, Miami, FL 33131, USA</span>
              </p>
              <p className="flex items-center">
                <span className="text-gray-300">📞</span>
                <a href="tel:305-555-0123" className="ml-2 hover:text-accent">305-555-0123</a>
              </p>
              <p className="flex items-center">
                <span className="text-gray-300">✉️</span>
                <a href="mailto:info@triumphpainters.com" className="ml-2 hover:text-accent">
                  info@triumphpainters.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">SERVICES</h3>
            <ul className="space-y-2">
              <li><Link href="/commercial" className="hover:text-accent">Commercial Painting</Link></li>
              <li><Link href="/industrial" className="hover:text-accent">Industrial Painting</Link></li>
              <li><Link href="/residential" className="hover:text-accent">Residential Painting</Link></li>
              <li><Link href="/interior-painting" className="hover:text-accent">Interior Painting</Link></li>
              <li><Link href="/exterior-painting" className="hover:text-accent">Exterior Painting</Link></li>
              <li><Link href="/condo-painting" className="hover:text-accent">Condo Painting</Link></li>
              <li><Link href="/epoxy" className="hover:text-accent">Epoxy Flooring</Link></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">HELPFUL LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
              <li><Link href="/service-areas" className="hover:text-accent">Service Areas</Link></li>
              <li><Link href="/resources" className="hover:text-accent">Learning Center</Link></li>
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent text-2xl">📘</a>
              <a href="#" className="text-gray-300 hover:text-accent text-2xl">📷</a>
              <a href="#" className="text-gray-300 hover:text-accent text-2xl">🔗</a>
              <a href="#" className="text-gray-300 hover:text-accent text-2xl">⭐</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Privacy Policy - Copyright 2025 Triumph Painters</p>
        </div>
      </div>
    </footer>
  )
}


