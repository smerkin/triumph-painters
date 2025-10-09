import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Exterior House Painting Services Miami | Triumph Painters",
  description: "Expert exterior house painting services in Miami, Florida. Professional painters specializing in weather-resistant paints for South Florida's challenging climate.",
  keywords: "exterior painting Miami, house painting Florida, exterior painters, Miami painting contractors",
}

export default function ExteriorPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              EXTERIOR HOUSE PAINTING SERVICES IN MIAMI
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Miami Exterior Painters Who Excel Under the Sun
            </h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/1811655915.png"
            alt="Professional exterior house painting in Miami"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            EXTERIOR PAINTERS IN MIAMI THAT TRIUMPH OVER HEAT & HUMIDITY
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your home's exterior creates the first impression for visitors and significantly impacts your property value.
                In Miami's intense climate, you need expert painters who understand both aesthetic appeal and weather protection.
                Triumph Painters brings over a decade of exterior painting mastery to South Florida homes. Our comprehensive services include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>High-pressure washing and surface preparation</li>
                <li>Exterior brick and masonry painting</li>
                <li>Deck staining and waterproofing</li>
                <li>Fence and railing restoration</li>
                <li>Garage and storage building painting</li>
                <li>Stucco and concrete coating</li>
                <li>Exterior door and trim detailing</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Our experienced team safely handles complex exterior projects, delivering lasting results that enhance your home's curb appeal.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/3910616631.webp"
                alt="Miami exterior painting project"
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
            CONTACT US TODAY FOR A HOME PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Exterior Areas We Handle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            EXTERIOR HOME AREAS WE TRANSFORM
          </h2>

          <div className="space-y-12">
            {/* Home Exterior Surface */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/4164461729.png"
                  alt="Home exterior surface painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Home Exterior Walls</h3>
                <p className="text-sm font-semibold text-accent mb-3">Painting & Protective Coating</p>
                <p className="text-gray-600">
                  Miami homes face unique challenges from salt air, intense UV rays, and tropical storms.
                  Our exterior wall painting uses premium weather-resistant paints specifically formulated for South Florida conditions.
                  Whether your home features stucco, siding, or masonry, we deliver flawless results that protect your investment.
                </p>
              </div>
            </div>

            {/* Residential Deck */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Outdoor Decks & Patios</h3>
                <p className="text-sm font-semibold text-accent mb-3">Staining & Waterproofing</p>
                <p className="text-gray-600">
                  Florida's year-round outdoor living demands durable deck finishes that can withstand constant moisture and sun exposure.
                  Our deck staining services use marine-grade products that resist mold, mildew, and UV damage.
                  We ensure maximum adhesion and longevity in Miami's challenging climate.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://ext.same-assets.com/330995101/3787774607.png"
                  alt="Deck staining and painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Residential Fence */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/763267271.png"
                  alt="Fence painting Miami Florida"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Fences & Privacy Screens</h3>
                <p className="text-sm font-semibold text-accent mb-3">Painting & Restoration</p>
                <p className="text-gray-600">
                  Miami fences endure constant exposure to humidity, salt air, and intense weather. Our fence painting services
                  include comprehensive preparation with power washing and application of weather-resistant coatings.
                  We ensure complete coverage and protection for your property boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            EXTERIOR SURFACE TYPES WE MASTER
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/515861360.png"
                  alt="Brick painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Brick & Masonry</h3>
                <p className="text-gray-600">
                  Brick painting requires specialized techniques for proper adhesion and breathability.
                  Our masonry expertise ensures lasting results on Miami's diverse brick and stone surfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/2750986165.png"
                  alt="Aluminum siding painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Aluminum Siding</h3>
                <p className="text-gray-600">
                  Metal siding requires high-adhesion primers and heat-resistant paints specifically
                  formulated for South Florida's extreme temperatures and salt air exposure.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/2802805004.png"
                  alt="Vinyl siding painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Vinyl Siding</h3>
                <p className="text-gray-600">
                  We use flexible, light-colored paints that prevent warping and provide excellent
                  adhesion and color stability in Miami's challenging climate.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/2571567147.png"
                  alt="Window painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Windows & Frames</h3>
                <p className="text-gray-600">
                  Our detailed approach ensures proper masking, primer selection, and paint application
                  for smooth operation and weather protection.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/616902887.png"
                  alt="Wood exterior painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Exterior Wood</h3>
                <p className="text-gray-600">
                  Our wood painting includes comprehensive preparation and premium exterior paints
                  that provide superior protection against rot, insects, and weather damage.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/1615965491.png"
                  alt="Stucco painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Stucco & Concrete</h3>
                <p className="text-gray-600">
                  Our stucco expertise includes crack repair and elastomeric paints that flex with
                  building movement while providing superior weather protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO CHOOSE AN EXTERIOR PAINTER IN MIAMI
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Licensed, Insured, & Florida Certified
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Verify that your painting contractor holds proper Florida licenses, carries comprehensive insurance,
                and can provide references from recent Miami-area projects. Look for contractors with specific experience
                in South Florida's climate challenges.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Miami Climate Expertise
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                South Florida's unique combination of salt air, intense UV radiation, and extreme weather requires specialized
                knowledge. Choose painters who understand paint systems specifically designed for coastal tropical conditions.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Transparent & Detailed Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Demand itemized estimates that clearly outline surface preparation, materials, labor, and timeline.
                Avoid estimates that seem unusually low, as they often indicate corners will be cut on preparation or materials.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Triumph Painters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY CHOOSE TRIUMPH PAINTERS FOR MIAMI EXTERIOR PAINTING?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed & Fully Insured</h3>
              <p className="text-gray-600">
                All Triumph Painters team members are fully licensed and bonded in Florida, with comprehensive
                liability insurance coverage. We maintain all required certifications and safety protocols.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Miami Exterior Specialists</h3>
              <p className="text-gray-600">
                As dedicated exterior painting professionals, we understand the unique challenges of South Florida homes.
                Our team has the specialized tools and expertise to handle complex exterior projects safely.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fair & Honest Pricing</h3>
              <p className="text-gray-600">
                We provide detailed, transparent estimates that clearly explain all costs and processes,
                ensuring you understand exactly what you're paying for with no hidden surprises.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Outstanding Track Record</h3>
              <p className="text-gray-600">
                Since establishing Triumph Painters in Miami, we've built an exceptional reputation serving homeowners
                throughout South Florida with prestigious residential projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A HOME PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            MIAMI EXTERIOR PAINTING FAQS
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What are typical exterior painting costs in Miami?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Exterior painting costs in Miami typically range from $2-6 per square foot, depending on surface material,
                condition, preparation requirements, and paint quality. Factors like hurricane shutters, multiple stories,
                and salt air damage can affect pricing.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Is Triumph Painters insured for exterior work?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, Triumph Painters carries comprehensive liability insurance and all required Florida licenses.
                Our team is fully certified for high-altitude work and follows strict safety protocols.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How long does exterior painting take in Miami?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Most Miami exterior painting projects take 5-10 days, depending on home size, weather conditions, and
                preparation requirements. We schedule projects during optimal weather windows.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
