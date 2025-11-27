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
      <section className="relative bg-gray-600 text-white py-20 lg:py-28 min-h-[500px] lg:min-h-[600px] flex items-center">
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
            src="/images/miami-residential-painting-hero.png"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col">
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
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Our team at Triumph Painters delivers exceptional results with attention to detail you'll be proud to showcase in your home.
              </p>
            </div>

            <div className="relative h-full">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="/images/miami-home-painting.png"
                alt="Beautiful painted interior in Miami home"
                fill
                className="object-cover rounded-lg shadow-lg"
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

          <div className="space-y-8">
            {/* House Interior */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-interior-painting.png"
                  alt="Interior house painting Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">House Interior</h3>
                <p className="text-sm font-semibold text-accent mb-2">Minimize Disruption & Maximize Results</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your home is your sanctuary, and the last thing you need is weeks of disruption from contractors who
                  make mistakes or leave a mess behind. We treat your Miami home with the utmost respect, using
                  climate-appropriate paints and proven techniques.
                </p>
              </div>
            </div>

            {/* House Exterior */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">House Exterior</h3>
                <p className="text-sm font-semibold text-accent mb-2">Hurricane-Ready & Aesthetically Superior</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Miami's exterior painting demands more than just good looks - it requires protection against hurricanes,
                  salt air, and year-round UV exposure. Our expertise includes specialized equipment for
                  safe multi-story work and premium weather-resistant paints.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-house-exterior-painting.png"
                  alt="Exterior house painting Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>

            {/* Condos & Apartments */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="w-full aspect-[16/9] relative">
                <Image
                  src="/images/miami-condos-painting.png"
                  alt="Condo painting Miami"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Condos & Apartments</h3>
                <p className="text-sm font-semibold text-accent mb-2">HOA-Compliant & Board-Approved Quality</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Miami's condo and apartment living comes with unique regulations and challenges. We navigate HOA
                  requirements, coordinate with property management, and handle the complexities of high-rise buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Areas We Can Paint With Ease */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-accent pb-2">
            HOME AREAS WE CAN PAINT WITH EASE
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            We can paint any type of room, surface, or area both inside and out of your home. The most popular types of residential painting jobs we get asked about in Miami and South Florida are:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Interior Home Areas */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
                Interior Home Areas
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Living Areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Bedroom Painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Bathroom Painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Kitchen + Cabinet Painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Basement Painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Ceilings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Trim & Crown Molding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Interior Doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Dining Room</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Home Office / Den</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Nurseries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Hallways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Foyers / Entrances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Staircases</span>
                </li>
              </ul>
            </div>

            {/* Exterior Home Areas */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
                Exterior Home Areas
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Home Exterior Surface Painting & Staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Deck Painting & Staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Fence Painting & Staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Porch Painting & Staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Exterior Door Painting, Staining, Trim, & Casings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Garage Door Painting, Staining, Trim, & Casings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialty Services Beyond Home Painting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            OUR SPECIALTY SERVICES BEYOND HOME PAINTING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Drywall Patching */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-drywall-patching-taping-repair.png"
                  alt="Drywall Patching, Taping, Repair"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Drywall Patching, Taping, Repair</h3>
                <p className="text-gray-600 text-sm">
                  If any of your walls have cracks, breaks, or are just in relatively bad shape, let us tape, patch, repair, and smooth them out before we paint to give the final finish of your walls the best look possible.
                </p>
              </CardContent>
            </Card>

            {/* Wallpaper Removal */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-wallpaper-removal-services.png"
                  alt="Wallpaper Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Wallpaper Removal</h3>
                <p className="text-gray-600 text-sm">
                  Have any rooms with outdated, old, peeling, or fading wallpaper that you want gone? Wallpaper removal can be an incredibly daunting process - especially if you don't have the professional-grade equipment needed to remove it. Let us take care of that for you!
                </p>
              </CardContent>
            </Card>

            {/* Interior Caulking */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-Interior-caulking-services.png"
                  alt="Interior Caulking"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior Caulking</h3>
                <p className="text-gray-600 text-sm">
                  Often, small cracks are created in key areas of the home like kitchen countertops, baseboards, and trim that need to be repaired with proper caulking. We can help you with that before or after painting to give you the best possible final result you're looking for.
                </p>
              </CardContent>
            </Card>

            {/* Stucco Painting or Removal */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-stucco-popcorn-ceiling-removal.png"
                  alt="Interior & Exterior Stucco Painting or Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior & Exterior Stucco Painting or Removal</h3>
                <p className="text-gray-600 text-sm">
                  If you're looking for a unique finish to your home exterior or ceilings and want stucco added, we can help you with that. If you have older stucco surfaces you want gone, we can remove them with our professional tools and quick practices too!
                </p>
              </CardContent>
            </Card>

            {/* Aluminium Siding Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-exterior-aluminium-siding-painting.png"
                  alt="Aluminium Siding Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Aluminium Siding Painting</h3>
                <p className="text-gray-600 text-sm">
                  If the outside of your home, garage, or shed is made of aluminium siding, this can create a challenge as special paint and techniques are needed for this particular type of surface. Let us know what kind of look you're going for, and we can make it happen.
                </p>
              </CardContent>
            </Card>

            {/* Vinyl Siding & Window Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/miami-exterior-vinyl-siding-painting.png"
                  alt="Vinyl Siding & Window Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Vinyl Siding & Window Painting</h3>
                <p className="text-gray-600 text-sm">
                  Don't put the burden on yourself of climbing up the side of your house while trying to leave perfectly straight, clean, and nice-looking painting lines on your vinyl siding or window trim. Let us take care of that for you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
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

      {/* How to Know You Are Choosing the Best Miami House Painters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO KNOW YOU ARE CHOOSING THE BEST MIAMI HOUSE PAINTERS
          </h2>

          <div className="space-y-8 max-w-4xl">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">They Are Accredited, Insured, & Have Great Reviews</h3>
              <p className="text-gray-600">
                Don't go with any old company promising you the world while offering you the lowest price out there. Check for reviews, make sure the company is insured, and make sure they've completed lots of residential painting projects you can see photos or testimonials of that compare to your residential painting project.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">They Make Customized Recommendations For Your Home</h3>
              <p className="text-gray-600">
                Your home is your sanctuary, and it's completely unique to you and your family. You need painters with genuine residential painting experience who can help make suggestions to get you to the perfect creative final destination to get the painting results you want for the space in your home.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Their Pricing Model is Clear, Upfront, & Honest</h3>
              <p className="text-gray-600">
                If a company offers you a price upfront with no specifications about your project or without asking questions, there's a pretty good chance they will go back on their 'quote', leaving you with a much higher final bill. Choose a company that asks questions about your job so they can offer you an accurate estimate on the work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">They Have the Right Tools For Residential Painting Jobs</h3>
              <p className="text-gray-600">
                Professionals come equipped with the right tools. Choose a company that can explain exactly what equipment is needed for your job, and brings the things that make sense to you based on the needs of your home and the work you want done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Triumph Painters Is The Best Choice For Residential Painting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY TRIUMPH PAINTERS IS THE BEST CHOICE FOR RESIDENTIAL PAINTING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            <Card className="p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Fully Insured & Florida-Certified</h3>
              <p className="text-gray-600">
                Our painters are Florida-certified, and have comprehensive liability insurance for all of our painting projects. This means you can trust us in your home and know with certainty that (even though we don't make mistakes, if we do,) they will be taken care of with no risk to you or the possessions in your home.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Fair Pricing for Residential Home Owners</h3>
              <p className="text-gray-600">
                Our prices are fair, transparent, upfront, and honest - we encourage you to shop around and look for accurate quotes based on the specifics of your painting project, as we're sure you'll feel you're getting a value from the price we offer for the professional-grade and quality work we offer.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Stellar Residential Resume in South Florida</h3>
              <p className="text-gray-600">
                We have over 12 years of experience painting in Miami, Fort Lauderdale, and the surrounding areas, and have hundreds and hundreds of satisfied residential customers, as well as well-known businesses happy with our work. We've been trusted with projects throughout South Florida.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 3 */}
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

      {/* What's Involved in the Painting Process for Residential */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHAT'S INVOLVED IN THE PAINTING PROCESS FOR RESIDENTIAL?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            There are typically 5 stages to painting residential homes:
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
                      Cleaning & Preparing Surfaces
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Any surface being painted - inside or outside - needs to be cleaned properly to remove dust, dirt, mildew, pollen, loose paint, or anything else that's going to leave your painted surface less than perfect. This helps the paint adhere to the surface better, and is especially important for outdoor surfaces that often get dirtier than interior spaces.
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
                      Repair Any Damaged Areas
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      If any cracks, taping, patching, or repairs on walls are needed, caulking trim and baseboards, wallpaper removal, or any other type of preparation required, this is the time to do it. It's important to make sure all surfaces are ready for the paint, which can also include priming the surfaces for the paint to adhere better.
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
                      Painting the Trim/Siding Areas
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Many interior surfaces like baseboards, trim, or crown molding, or exterior surfaces like siding and trim can often be painted first to get the detail work out of the way, or utilise sprayers and other tools to help the work go faster.
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
                      Painting the Walls/Bulk Area
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once all the prep and detail work is out of the way, you can proceed to painting the main surface areas like the ceilings, inside/outside walls, staining brick, and so on, usually with rollers or sometimes with sprayers.
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
                      Touchups and Finishing Touches
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      When all the work is out of the way, you want to check every little area and make sure to tidy up any small flaws you see with detailed work. At this stage you'd also clean up all the supplies, and make sure the paint didn't leave any kind of mess behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Common FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            7 COMMON FAQS WE'RE ASKED AS HOUSE PAINTERS IN MIAMI
          </h2>

          <div className="space-y-6 max-w-4xl">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What is the typical residential painting cost per square foot in Miami?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p className="mb-3">
                  On average, interior and exterior residential painting in Miami and South Florida costs about $2-$6 per square foot. This means a total project costs can usually range somewhere between $2000-$8000 in general, but can be as little as $350-$800 for a small room, or $1000-$1400 for a larger room.
                </p>
                <p>
                  The costs depend heavily on the size, amount of prep work and repairs involved, and whether any specialty equipment is needed for the project. The best way to get an accurate estimate for your work is to provide as much information about the space as possible upfront.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for residential painting jobs?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p>
                  Yes, we are 100% insured for comprehensive liability coverage for residential painting projects, and our workers are all Florida-certified, so you can rest assured that even though accidents or problems are very unlikely to come from our team, you are covered no matter what.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Who buys the paint, and how do I choose my colour?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p>
                  This is up to you. Typically the painter will bring their own paint, but you can choose the colour and provide it to them upfront. We use top-quality paint products and are happy to provide it for the job, but if you wanted to provide your own paint, let us know when getting the estimate for your project.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How long does home painting typically take?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p>
                  A single small room project can take as little as a few hours, while an entire home inside and out with many repairs along the way could take up to a few weeks - it really depends on the size of your project. For most typical homes and projects in Miami, the work usually takes a couple of days.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What should I do to prepare my home for painting?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p className="mb-3">
                  A few small preparations can help make the painting job go more smoothly and get completed faster. Some things you might want to do before painters arrive in your home are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Get furniture and personal items out of the way of any rooms being painted, or at least cover them with protective cloths</li>
                  <li>Clean up any debris or items in the way on the floor to make it easier for the painters to get around the home and to set up their equipment and supplies</li>
                  <li>Try to keep residents out of the way, only entering rooms when absolutely necessary</li>
                  <li>Open up windows and doors when possible to help ventilate the area better</li>
                </ul>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What types of tools do residential painting jobs require?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p className="mb-3">
                  There are a few key tools you need for both interior or exterior painting jobs, and these are some of the most common ones you'll find for each type of job.
                </p>
                <p className="mb-2 font-semibold">Interior:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Paintbrushes for detail work</li>
                  <li>Paint rollers for main wall surfaces</li>
                  <li>Dropcloth to protect surfaces</li>
                  <li>Painter's tape</li>
                  <li>Caulk & caulking gun</li>
                  <li>Drywall tape & putty</li>
                  <li>Surface prep & patching tools</li>
                </ul>
                <p className="mb-2 font-semibold">Exterior:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Paint sprayers to cover larger areas</li>
                  <li>Staining equipment</li>
                  <li>Ladders and safety equipment</li>
                  <li>Exterior painter's tape and sheet covers</li>
                  <li>Pressure washer for cleaning</li>
                  <li>Wire brushes & scrapers</li>
                </ul>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Can't I just DIY my home painting job?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-4 bg-white text-gray-700">
                <p className="mb-3">
                  Yes, you could, and because you're doing the job yourself, you'd only have to pay for the paint and equipment, but you'll likely be missing out significantly on the quality of the work, and it will take much longer. There are some pros and cons to DIY painting vs hiring professionals:
                </p>
                <p className="mb-2 font-semibold">Pros to hiring professionals:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Quality of the work will be much higher</li>
                  <li>Painting will be completed faster</li>
                  <li>Proper equipment will be used</li>
                  <li>Better final look to the space</li>
                  <li>Quality paints used for the project</li>
                  <li>Much smaller overall time investment</li>
                  <li>Longer-lasting finish</li>
                </ul>
                <p className="mb-2 font-semibold">Pros to DIY painting:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Overall cost will be lower</li>
                  <li>You have full control over the process and what is done</li>
                  <li>Acquire skill for painting that might be useful for future projects</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
