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
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              CONDO & APARTMENT PAINTING IN MIAMI
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Miami Condo Painters That Specialize in Units
            </h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/1892792666.png"
            alt="Professional condo painting in Miami"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            MIAMI CONDO PAINTERS THAT SPECIALIZE IN UNITS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/1162954364.webp"
                alt="Miami condo painting project"
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
                  src="https://ext.same-assets.com/330995101/488536908.webp"
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
                  src="https://ext.same-assets.com/330995101/2439729262.webp"
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
                  src="https://ext.same-assets.com/330995101/4161435038.webp"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT AREAS WE SPECIALIZE IN
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/3020848971.webp"
                  alt="Living areas condo painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Living Areas</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/2774112478.webp"
                  alt="Kitchens and cabinets painting Miami"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Kitchens & Cabinets</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/4254724485.webp"
                  alt="Bathroom painting Miami condos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Bathrooms</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/3058108099.webp"
                  alt="Bedroom painting Miami condos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Bedrooms</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/836820218.webp"
                  alt="Home office painting Miami condos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Home Office / Den</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="https://ext.same-assets.com/330995101/3062612262.webp"
                  alt="Hallway painting Miami condos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold">Hallways / Entrances</h3>
              </CardContent>
            </Card>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CONDO & APARTMENT SERVICES BEYOND PAINTING
          </h2>

          <div className="space-y-12">
            {/* Drywall Repair */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/2551127854.png"
                  alt="Drywall repair Miami condos"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Drywall Patching, Taping, & Repair</h3>
                <p className="text-sm font-semibold text-accent mb-3">Prepare Your Drywall for Painting</p>
                <p className="text-gray-600">
                  Paint jobs look best on drywall when it's properly installed and maintained. Our professional interior
                  painting team can patch and tape drywall to ensure it's secure in place before painting. We can also fix
                  any dents, cracks, or holes in your drywall so you get a smooth, even finish that withstands Miami's humidity.
                </p>
              </div>
            </div>

            {/* Wallpaper Removal */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Wallpaper Removal</h3>
                <p className="text-sm font-semibold text-accent mb-3">Clear Your Walls and Cut Down on Prep Time</p>
                <p className="text-gray-600">
                  If you need to remove wallpaper from a wall before painting, it must be done carefully. A sloppy job can
                  leave pieces of wallpaper or adhesive stuck to your wall, or even damage the underlying surface. This adds
                  extra prep work before you can actually start painting. Triumph Painters can expertly handle this step for you.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://ext.same-assets.com/330995101/1200164217.png"
                  alt="Wallpaper removal Miami condos"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Interior Caulking */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://ext.same-assets.com/330995101/1231251327.png"
                  alt="Interior caulking Miami condos"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Interior Caulking</h3>
                <p className="text-sm font-semibold text-accent mb-3">Seal Trim and Baseboards to Prevent Gaps</p>
                <p className="text-gray-600">
                  You want to caulk your trim and baseboards before painting. Otherwise, they'll eventually come loose from
                  impacts, vibrations, and expansion-contraction due to Miami's temperature changes. This creates gaps that
                  show lines between new and old paint, compromising your finished look. Triumph Painters provides professional
                  caulking for an even, lasting finish.
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
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">They Are Insured & Florida-Certified</h3>
              <p className="text-gray-600">
                When it comes to apartment painting in Miami, you want it done safely. Triumph Painters offers peace of mind
                by having everyone on our painting team fully licensed and insured in Florida. We maintain comprehensive
                liability insurance with each job, so if there's an accident, you aren't responsible.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Condo & Apartment Painting Experts</h3>
              <p className="text-gray-600">
                Since our establishment in Miami, we've specialized in painting residential buildings – and condos, apartments,
                and townhouses are our expertise. As experienced apartment painters in Miami, we can advise you on looks that
                work with your space and equipment that delivers the best, longest-lasting finish in South Florida's climate.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fair Condo & Apartment Painting Prices</h3>
              <p className="text-gray-600">
                You want your space to look great, but you don't want to pay a fortune for it. We understand. We'll walk you
                through what each element of your painting project costs and why, so you can rest assured that you're getting
                excellent value for your money in the Miami market.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Outstanding Painting Record in South Florida</h3>
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
                Most Miami condo painting projects take 2-5 days per unit, depending on size, prep work needed, and drying
                time required in our humid climate. We work efficiently to minimize disruption to your daily routine.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
