import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Best Home Painting Services in Miami & South Florida | Triumph Painters",
  description: "Professional residential painting services in Miami, Florida. Expert interior and exterior house painting for homes throughout Miami-Dade, Broward, and surrounding areas.",
  keywords: "residential painting Miami, home painters Florida, house painting Miami, interior exterior painting",
}

export default function ResidentialPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              PREMIER HOME PAINTING SERVICES IN MIAMI & SOUTH FLORIDA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Miami Home Painters Who Transform Every Space
            </h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/1750794793.png"
            alt="Professional residential painting in Miami"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            MIAMI HOME PAINTERS WHO MASTER EVERY CHALLENGE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience painting homes throughout Miami-Dade, Broward, and surrounding areas,
                Triumph Painters brings unmatched expertise to your residential project. We understand South Florida's unique
                challenges and deliver solutions that enhance your home's beauty while protecting your investment.
                Our comprehensive residential services include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li><strong>Interior Home Painting</strong> - Complete room transformations using premium paints</li>
                <li><strong>Exterior Home Painting</strong> - Weather-resistant coatings for Miami's climate</li>
                <li><strong>Condo & Multi-Unit Residences</strong> - Specialized services with HOA compliance</li>
                <li>Wallpaper removal and surface preparation</li>
                <li>Trim, doors, and detailed finishing work</li>
                <li>Epoxy flooring and concrete polishing</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Our team at Triumph Painters delivers exceptional results with attention to detail you'll be proud to showcase in your home.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/3759885974.png"
                alt="Beautiful painted interior in Miami home"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A HOME PAINTING SERVICES QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Types of Residential Painting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            TYPES OF RESIDENTIAL PAINTING WE SPECIALIZE IN
          </h2>

          <div className="space-y-12">
            {/* House Interior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/814777163.png"
                  alt="Interior house painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">House Interior</h3>
                <p className="text-sm font-semibold text-accent mb-3">Minimize Disruption & Maximize Results</p>
                <p className="text-gray-600">
                  Your home is your sanctuary, and the last thing you need is weeks of disruption from contractors who
                  make mistakes or leave a mess behind. We treat your Miami home with the utmost respect, using
                  climate-appropriate paints and proven techniques.
                </p>
              </div>
            </div>

            {/* House Exterior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">House Exterior</h3>
                <p className="text-sm font-semibold text-accent mb-3">Hurricane-Ready & Aesthetically Superior</p>
                <p className="text-gray-600">
                  Miami's exterior painting demands more than just good looks - it requires protection against hurricanes,
                  salt air, and year-round UV exposure. Our expertise includes specialized equipment for
                  safe multi-story work and premium weather-resistant paints.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://ext.same-assets.com/330995101/95006681.png"
                  alt="Exterior house painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Condos & Apartments */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/4273860894.png"
                  alt="Condo painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Condos & Apartments</h3>
                <p className="text-sm font-semibold text-accent mb-3">HOA-Compliant & Board-Approved Quality</p>
                <p className="text-gray-600">
                  Miami's condo and apartment living comes with unique regulations and challenges. We navigate HOA
                  requirements, coordinate with property management, and handle the complexities of high-rise buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
