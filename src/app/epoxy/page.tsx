import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { Layers, Shield, Sparkles, Home, Building2, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EpoxyFlooringPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              EPOXY FLOORING INSTALLATION & REPAIR IN MIAMI
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Durable, beautiful epoxy floor coatings for garages, warehouses, and commercial spaces throughout South Florida
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg">
              GET EPOXY QUOTE
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/63d2c041dc9e733c64906271/345a390a-cc0f-435b-b7f2-6cbc0a16b0e7/tampa+fl+epoxy+coating+contractors.JPG"
            alt="Epoxy flooring installation in Miami"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Epoxy Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            PROFESSIONAL EPOXY FLOORING SERVICES
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://d274bhbca04zrd.cloudfront.net/assets/sub-banner/fx-flooring.2305301528367.jpg"
                  alt="Garage epoxy flooring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Garage Epoxy Flooring</h3>
                <p className="text-gray-600">Transform your garage with beautiful, durable epoxy coatings that resist stains, chemicals, and hot tire pickup.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/63d2c041dc9e733c64906271/345a390a-cc0f-435b-b7f2-6cbc0a16b0e7/tampa+fl+epoxy+coating+contractors.JPG"
                  alt="Commercial epoxy flooring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Commercial Epoxy</h3>
                <p className="text-gray-600">Heavy-duty epoxy systems for warehouses, showrooms, and commercial facilities requiring maximum durability.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/O6i6b9tsJMNIiXHNPIMi9A/1000s.jpg"
                  alt="Metallic epoxy flooring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Metallic Epoxy</h3>
                <p className="text-gray-600">Stunning metallic epoxy finishes that create unique, three-dimensional effects perfect for modern spaces.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Epoxy Repair</h3>
              <p className="text-gray-600">Professional repair services for damaged, peeling, or worn epoxy floors to restore like-new appearance.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Flake Systems</h3>
              <p className="text-gray-600">Decorative color flake epoxy systems available in hundreds of color combinations and patterns.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Designs</h3>
              <p className="text-gray-600">Custom logos, patterns, and decorative designs to match your brand or personal style preferences.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            WHY CHOOSE EPOXY FLOORING?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Extreme Durability</h3>
              <p className="text-gray-600">Withstands heavy traffic, impacts, chemicals, and abrasion better than any other flooring option.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Easy Maintenance</h3>
              <p className="text-gray-600">Non-porous surface resists stains and spills, making cleaning simple with just soap and water.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Chemical Resistant</h3>
              <p className="text-gray-600">Resists oils, gasoline, brake fluid, and other automotive chemicals that stain concrete.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Aesthetic Appeal</h3>
              <p className="text-gray-600">Transform any space with beautiful, high-gloss finishes available in unlimited colors and patterns.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cost Effective</h3>
              <p className="text-gray-600">Long-lasting solution that provides excellent value compared to other flooring options.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quick Installation</h3>
              <p className="text-gray-600">Most residential projects completed in 1-3 days with minimal disruption to your routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            EPOXY FLOORING APPLICATIONS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Residential Applications</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Garage floors and workshop areas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Basement and recreation rooms
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Laundry rooms and utility areas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Pool decks and patio areas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Home gyms and fitness areas
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Driveways and walkways
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Commercial Applications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Warehouse and distribution centers
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Manufacturing facilities
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Automotive showrooms and service bays
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Retail stores and showrooms
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Hospitals and healthcare facilities
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Restaurants and commercial kitchens
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            OUR EPOXY INSTALLATION PROCESS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Surface Preparation</h3>
              <p className="text-gray-600 text-sm">Diamond grinding and shot blasting for optimal adhesion</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Crack Repair</h3>
              <p className="text-gray-600 text-sm">Professional crack filling and surface leveling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Primer Application</h3>
              <p className="text-gray-600 text-sm">High-performance primer for maximum bond strength</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Epoxy Installation</h3>
              <p className="text-gray-600 text-sm">Professional application with decorative elements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Protective Topcoat</h3>
              <p className="text-gray-600 text-sm">Clear protective coating for durability and shine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Miami-Specific Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            EPOXY FLOORING FOR SOUTH FLORIDA
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Climate Considerations</h3>
                <p className="text-gray-600 mb-4">
                  Our epoxy systems are specifically formulated for South Florida's unique climate challenges,
                  including high humidity, salt air, and intense UV exposure.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Moisture-resistant formulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    UV-stable topcoats prevent yellowing
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Salt-air resistant compounds
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Local Expertise</h3>
                <p className="text-gray-600 mb-4">
                  With 12+ years serving Miami-Dade, Broward, and surrounding areas, we understand
                  the specific requirements for long-lasting epoxy installations in Florida.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Hurricane-tested durability
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Local building code compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Rapid installation schedules
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            TRANSFORM YOUR FLOORS WITH PROFESSIONAL EPOXY
          </h2>
          <p className="text-xl mb-8">Get your free epoxy flooring estimate today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4">
              Get Free Epoxy Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4">
              Call 305-555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link href="/interior" className="hover:text-accent">Interior Painting</Link></li>
                <li><Link href="/exterior" className="hover:text-accent">Exterior Painting</Link></li>
                <li><Link href="/condo" className="hover:text-accent">Condo Painting</Link></li>
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
    </div>
  )
}
