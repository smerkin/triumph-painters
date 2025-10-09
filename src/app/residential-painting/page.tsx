import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
              BEST HOME PAINTING SERVICES IN MIAMI & SOUTH FLORIDA
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/4043602854.png"
            alt="Professional painter painting home interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            HOME PAINTERS IN MIAMI THAT COVER ALL THE BASES
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have over 12 years of experience painting residential homes in Miami & South Florida. We're here to help make
                expert recommendations for your home, offer fair and competitive pricing, and complete work in a professional
                and efficient way so you can get back to spending time in the place that matters most.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We can help with projects in any type of home, including:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li><Link href="/interior-painting" className="text-accent underline font-semibold">Painting interior home surfaces</Link> - We can take care of any room inside your home, tackling even those most unique or tricky-to-paint areas.</li>
                <li><Link href="/exterior-painting" className="text-accent underline font-semibold">Painting exterior home surfaces</Link> - We always bring the right equipment and team members to paint outdoor projects, and can handle high or hard-to-reach outdoor areas.</li>
                <li><Link href="/condo-painting" className="text-accent underline font-semibold">Painting condos, apartments, and townhouses</Link> - These specialized building types, homes answering to condo boards, and renters need top-tier work that keeps the value of the home as high as possible.</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                Our team at Triumph Painters can meet any needs you have for your home painting project, and complete the
                work with a level of quality you'll be proud to have in your home.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/3264808087.png"
                alt="Professional painter painting interior room in house"
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

      {/* Types of Residential Painting Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            TYPES OF RESIDENTIAL PAINTING WE SPECIALIZE IN
          </h2>

          <div className="space-y-12">
            {/* House Interior */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/724021199.png"
                  alt="House Interior"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">House Interior</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Minimize Downtime & Disruption</p>
                <p className="text-gray-600 leading-relaxed">
                  The last thing you need is a team of painters dropping in and out for weeks, making mistakes, or leaving a mess behind when the job is done.
                  We treat your home like it's our own, and we guarantee you'll be happy with the final results when you sit back and relax in your freshly painted rooms.
                </p>
              </div>
            </div>

            {/* House Exterior */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/2630143908.png"
                  alt="House Exterior"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">House Exterior</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Prioritizing Safety & Aesthetic Look</p>
                <p className="text-gray-600 leading-relaxed">
                  The exterior of your home is the first thing people see when they approach, so the way it looks is very important, but house exterior
                  painting often requires an extra level of safety and professional skill as it involves ladders, paint sprayers, and other nuances. Let us bring all the
                  equipment needed to do the job safely, while still giving you a professional final look.
                </p>
              </div>
            </div>

            {/* Condos & Apartments */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3671522003.png"
                  alt="Condos & Apartments"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Condos & Apartments</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Professional Quality Answerable to Any Board</p>
                <p className="text-gray-600 leading-relaxed">
                  If you live in a condo, there are usually rules about the look of your unit, and what you can or can't paint inside and out, and high-rise buildings
                  offer an additional challenge when it comes to painting. Let us take care of these condo painting difficulties - so you don't have to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOME AREAS WE CAN PAINT WITH EASE
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            We can paint any type of room, surface, or area both inside and out of your home. The most popular types of
            residential painting jobs we get asked about are:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Interior Home Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Living Areas</li>
                <li>• Bedroom Painting</li>
                <li>• Bathroom Painting</li>
                <li>• Kitchen + Cabinet Painting</li>
                <li>• Basement Painting</li>
                <li>• Ceilings</li>
                <li>• Trim & Crown Molding</li>
                <li>• Interior Doors</li>
                <li>• Dining Room</li>
                <li>• Home Office / Den</li>
                <li>• Nurseries</li>
                <li>• Hallways</li>
                <li>• Foyers / Entrances</li>
                <li>• Staircases</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Exterior Home Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Home Exterior Surface Painting & Staining</li>
                <li>• Deck Painting & Staining</li>
                <li>• Fence Painting & Staining</li>
                <li>• Porch Painting & Staining</li>
                <li>• Exterior Door Painting, Staining, Trim, & Casings</li>
                <li>• Garage Door Painting, Staining, Trim, & Casings</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Image
              src="https://ext.same-assets.com/330995101/1265679883.png"
              alt="Nicely painted open concept interior room"
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
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
                  src="https://ext.same-assets.com/330995101/2681065692.png"
                  alt="Drywall Patching, Taping, Repair"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Drywall Patching, Taping, Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  If any of your walls have cracks, breaks, or are just in relatively bad shape, let us tape, patch, repair, and
                  smooth them out before we paint to give the final finish of your walls the best look possible.
                </p>
              </CardContent>
            </Card>

            {/* Epoxy Flooring */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/3615229724.png"
                  alt="Epoxy Flooring"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Epoxy Flooring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Epoxy is a great choice for many residential spaces - especially basements, garages, or other specialty room areas - as it can offer
                  a long-term cost effective option, as well as giving the room a great final look.
                </p>
              </CardContent>
            </Card>

            {/* Concrete Polishing */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/4095035844.png"
                  alt="Concrete Polishing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Concrete Polishing</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any concrete floors in areas like the garage, the porch, or the basement, we can repair and fill any cracks, smooth
                  them out, and give them a polish to create a beautiful final look that's also durable and long-lasting.
                </p>
              </CardContent>
            </Card>

            {/* Wallpaper Removal */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/3671522003.png"
                  alt="Wallpaper Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Wallpaper Removal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Have any rooms with outdated, old, peeling, or fading wallpaper that you want gone? Wallpaper removal can be an
                  incredibly daunting process - especially if you don't have the professional-grade equipment needed to remove it. Let us take care of that for you!
                </p>
              </CardContent>
            </Card>

            {/* Interior Caulking */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/1048624127.png"
                  alt="Interior Caulking"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior Caulking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Often, small cracks are created in key areas of the home like kitchen countertops, baseboards, and trim that need to be repaired with proper
                  caulking. We can help you with that before or after painting to give you the best possible final result you're looking for.
                </p>
              </CardContent>
            </Card>

            {/* Stucco Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/2321624598.png"
                  alt="Interior & Exterior Stucco Painting or Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior & Exterior Stucco Painting or Removal</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you're looking for a unique finish to your home exterior or ceilings and want stucco added, we can help you with that. If you have older stucco surfaces
                  you want gone, we can remove them with our professional tools and quick practices too!
                </p>
              </CardContent>
            </Card>

            {/* Brick Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/2088842428.png"
                  alt="Brick Painting & Staining"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Brick Painting & Staining</h3>
                <p className="text-gray-600 leading-relaxed">
                  Do you have a brick exterior on your home? If so, it requires painting and staining in a very particular way that's best left to
                  professionals with the right tools, and who have lots of experience painting residential brick walls.
                </p>
              </CardContent>
            </Card>

            {/* Aluminium Siding */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/1504562691.png"
                  alt="Aluminium Siding Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Aluminium Siding Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  If the outside of your home, garage, or shed is made of aluminium siding, this can create a challenge as special paint and
                  techniques are needed for this particular type of surface. Let us know what kind of look you're going for, and we can make it happen.
                </p>
              </CardContent>
            </Card>

            {/* Vinyl Siding */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/2882963946.png"
                  alt="Vinyl Siding & Window Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Vinyl Siding & Window Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Don't put the burden on yourself of climbing up the side of your house while trying to leave perfectly straight, clean, and nice-looking
                  painting lines on your vinyl siding or window trim. Let us take care of that for you!
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

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO KNOW YOU ARE CHOOSING THE BEST MIAMI HOUSE PAINTERS
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Are Accredited, Insured, & Have Great Reviews
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Don't go with any old company promising you the world while offering you the lowest price out there. Check for reviews, make sure the company is insured, and make sure they've completed lots of residential painting projects you can see photos or testimonials of that compare to your residential painting project.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Make Customized Recommendations For Your Home
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Your home is your sanctuary, and it's completely unique to you and your family. You need painters with genuine residential painting experience who can help make suggestions to get you to the perfect creative final destination to get the painting results you want for the space in your home.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Their Pricing Model is Clear, Upfront, & Honest
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  If a company offers you a price upfront with no specifications about your project or without asking questions, there's a pretty good chance they will go back on their quote, leaving you with a much higher final bill. Choose a company that asks questions about your job so they can offer you an accurate estimate on the work.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Have the Right Tools For Residential Painting Jobs
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Professionals come equipped with the right tools. Choose a company that can explain exactly what equipment is needed for your job, and brings the things that make sense to you based on the needs of your home and the work you want done.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY TRIUMPH PAINTERS IS THE BEST CHOICE FOR RESIDENTIAL PAINTING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fully Insured & WSIB-Certified</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our painters are fully licensed and certified, and have comprehensive liability insurance for all of our painting projects. This means you can trust
                  us in your home and know with certainty that (even though we don't make mistakes, if we do,) they will be taken care of with no
                  risk to you or the possessions in your home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">$</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fair Pricing for Residential Home Owners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our prices are fair, transparent, upfront, and honest - we encourage you to shop around and look for accurate quotes based
                  on the specifics of your painting project, as we're sure you'll feel you're getting a value from the price we offer for the professional-grade and quality work we offer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Stellar Commercial Resume in South Florida</h3>
                <p className="text-gray-600 leading-relaxed">
                  We have over 12 years of experience painting in Miami, South Florida, and the surrounding areas, and have hundreds and
                  hundreds of satisfied residential customers, as well as well-known businesses happy with our work. We've been trusted with
                  projects by big names in the area including Florida International University and Miami-Dade College.
                </p>
              </CardContent>
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

      {/* Painting Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHAT'S INVOLVED IN THE PAINTING PROCESS FOR RESIDENTIAL?
          </h2>

          <p className="text-lg text-gray-600 mb-8">There are typically 5 stages to painting residential homes:</p>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Cleaning & Preparing Surfaces",
                content: "Any surface being painted - inside or outside - needs to be cleaned properly to remove dust, dirt, mildew, pollen, loose paint, or anything else that's going to leave your painted surface less than perfect. This helps the paint adhere to the surface better, and is especially important for outdoor surfaces that often get dirtier than interior spaces."
              },
              {
                number: "2",
                title: "Repair Any Damaged Areas",
                content: "If any cracks, taping, patching, or repairs on walls are needed, caulking trim and baseboards, wallpaper removal, or any other type of preparation required, this is the time to do it. It's important to make sure all surfaces are ready for the paint, which can also include priming the surfaces for the paint to adhere better."
              },
              {
                number: "3",
                title: "Painting the Trim/Siding Areas",
                content: "Many interior surfaces like baseboards, trim, or crown molding, or exterior surfaces like siding and trim can often be painted first to get the detail work out of the way, or utilise sprayers and other tools to help the work go faster."
              },
              {
                number: "4",
                title: "Painting the Walls/Bulk Area",
                content: "Once all the prep and detail work is out of the way, you can proceed to painting the main surface areas like the ceilings, inside/outside walls, staining brick, and so on, usually with rollers or sometimes with sprayers."
              },
              {
                number: "5",
                title: "Touchups and Finishing Touches",
                content: "When all the work is out of the way, you want to check every little area and make sure to tidy up any small flaws you see with detailed work. At this stage you'd also clean up all the supplies, and make sure the paint didn't leave any kind of mess behind."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            7 COMMON FAQS WE'RE ASKED AS HOUSE PAINTERS IN MIAMI
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What is the typical residential painting cost per square foot in Miami?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for residential painting jobs?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Who buys the paint, and how do I choose my colour?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How long does home painting typically take?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What should I do to prepare my home for painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What types of tools do residential painting jobs require?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Can't I just DIY my home painting job?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>
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
                <li><Link href="/residential-painting" className="hover:text-accent">Residential Painting</Link></li>
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
    </div>
  )
}
