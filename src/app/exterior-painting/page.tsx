import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Exterior House Painting Services Miami | Triumph Painters",
  description: "Expert exterior house painting services in Miami, Florida. Professional painters specializing in weather-resistant paints for South Florida's challenging climate.",
  keywords: "exterior painting Miami, house painting Florida, exterior painters, Miami painting contractors",
}

export default function ExteriorPaintingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Banner */}
      <section className="relative bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-primary text-white px-6 py-3 rounded inline-block mb-6">
                <span className="font-semibold text-lg">EXTERIOR HOUSE PAINTING SERVICES IN MIAMI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Miami Exterior Painters Who Excel Under the Sun
              </h1>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1811655915.png"
                alt="Professional exterior house painting in Miami"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Exterior Painters in Miami That Triumph Over Heat & Humidity
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your home's exterior creates the first impression for visitors and significantly impacts your property value.
                In Miami's intense climate, you need expert painters who understand both aesthetic appeal and weather protection.
                Triumph Painters brings over a decade of exterior painting mastery to South Florida homes. Our comprehensive services include:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">High-pressure washing and surface preparation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Exterior brick and masonry painting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Deck staining and waterproofing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Fence and railing restoration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Garage and storage building painting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Stucco and concrete coating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Exterior door and trim detailing</span>
                </div>
              </div>

              <p className="text-gray-600">
                Our experienced team safely handles complex exterior projects, delivering lasting results that enhance your home's curb appeal.
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3910616631.webp"
                alt="Miami exterior painting project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded font-semibold">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A HOME PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Exterior Areas We Handle */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Exterior Home Areas We Transform
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
                  Whether your home features stucco, siding, or masonry, we have the expertise and specialized equipment to deliver
                  flawless results that protect your investment and enhance your property's appearance for years to come.
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
                  Our deck staining and painting services use marine-grade products that resist mold, mildew, and UV damage.
                  We carefully match products to your deck material and provide proper surface preparation to ensure maximum adhesion
                  and longevity in Miami's challenging climate.
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
                  include comprehensive preparation with power washing, repair of damaged sections, and application of weather-resistant
                  coatings. We have the specialized tools and techniques to reach every corner and crevice, ensuring complete coverage
                  and protection for your property boundaries.
                </p>
              </div>
            </div>

            {/* Residential Porch */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Porches & Covered Areas</h3>
                <p className="text-sm font-semibold text-accent mb-3">Detailed Painting & Finishing</p>
                <p className="text-gray-600">
                  Porches are focal points that require meticulous attention to architectural details and material compatibility.
                  Our porch painting services address the complex mix of materials typically found in these spaces, from decorative
                  railings to ceiling treatments. We ensure proper primer selection and paint application techniques that enhance
                  both the beauty and durability of these essential outdoor living spaces.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://ext.same-assets.com/330995101/2600093617.png"
                  alt="Porch painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Exterior Door */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/1647939216.png"
                  alt="Exterior door painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Entry Doors & Trim</h3>
                <p className="text-sm font-semibold text-accent mb-3">Precision Painting & Detailing</p>
                <p className="text-gray-600">
                  Your front door creates the first impression of your home. Our exterior door painting considers material type,
                  architectural style, and color coordination with your home's overall palette. We provide expert guidance on
                  paint versus stain options, handle intricate trim work, and ensure proper sealing against Miami's moisture and
                  temperature fluctuations for lasting beauty and protection.
                </p>
              </div>
            </div>

            {/* Garage Door */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Garage Doors & Outbuildings</h3>
                <p className="text-sm font-semibold text-accent mb-3">Comprehensive Coating Services</p>
                <p className="text-gray-600">
                  Garage doors represent a significant portion of your home's street-facing facade and require specialized painting
                  techniques. Our garage door painting services address material-specific requirements, from metal to wood composite,
                  ensuring proper paint adhesion and finish durability. We coordinate colors to complement your home's exterior
                  and provide protective coatings that resist the daily challenges of Miami's climate.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://ext.same-assets.com/330995101/3539148133.png"
                  alt="Garage door painting Miami"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Exterior Surface Types We Master
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
                  Our masonry expertise ensures lasting results on Miami's diverse brick and stone surfaces,
                  using permeable paints that prevent moisture damage while providing excellent coverage and color retention.
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
                  Metal siding's heat conductivity and non-porous surface create unique painting challenges.
                  Our aluminum specialists use high-adhesion primers and heat-resistant paints specifically
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
                  Vinyl's expansion and contraction in extreme weather requires careful paint selection and application.
                  We use flexible, light-colored paints that prevent warping and cracking while providing excellent
                  adhesion and long-lasting color stability in Miami's challenging climate.
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
                  Window painting demands precision and material-specific expertise. Our detailed approach includes
                  proper masking, primer selection for different frame materials, and paint application techniques
                  that ensure smooth operation and weather protection for years to come.
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
                  Wood surfaces in Miami face constant moisture and UV challenges. Our wood painting services include
                  comprehensive preparation, moisture barrier application, and premium exterior paints that provide
                  superior protection against rot, insects, and weather damage.
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
                  Miami's abundant stucco requires specialized coating systems for optimal performance.
                  Our stucco painting expertise includes crack repair, proper primer application, and
                  elastomeric paints that flex with building movement while providing superior weather protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Choose an Exterior Painter in Miami
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border border-gray-200 rounded-lg p-6">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Licensed, Insured, & Florida Certified
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Verify that your painting contractor holds proper Florida licenses, carries comprehensive insurance,
                and can provide references from recent Miami-area projects. Look for contractors with specific experience
                in South Florida's climate challenges and established relationships with local suppliers of premium exterior paints.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Miami Climate Expertise
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                South Florida's unique combination of salt air, intense UV radiation, and extreme weather requires specialized
                knowledge. Choose painters who understand material selection, surface preparation techniques, and paint systems
                specifically designed for coastal tropical conditions and hurricane-prone areas.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Transparent & Detailed Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Demand itemized estimates that clearly outline surface preparation, materials, labor, and timeline.
                Reputable contractors provide detailed explanations of their process, paint specifications, and warranty terms.
                Avoid estimates that seem unusually low, as they often indicate corners will be cut on preparation or materials.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Professional Equipment & Safety
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Exterior painting requires specialized equipment for safe high-altitude work and proper paint application.
                Verify that contractors have professional-grade sprayers, scaffolding systems, pressure washing equipment,
                and safety gear to handle multi-story homes and complex architectural features safely and efficiently.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Triumph Painters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Triumph Painters for Miami Exterior Painting?
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
                liability insurance coverage. We maintain all required certifications and safety protocols to
                protect your property and provide complete peace of mind throughout your painting project.
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
                Our team has the specialized tools, techniques, and expertise to safely handle complex exterior projects
                while delivering superior results that enhance and protect your investment.
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
                Exterior painting involves many variables including surface types, preparation requirements, and material specifications.
                We provide detailed, transparent estimates that clearly explain all costs and processes, ensuring you understand
                exactly what you're paying for with no hidden surprises.
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
                throughout South Florida. Our portfolio includes prestigious residential projects and satisfied clients
                who trust us with their most valuable asset - their homes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A HOME PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Painting Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Miami Exterior Painting Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 text-center mb-12">
              Our comprehensive 5-stage process ensures lasting results in South Florida's challenging climate:
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Surface Cleaning & Assessment</h3>
                  <p className="text-gray-600">
                    We begin with high-pressure washing to remove salt residue, mildew, pollen, and loose paint.
                    This critical step eliminates contaminants that could compromise paint adhesion. For porous materials like wood,
                    we allow adequate drying time before proceeding to ensure optimal results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Comprehensive Surface Preparation</h3>
                  <p className="text-gray-600">
                    Thorough preparation includes repairing damaged materials, replacing weathered components, scraping old paint,
                    caulking gaps, and applying appropriate primers. We also install protective coverings for landscaping,
                    windows, and outdoor furniture to ensure a clean, professional job site.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Main Surface Application</h3>
                  <p className="text-gray-600">
                    For large, undetailed exterior walls, we utilize professional spray equipment for efficient, even coverage.
                    Complex architectural features or specialty materials receive careful hand application to ensure proper
                    penetration and finish quality on every surface.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Trim & Detail Work</h3>
                  <p className="text-gray-600">
                    Precision hand-painting of trim, shutters, doors, and architectural details ensures crisp lines and
                    professional appearance. We carefully mask adjacent surfaces and use high-quality brushes to achieve
                    smooth, even coverage on intricate elements that define your home's character.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Final Inspection & Cleanup</h3>
                  <p className="text-gray-600">
                    Our final walkthrough identifies any areas needing touch-ups or additional attention. We complete all
                    necessary corrections, remove protective materials, clean up equipment and supplies, and conduct a
                    comprehensive site cleanup, leaving your property spotless and beautiful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Miami Exterior Painting FAQs
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
                condition, preparation requirements, paint quality, and architectural complexity. Factors like hurricane
                shutters, multiple stories, and salt air damage can affect pricing. We provide detailed estimates based
                on your specific project requirements.
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
                Yes, Triumph Painters carries comprehensive liability insurance and all required Florida licenses and bonds.
                Our team is fully certified for high-altitude work and follows strict safety protocols. We provide insurance
                certificates upon request and ensure full protection for your property throughout the painting process.
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
                preparation requirements. We schedule projects during optimal weather windows and work efficiently to
                minimize disruption. Hurricane season and afternoon thunderstorms may occasionally affect scheduling.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What's the best season for exterior painting in South Florida?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                The optimal exterior painting season in Miami is November through April, when humidity is lower and
                afternoon thunderstorms are less frequent. However, with proper planning and weather monitoring,
                we can successfully complete exterior projects year-round using appropriate materials and techniques.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How do you prepare homes for Miami's weather?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                We use high-quality surface preparation including power washing, priming with moisture barriers,
                and selecting paints specifically formulated for coastal conditions. Our process includes mildew treatment,
                crack repair, and caulking to prevent water infiltration. We only use paints with excellent UV resistance
                and salt air durability ratings.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What tools do you use for exterior painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Our professional equipment includes high-pressure washers, professional-grade airless sprayers,
                scaffolding systems, extension ladders, and safety equipment for multi-story work. We use premium
                brushes and rollers for detail work and maintain all equipment to ensure consistent, high-quality results.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Can I paint my Miami home exterior myself?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                While DIY painting is possible, Miami's climate demands specialized knowledge of surface preparation,
                paint selection, and application techniques. Professional painters have the equipment, experience, and
                insurance to safely handle multi-story work and ensure lasting results. Poor preparation or paint
                selection can lead to costly failures in South Florida's challenging environment.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}
