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
      <section className="relative bg-gray-600 text-white py-20 lg:py-28 min-h-[500px] lg:min-h-[600px] flex items-center">
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
            src="/images/miami-exterior-painting-hero.png"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
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
                src="/images/miami-house-exterior-painting.png"
                alt="Miami exterior painting project"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-lg"
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-accent pb-2">
            EXTERIOR HOME AREAS WE TRANSFORM
          </h2>

          <div className="space-y-8">
            {/* Home Exterior Surface */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-home-exterior-surface-painting.png"
                  alt="Home exterior surface painting Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Home Exterior Walls</h3>
                <p className="text-sm font-semibold text-accent mb-2">Painting & Protective Coating</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Miami homes face unique challenges from salt air, intense UV rays, and tropical storms.
                  Our exterior wall painting uses premium weather-resistant paints specifically formulated for South Florida conditions.
                  Whether your home features stucco, siding, or masonry, we deliver flawless results that protect your investment.
                </p>
              </div>
            </div>

            {/* Residential Deck */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Outdoor Decks & Patios</h3>
                <p className="text-sm font-semibold text-accent mb-2">Staining & Waterproofing</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Florida's year-round outdoor living demands durable deck finishes that can withstand constant moisture and sun exposure.
                  Our deck staining services use marine-grade products that resist mold, mildew, and UV damage.
                  We ensure maximum adhesion and longevity in Miami's challenging climate.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-painting-exterior-decks-patios.png"
                  alt="Deck staining and painting Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Residential Fence */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-painting-fences-privacy-screens.png"
                  alt="Fence painting Miami Florida"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Fences & Privacy Screens</h3>
                <p className="text-sm font-semibold text-accent mb-2">Painting & Restoration</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Miami fences endure constant exposure to humidity, salt air, and intense weather. Our fence painting services
                  include comprehensive preparation with power washing and application of weather-resistant coatings.
                  We ensure complete coverage and protection for your property boundaries.
                </p>
              </div>
            </div>

            {/* Residential Porch */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Residential Porch</h3>
                <p className="text-sm font-semibold text-accent mb-2">Painting & Staining</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Painting or staining a porch can come with similar challenges to those with decks and fences. You have to match your equipment to the type of material your porch is made out of, and work around nooks and crannies to ensure you don't miss any spots. If you'd rather not have to think about all that, give Triumph Painters a call – we have the tools and know-how to take on your project.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-residential-porch-painting.png"
                  alt="Residential porch painting and staining Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Exterior Door */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-residential-exterior-door-painting.png"
                  alt="Exterior door painting Miami Florida"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Exterior Door</h3>
                <p className="text-sm font-semibold text-accent mb-2">Painting, Staining, Trim, & Casings</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  There can be many different considerations when painting exterior doors, depending on how they're constructed and what the rest of your home's exterior looks like. For example, should you paint or stain a door? What colour should you paint or stain it? How will the way its trim and window casings are positioned affect how you have to paint it? Triumph Painters can answer these questions for you.
                </p>
              </div>
            </div>

            {/* Garage Door */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Garage Door</h3>
                <p className="text-sm font-semibold text-accent mb-2">Painting, Staining, Trim, & Casings</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your garage door is part of your home's exterior, too, so it should receive some attention when painting. However, it can be a challenge to paint if it has fine details in the surface, trim, and window casings. Plus, you have to match a type of paint to the door's material. Let our painting team take care of these complications and ensure your garage door gets painted correctly the first time.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-painting-extrior-garage-doors.png"
                  alt="Garage door painting Miami Florida"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
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
                  src="/images/miami-exterior-brick-masonry-painting.png"
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
                  src="/images/miami-exterior-aluminium-siding-painting.png"
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
                  src="/images/miami-exterior-vinyl-siding-painting.png"
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
                  src="/images/miami-exterior-windows-frames-painting.png"
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
                  src="/images/miami-exterior-wood-painting.png"
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
                  src="/images/miami-exterior-stucco-concrete-painting.png"
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
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Licensed & Fully Insured</h3>
              <p className="text-gray-600">
                All Triumph Painters team members are fully licensed and bonded in Florida, with comprehensive
                liability insurance coverage. We maintain all required certifications and safety protocols.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Miami Exterior Specialists</h3>
              <p className="text-gray-600">
                As dedicated exterior painting professionals, we understand the unique challenges of South Florida homes.
                Our team has the specialized tools and expertise to handle complex exterior projects safely.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Fair & Honest Pricing</h3>
              <p className="text-gray-600">
                We provide detailed, transparent estimates that clearly explain all costs and processes,
                ensuring you understand exactly what you're paying for with no hidden surprises.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Outstanding Track Record</h3>
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

      {/* Exterior House Painting Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-accent pb-2">
            EXTERIOR HOUSE PAINTING PROCESS
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            There are 5 stages to painting home exteriors:
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Cleaning Surfaces to Paint
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The first step is to clean off the surfaces that you plan on painting. This gets rid of dirt, mildew, pollen, loose paint, and other contaminants that could affect how well the paint sticks and how smooth the finish looks. Note that if you're cleaning off an absorbent material, such as wood, you may have to wait a bit longer for it to dry before you can move on to the next step.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Other Surface Preparation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      In some cases, extra preparatory work is needed before painting can begin. This can include repairing or replacing damaged materials, stripping previous paint jobs, caulking trim, and putting primer on surfaces to be painted. It can also include putting out protective equipment to keep paint or stain from getting on things it isn't supposed to.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Painting the Siding
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      As long as the exterior walls of your home aren't overly detailed, they can often be spray painted in order to save time. Some houses, however, may need more intensive painting by hand if walls are made of certain materials or have certain designs.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Painting the Trim
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Like with siding, how the trim is painted can depend on the size of the house and the amount of trim. In smaller homes with less trim, the trim can be painted by hand for a more professional-looking finish. In larger homes and those with much more trim, spray painting may be used to save time.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">5</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Touch-ups and Clean-up
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once most of the painting or staining is done, painters will often do a once-around of the home exterior to find and touch up certain areas that may have small flaws. They will also spend some time cleaning up their equipment, supplies, and garbage so the homeowner doesn't have to do it themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                What are typical exterior painting rates for homes in Miami?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">On average, exterior painting rates in Miami range from $2-$6 per square foot. These can depend on the overall size of a house, how much of the exterior is being painted, what materials the exterior is made of and what condition they're in, what equipment the painters need to use, and any other labour and regulatory costs involved.</p>
                <p className="mb-3">The cost to completely paint the exterior of an average house in Miami starts at about $3,000-$4,500. This baseline goes up if you have a bigger house, and goes down if you're only painting certain parts of the exterior.</p>
                <p>For example, if you're only painting window trim, it will cost you about $40-$200 per window. This is based on the complexity, size, and material types of each window, as well as what kind of paint is used. Using the same variables, painting a front door can cost between $300 and $750, and painting a garage door can cost between $400 and $700.</p>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for exterior house painting jobs?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Of course. Every member of our residential painting team is fully licensed and insured in Florida and committed to staying safe while painting, whether that's outdoors or indoors. We also back all of our projects with comprehensive liability insurance, so you're taken care of in case of accidental property damage.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How long does exterior home painting take?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">Painting the entire exterior of an average house takes around 4 or 5 days, but this can vary drastically depending on how much prep work is needed. If little prep work is needed, a small house can be painted in as few as 1 or 2 days. However, a larger home needing extensive cleaning and repairs can take several weeks to paint.</p>
                <p>Some exterior paint jobs take less time than others, depending on which elements of your home's exterior you're painting and the complexities of those jobs. For example, painting trim is a more detail-intensive process that can take 3 to 5 days, while just spray-painting siding can take as few as 2 days.</p>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What is the ideal temperature range for exterior painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">A good temperature range for exterior painting is between 50°F and 86°F (10°C and 30°C). If you paint in cooler weather, paint takes longer to dry as it retains moisture longer. This not only extends your painting time, but also increases the risk that your paint will blister, peel, crack, discolour, or trap debris.</p>
                <p>On the other hand, if you paint in hotter weather (or in direct sunlight), your paint can dry too quickly. This can also cause blistering, chipping, and cracking as the paint doesn't have a chance to properly adhere to the surface you're painting. It can also cause your paintbrushes and rollers to harden as the paint on them dries prematurely. In Miami's climate, we schedule painting during optimal weather windows to ensure the best results.</p>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How do I prepare a house for exterior painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">Painting the exterior of your home can go faster (and perhaps be less expensive) if you take a number of preparatory steps beforehand. Here are some basic steps for how to prepare a house for exterior painting:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Pressure wash the surfaces you plan on painting</li>
                  <li>Strip away any loose paint</li>
                  <li>Repair any damaged surfaces</li>
                  <li>Caulk trim to seal seams and cracks</li>
                  <li>Put coverings over windows, doors, and other objects you want to avoid getting paint on</li>
                  <li>Prime the areas to be painted</li>
                </ol>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What are the right tools needed for exterior home painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600 space-y-3">
                <p>Some key tools when painting outdoors include:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Ladder</strong> – Home exteriors often include high, out-of-the-way places that are difficult to reach, let alone paint. Make sure you have a tall enough ladder to be able to see all the areas you want to paint. Using too small a ladder is dangerous, as it can cause you to lose your balance if you're reaching to try and paint certain areas. Reaching like this can also leave uneven finishes in the places you're trying to paint.</li>
                  <li><strong>Pressure washer</strong> – This is an essential tool for cleaning off your exterior surfaces before you paint them. The pressurized flow will help you clean even hard-to-reach areas with enough force to remove any contaminants.</li>
                  <li><strong>Surface prep tools</strong> – Basically, this covers anything you might need to clean or repair the surfaces you're going to paint after you've washed them. Examples include wire brushes, putty knives, sanders, scrapers, and multi-purpose tools.</li>
                  <li><strong>Caulk gun</strong> – You'll need this to seal the seams around places like windows, doors, or chimneys where paint could accidentally leak into your home's interior.</li>
                  <li><strong>Drop cloths</strong> – Use these to protect surfaces and objects (such as your garden plants) that you don't want to get paint or stain on.</li>
                  <li><strong>Tape</strong> – You can use tape to protect certain surfaces you don't want to get paint on, secure objects that might get in the way of your painting, and more.</li>
                  <li><strong>Paintbrush, roller, and sprayer</strong> – Use whichever tool is appropriate for the size and complexity of the surface you're painting.</li>
                </ol>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-white">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Can't I just DIY my exterior house paint job?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">Yes, but you'll have a lot to think about if you go that route. There are a lot of reasons you might not want to take on this job yourself, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>You have to know all the different materials your home's exterior is made of, and what paints/stains and tools will work best on them.</li>
                  <li>You have to consider how the climate where you live (like if it's frequently hot or rainy) will affect when you can paint and what your paint job will have to stand up to. Miami's intense sun, humidity, and salt air require specialized knowledge.</li>
                  <li>House exteriors have many high-up, difficult-to-reach places, so you'll have to invest in the proper equipment to paint these areas safely. This can also be incredibly dangerous if you're not used to being on a ladder to paint.</li>
                  <li>Can you invest the time to actually complete the job? You need to complete parts of the job in batches; you can't paint half a wall and then call it a day, or your work will look uneven.</li>
                  <li>You have to buy all the materials yourself, and be able to accurately calculate how much paint you need so you don't overspend. This is difficult without outdoor painting experience.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
