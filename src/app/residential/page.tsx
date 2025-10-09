import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { Home, Palette, Shield, Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResidentialPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              RESIDENTIAL PAINTING SERVICES IN MIAMI
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Transform your home with professional interior and exterior painting services throughout South Florida
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg">
              GET FREE HOME ESTIMATE
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://brightsidepaintingjax.com/wp-content/uploads/Blue-beach-house-exterior-900x837.webp"
            alt="Beautiful painted home in South Florida"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            OUR RESIDENTIAL PAINTING SERVICES
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://certapro.com/st-augustine/wp-content/uploads/sites/1350/cache/remote/pub-9fc1f065f07e441b8f35365c774f09ae-r2-dev/3498217534.jpg"
                  alt="Interior house painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior Painting</h3>
                <p className="text-gray-600">Complete interior transformations including walls, ceilings, trim, and specialty finishes.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://brightsidepaintingjax.com/wp-content/uploads/Blue-beach-house-exterior-900x837.webp"
                  alt="Exterior house painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Exterior Painting</h3>
                <p className="text-gray-600">Weather-resistant exterior coatings designed for Florida's climate and UV protection.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://media.istockphoto.com/id/896551048/photo/art-deco-south-beach-miami.jpg?s=612x612&w=0&k=20&c=nWxs3XYO7HF-ZtqHiZ9UUwpC-SGSLy0gSSNNKKjstmc="
                  alt="Condo painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Condo & Apartment</h3>
                <p className="text-gray-600">Specialized painting for condominiums, apartments, and multi-unit residential properties.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://www.hallsqualitypainting.com/wp-content/uploads/2024/06/Exterior-House-Painting.jpg"
                  alt="Deck and fence painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Deck & Fence Painting</h3>
                <p className="text-gray-600">Protective staining and painting for outdoor wood structures and fencing.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://i.pinimg.com/736x/00/a5/ca/00a5ca65c121a9431bb0f27803dc908c.jpg"
                  alt="Cabinet refinishing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Cabinet Refinishing</h3>
                <p className="text-gray-600">Kitchen and bathroom cabinet painting and refinishing for a fresh new look.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://static.wixstatic.com/media/de6c1b_2d81459cbf034282a732524a2a1f4eb4~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/de6c1b_2d81459cbf034282a732524a2a1f4eb4~mv2.jpg"
                  alt="Pool area painting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Pool Areas & Patios</h3>
                <p className="text-gray-600">Specialized coatings for pool decks, patios, and outdoor entertainment areas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Residential */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            WHY HOMEOWNERS CHOOSE TRIUMPH PAINTERS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Your Home is Our Priority
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We treat your home with the same care and respect we'd want for our own. Complete protection
                  of your furniture, flooring, and belongings during all painting projects.
                </p>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Expert Color Consultation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our color specialists help you choose the perfect palette for your home's style and
                  lighting. We provide color samples and expert recommendations at no extra charge.
                </p>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Premium Materials Only
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use only the highest quality paints and primers specifically chosen for Florida's
                  climate. All work comes with comprehensive warranties for your peace of mind.
                </p>
              </div>
            </Card>

            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work around your schedule to minimize disruption to your daily routine.
                  Weekend and evening work available when needed for your convenience.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            OUR RESIDENTIAL PAINTING PROCESS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Free Consultation</h3>
              <p className="text-gray-600 text-sm">In-home assessment and color consultation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Detailed Estimate</h3>
              <p className="text-gray-600 text-sm">Transparent pricing with no hidden fees</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Preparation</h3>
              <p className="text-gray-600 text-sm">Thorough prep work and protection of belongings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Expert Painting</h3>
              <p className="text-gray-600 text-sm">Professional application with attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Final Walkthrough</h3>
              <p className="text-gray-600 text-sm">Quality inspection and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            WHAT OUR MIAMI HOMEOWNERS SAY
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Triumph Painters transformed our Coral Gables home beautifully. The team was professional,
                clean, and finished on time. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-800">- Maria S., Coral Gables</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding exterior paint job on our Pinecrest house. The paint has held up perfectly
                through two hurricane seasons. Quality work!"
              </p>
              <p className="font-semibold text-gray-800">- Robert M., Pinecrest</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The color consultation was incredibly helpful. They painted our entire condo interior
                and it looks amazing. Very fair pricing too."
              </p>
              <p className="font-semibold text-gray-800">- Jennifer L., Brickell</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            READY TO TRANSFORM YOUR HOME?
          </h2>
          <p className="text-xl mb-8">Get your free residential painting estimate today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4">
              Get Free Estimate
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
