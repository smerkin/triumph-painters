import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Condo & Apartment Painting Services Miami | Triumph Painters",
  description: "Professional condo and apartment painting services in Miami. Interior and exterior painting for condominiums, apartments, and multi-unit residential properties.",
  keywords: "condo painting Miami, apartment painting, multi-unit painting, residential painting Florida",
}

export default function CondoPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-20 lg:py-28 min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6 shadow-lg">
              CONDO & APARTMENT PAINTING IN MIAMI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Miami Condo Painters That Specialize in Units
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
              Professional interior and exterior painting services for condominiums, apartments, and multi-unit residential properties throughout South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="tel:305-555-0123">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                  📞 305-555-0123
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/images/miami-condo-apartment-townhouses-painting.png"
            alt="Professional condo painting in Miami"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            MIAMI CONDO PAINTERS THAT SPECIALIZE IN UNITS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For condo painting in Miami, trust Triumph Painters. We've been experts in residential painting for over a decade,
                so we have the expertise to select colors that will give your unit a more open and fresh look while withstanding
                South Florida's unique climate. We have the tools and experience to handle all of the following:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Wallpaper removal</li>
                <li>Painting interior walls</li>
                <li>Painting interior trim, doors, and window frames</li>
                <li>Painting interior ceilings</li>
                <li>HOA compliance coordination</li>
                <li>Property management liaison</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                We understand the nuances of condo living in Miami, and how challenging a painting project can be when you have to
                coordinate with HOA boards and consider other residents for the duration of your project. Our professional team works
                efficiently to minimize disruptions and let you get back to enjoying your space as soon as possible.
              </p>
            </div>

            <div className="relative h-full">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="/images/miami-condo-apartment-painting.png"
                alt="Miami condo painting project"
                width={500}
                height={400}
                className="w-full h-[90%] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A CONDO PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Building Types We Paint */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            BUILDING TYPES WE PAINT
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/miami-condo-painting.png"
                  alt="Condos and apartments painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Condos & Apartments</h3>
                <p className="text-gray-600">
                  A condo or apartment is your living space, so you want it to reflect who you are while still being
                  welcoming to guests. As Miami condo painters with over a decade of expertise in painting residential
                  buildings, we can help you strike that perfect balance.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/miami-high-rise-building-painting.png"
                  alt="High-rise building painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">High-Rise Buildings</h3>
                <p className="text-gray-600">
                  Modern Miami architects are creating innovative high-rise designs, typically favoring more open concepts.
                  Triumph Painters can help you paint your unit to complement your building's design while maximizing
                  natural light and space.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/miami-townhouses-painting.png"
                  alt="Townhouse painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Townhouses</h3>
                <p className="text-gray-600">
                  Living in a Miami townhouse lets you control not only what the inside looks like, but what the outside
                  looks like as well. As residential painting experts, Triumph Painters have the expertise and equipment
                  to enhance your home's interior, exterior, or both.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Condo & Apartment Areas We Specialize In */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT AREAS WE SPECIALIZE IN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <Image
                src="/images/miami-living-areas-painting.webp"
                alt="Living Areas"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Living Areas</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-kitchen-painting.webp"
                alt="Kitchens & Cabinets"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Kitchens & Cabinets</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-bath-room-painting.webp"
                alt="Bathrooms"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Bathrooms</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-bedroom-painting.png"
                alt="Bedrooms"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Bedrooms</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-home-office-painting.webp"
                alt="Home Office"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Home Office / Den</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-hallway-painting.webp"
                alt="Hallways"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Hallways / Entrances</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-ceilings-painting.png"
                alt="Ceilings"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Ceilings</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-trim-crown-molding-painting.webp"
                alt="Trim & Crown Molding"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Trim & Crown Molding</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/miami-door-painting.webp"
                alt="Doors"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Doors</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A CONDO PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Condo & Apartment Services Beyond Painting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT SERVICES BEYOND PAINTING
          </h2>

          <div className="space-y-12">
            {/* Drywall Patching */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="/images/miami-drywall-patching-taping-repair.png"
                  alt="Drywall Patching, Taping, & Repair"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Drywall Patching, Taping, & Repair</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Get Your Drywall Ready To Paint</p>
                <p className="text-gray-600 leading-relaxed">
                  Drywall is difficult to paint if it isn't secured properly or has flaws in it, leading to a finish that's uneven or otherwise just doesn't look good. Let
                  our painting experts patch, tape, and repair drywall you want painted so that you avoid imperfections and end up with a smooth finish.
                </p>
              </div>
            </div>

            {/* Wallpaper Removal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="/images/miami-wallpaper-removal-services.png"
                  alt="Wallpaper Removal"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Wallpaper Removal</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Remove Wallpaper Right to Speed Up Painting</p>
                <p className="text-gray-600 leading-relaxed">
                  If you want to paint a wall with wallpaper on it, you have to remove the wallpaper first. But if you don't do that correctly, it can end up leaving
                  debris and imperfections that make prepping the underlying wall take longer. Cut down on unnecessary painting time by leaving wallpaper
                  removal to our expert painting team.
                </p>
              </div>
            </div>

            {/* Stucco Ceiling Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="/images/miami-stucco-popcorn-ceiling-painting-services.png"
                  alt="Stucco / Popcorn Ceiling Painting"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Stucco / Popcorn Ceiling Painting</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Freshen Up Your Stucco or Give It a Whole New Look</p>
                <p className="text-gray-600 leading-relaxed">
                  Stucco and popcorn ceilings used to have limited color options, but now most kinds of exterior paint can refresh or change their look. Let our
                  professional team of interior painters in Miami use the paints, tools, and preparation techniques to paint your stucco or popcorn ceiling the right way.
                </p>
              </div>
            </div>

            {/* Stucco Ceiling Removal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="/images/miami-stucco-popcorn-ceiling-removal.png"
                  alt="Stucco / Popcorn Ceiling Removal"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Stucco / Popcorn Ceiling Removal</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Remove Textured Finishes Properly to Avoid Delays</p>
                <p className="text-gray-600 leading-relaxed">
                  Like with wallpaper, removing stucco and popcorn ceilings carelessly can leave debris or imperfections that make the underlying surface difficult to
                  paint. Our team of painting experts can remove stucco and popcorn ceilings properly so you can get to painting the surfaces underneath faster.
                </p>
              </div>
            </div>

            {/* Interior Caulking */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="/images/miami-Interior-caulking-services.png"
                  alt="Interior Caulking"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Interior Caulking</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Seal Trim and Baseboards for a Smooth Finish</p>
                <p className="text-gray-600 leading-relaxed">
                  Trim and baseboards can eventually come loose with exposure to the elements and wear & tear over time. This creates gaps that expose the
                  lines between areas where you painted and where you didn't paint. We can stick and seal your trim and baseboards to your walls so that you get a
                  uniform-looking painting finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO CHOOSE A QUALITY CONDO PAINTER IN MIAMI
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Insured, Accredited, & Well-Reviewed
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                You want to hire painters who can demonstrate excellent work. Look for proof such as photos of completed
                projects (especially condos, apartments, and townhouses with interior spaces similar to yours), plus reviews
                and testimonials from customers regarding professionalism and quality. Ensure they can back their work with
                insurance and safety qualifications.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Specific Recommendations for Miami Buildings
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Not every condo, apartment, or townhouse in Miami is designed the same way. Based on location, surrounding
                color scheme, wall materials, and coastal considerations, some looks will work better than others. Ask painting
                contractors what they could do to achieve your vision based on your specific space and South Florida's climate challenges.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Clear & Honest Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Getting a condo, apartment, or townhouse painted shouldn't come with pricing surprises. Seemingly inexpensive
                rates shouldn't disguise high fees for materials, travel, and prep work. A painting contractor should be thorough
                in assessing your space so they can be upfront about what all project elements will cost.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-xl font-semibold text-primary cursor-pointer flex items-center justify-between">
                Proper Tools For Painting Miami Units
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                The best tools to paint the interior of your Miami condo, apartment, or townhouse depend on factors like space
                size, shape, and surface materials. Ask contractors whether they have equipment to work safely and efficiently
                in your space, considering humidity control and ventilation needs specific to South Florida's climate.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Triumph Painters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY CHOOSE TRIUMPH PAINTERS FOR CONDO & APARTMENTS?
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
              <h3 className="text-xl font-bold mb-4 text-center">They Are Insured & Florida-Certified</h3>
              <p className="text-gray-600">
                When it comes to apartment painting in Miami, you want it done safely. Triumph Painters offers peace of mind
                by having everyone on our painting team fully licensed and insured in Florida. We maintain comprehensive
                liability insurance with each job, so if there's an accident, you aren't responsible.
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
              <h3 className="text-xl font-bold mb-4 text-center">Condo & Apartment Painting Experts</h3>
              <p className="text-gray-600">
                Since our establishment in Miami, we've specialized in painting residential buildings – and condos, apartments,
                and townhouses are our expertise. As experienced apartment painters in Miami, we can advise you on looks that
                work with your space and equipment that delivers the best, longest-lasting finish in South Florida's climate.
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
              <h3 className="text-xl font-bold mb-4 text-center">Fair Condo & Apartment Painting Prices</h3>
              <p className="text-gray-600">
                You want your space to look great, but you don't want to pay a fortune for it. We understand. We'll walk you
                through what each element of your painting project costs and why, so you can rest assured that you're getting
                excellent value for your money in the Miami market.
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
              <h3 className="text-xl font-bold mb-4 text-center">Outstanding Painting Record in South Florida</h3>
              <p className="text-gray-600">
                We aren't just condo painters in Miami – we have extensive experience doing all sorts of residential painting
                projects, gaining the community's trust, and mastering new painting techniques. Our portfolio includes prestigious
                residential buildings and satisfied clients throughout South Florida.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 3 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A CONDO PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Condo & Apartment Painting Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT PAINTING PROCESS
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            There are 6 stages to painting condos & apartments:
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
                      Prep where you're painting
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      First, you need to prepare the areas where you're going to paint. Move furniture and rugs out of the way, and put covers over them so they don't accidentally get paint on them. You can also put down some drop cloths to keep paint from splattering on objects and surfaces you don't want it to get on.
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
                      Remove obstacles from walls
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you have wallpaper on walls you're planning to paint, remove it carefully to avoid paper or adhesive remaining stuck to the wall. You should also remove things like decorations, mirrors, outlet/switch casings, and light fixtures from surfaces you're going to paint so you get a more even finish. You can leave nails, clips, or other items for hanging things on walls if you're going to put those objects back in the same places. Otherwise, remove them so the painters can paint over the holes.
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
                      Repair/clean/prep surfaces
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Patch and sand any holes, cracks, or dents in the surfaces you're painting. This will help the paint stick and give you a smoother finish. For the same reason, you should then clean those surfaces of dirt, dust, mold, and other contaminants. When they're dry, apply painter's tape to areas you don't want to get paint on.
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
                      Caulk edges of walls
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Unless you plan on removing trim or baseboards prior to painting, use caulking to seal them to the walls. Otherwise, they may come loose if exposed to impacts, vibrations, or temperature changes. This creates gaps that leave an uneven finish for your paint job, as you can see the lines between the new paint job and the old one.
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
                      Put primer on surfaces
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Put a coat of primer on surfaces you want to paint. If you want to go in a bold new colour direction on a surface, try using a primer that's pre-tinted by the paint store to be a similar colour. That way, you don't have to use as much actual paint to get the look you want.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">6</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Paint in a logical order
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Paint the trim first, then the ceiling, then the walls, and finally the baseboards. Painting in this order makes it easier to paint over any mistakes you make, rather than risking a mistake ending up on a surface you've already painted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT PAINTING FAQS
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What is the typical condo painting cost in Miami?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                The cost of painting a condo in Miami averages about $1,800-$4,000. This is affected by factors such as amount
                of prep work needed, surface area covered, paint quality, colors, and number of coats. Studio or 1-bedroom condos might
                cost $1,000-$2,500, while larger 2+ bedroom units typically range from $3,000-$6,000 depending on size and scope.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for condo painting jobs?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                Absolutely! Our entire Miami condo painting team is fully licensed and insured in Florida. We carry
                comprehensive liability insurance and provide certificates upon request for HOA requirements.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How long does condo & apartment painting take per unit?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                The time it takes to paint a condo or apartment unit depends on how big the space is, how much prep work is needed, and what elements need to be painted besides the walls. Small, well-prepped units with minimal painting needed can be finished in a day or two at most. Painting larger spaces and more elements – as well as requiring more prep work to start – can increase the time needed to 3-4+ days in Miami's humid climate.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                How do I prepare units for painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                You can save time for painting contractors you hire – leading to faster completion times and fewer disruptions – by thoroughly prepping the areas of a condo or apartment you're going to paint. This can include:
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Removing furniture, or at least covering it and isolating it from where you'll be painting</li>
                  <li>Removing rugs to avoid tripping hazards</li>
                  <li>Removing electrical outlet/switch casings and ceiling light fixtures (if it's safe to do so)</li>
                  <li>Removing decorations, mirrors, and light fixtures from walls</li>
                  <li>Laying down drop cloths to protect surfaces you don't want to get paint on</li>
                  <li>Repairing, cleaning, and priming the surfaces to be painted</li>
                </ul>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                What are the right tools needed for condo painting?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600 space-y-3">
                <p>Some critical tools you may need to paint your condo or apartment interior are:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Paintbrush</strong> – Use a size and type of paintbrush that matches the paint and surface you're working with. For example, use larger paintbrushes for open areas that you can cover quickly without worrying about mistakes, and smaller paintbrushes for tighter and more detailed areas where you need to be precise. Also, synthetic-bristle paintbrushes work better with latex paints, while natural-bristle paintbrushes work better with oil paints and varnishes.</li>
                  <li><strong>Roller</strong> – Like with paintbrushes, you want to match the type of roller you use to the surface you're working on. If you want a glossier-looking finish on your walls, go with a roller that has a shorter nap. Conversely, if you're wanting a flat-looking finish on your ceilings, a roller with a longer nap is what you want.</li>
                  <li><strong>Drop cloths</strong> – We recommend investing in quality cotton drop cloths, as opposed to using plastic ones, newspaper, or bedsheets. They provide safer, less slippery surfaces that absorb and dry paint faster.</li>
                  <li><strong>Surface prep tools</strong> – Things like putty knives, paint scrapers, and sandpaper are useful for repairing or otherwise prepping the surfaces you're going to paint.</li>
                  <li><strong>Painter's tape</strong> – Like drop cloths, this helps prevent paint from getting on things you don't want it to get on. It can also be used for things like securing coverings on furniture.</li>
                  <li><strong>Ladder and/or roller extension pole</strong> – Use these to paint high places safely. Make sure they're large enough that you can reach the surfaces you want to paint without losing your balance.</li>
                </ol>
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <summary className="text-lg font-semibold text-primary cursor-pointer flex items-center justify-between">
                Can't I just DIY my condo painting job?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600">
                <p className="mb-3">Of course you can – if you have the equipment and skills to safely and effectively paint the different surfaces in your unit, but with condos and townhomes, it might be better to hire a painting team.</p>
                <p className="mb-3">If you are under a time crunch, for example, if you're planning to sell the condo soon, professionals can usually do the job faster and more cost-effectively so you're able to get more value out of your unit.</p>
                <p>Often with condos and townhomes in Miami, you might also have to answer to your HOA or condo board, and the quality and final look of your painting job could be subject to HOA rules and regulations. To have a more professional final look that adheres to these rules, you'd want to use professionals like Triumph Painters.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
