import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CommercialPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              COMMERCIAL PAINTING CONTRACTORS IN MIAMI & SOUTH FLORIDA
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/2501392984.png"
            alt="Commercial painting project"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            COMMERCIAL PAINTERS IN MIAMI THAT TAKE CARE OF BUSINESS
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From municipal institutions like hospitals and schools to business buildings like offices and retail spaces, every
                commercial painting project has its own unique challenges. During our time as commercial painters in Miami,
                Triumph Painters have tackled all sorts of different projects, including:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Interior painting</li>
                <li>Exterior painting</li>
                <li>School and office building painting</li>
                <li>Retail space refinishing</li>
                <li>High-rise and low-rise building painting</li>
                <li>Surface refinishing</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                We specialise in <Link href="/industrial" className="text-accent underline">industrial painting projects</Link>, as well as{' '}
                <Link href="/facility-painting" className="text-accent underline">helping facility managers with their maintenance schedules</Link>.
                Reach out to us regarding how any of the abovementioned services we offer can revitalize your commercial facility.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/2501392984.png"
                alt="Man painting a commercial building"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR A COMMERCIAL PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Commercial Painting for All Business Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            COMMERCIAL PAINTING FOR ALL BUSINESS TYPES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/2440509905.webp"
                alt="Offices & Medical Buildings"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Offices & Medical Buildings</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1264845856.webp"
                alt="Retail Space & Big Box Stores"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Retail Space & Big Box Stores</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3198368047.webp"
                alt="Restaurant & Fast Food Store"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Restaurant & Fast Food Store</h3>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3222661741.webp"
                alt="Commercial Kitchen & Cafeteria"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Commercial Kitchen & Cafeteria</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/2220938963.webp"
                alt="Entertainment Venue & Convention"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Entertainment Venue & Convention</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3962340456.webp"
                alt="School, Post-Secondary, & Daycare"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">School, Post-Secondary, & Daycare</h3>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3684541665.webp"
                alt="Industrial, Warehouse, & Factory"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Industrial, Warehouse, & Factory</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1590948023.webp"
                alt="Distribution & Production Plants"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Distribution & Production Plants</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/901601652.webp"
                alt="Hotel, Motel, Resort, & Hospitality"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Hotel, Motel, Resort, & Hospitality</h3>
              </div>
            </div>

            {/* Row 4 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/4122510326.webp"
                alt="Hospital & Long-term Care Facility"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Hospital & Long-term Care Facility</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3626963679.webp"
                alt="Church, Gym, Gallery, & Museum"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Church, Gym, Gallery, & Museum</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/2383879331.webp"
                alt="Restroom, Changeroom, & Showers"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Restroom, Changeroom, & Showers</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Commercial Building Needs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WE CAN HELP WITH SPECIALTY COMMERCIAL BUILDING NEEDS
          </h2>

          <div className="space-y-12">
            {/* Keeping Up Your Maintenance Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3768510832.png"
                  alt="Keeping Up Your Maintenance Schedule"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Keeping Up Your Maintenance Schedule</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">We help you repeat required work on a schedule</p>
                <p className="text-gray-600 leading-relaxed">
                  You're going to want to redo – or at least touch up – your commercial paint job every so often. Even if you aren't going for a
                  completely new look, it's still good to refresh the finish to reap the benefits of a professional paint job – even if that's just to
                  make the space look well-cared-for. We can set up a schedule to do maintenance work on your space's paint job and keep it looking like new.
                </p>
              </div>
            </div>

            {/* Drop-Deck Ceiling Spraying */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/587840938.png"
                  alt="Drop-Deck Ceiling Spraying"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Drop-Deck Ceiling Spraying</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">For the biggest commercial spaces and warehouses</p>
                <p className="text-gray-600 leading-relaxed">
                  Larger commercial spaces – such as industrial spaces like warehouses – can have high metal roofs that don't cover the supports, lights,
                  HVAC ductwork, and so on in the interior with a ceiling. These are tricky to paint because of how high up they are and how many exposed
                  elements you have to work around. That's why you should leave this kind of paint job to professional commercial painting contractors in
                  Miami – like us, Triumph Painters!
                </p>
              </div>
            </div>

            {/* Epoxy Flooring Installation & Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/71043554.png"
                  alt="Epoxy Flooring Installation & Repair"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Epoxy Flooring Installation & Repair</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Epoxy is sometimes a better choice for commercial</p>
                <p className="text-gray-600 leading-relaxed">
                  In some commercial spaces, epoxy floors work particularly well. If you want your floor to be able to stand up to lots of foot traffic,
                  heavy machinery, stacked products, and contaminants (e.g. mold, mildew, bacteria, and spills), an epoxy floor may be for you. Our expert
                  team can install epoxy floors right the first time so you don't have to worry so much about maintenance. We can also repair epoxy floors
                  in the event they do get damaged.
                </p>
              </div>
            </div>

            {/* Concrete Polishing & Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/182696919.png"
                  alt="Concrete Polishing & Repair"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Concrete Polishing & Repair</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Creating a durable and long-lasting surface</p>
                <p className="text-gray-600 leading-relaxed">
                  Sometimes an epoxy floor will be too big of an upfront investment for a commercial space. If it is, then polished concrete is a cost-effective
                  substitute that maintains many of epoxy's benefits – durability, easy maintenance, and a smooth-looking finish. Whether you need a new concrete
                  floor or repairs to an existing one, Triumph Painters are your top choice for commercial painting contractors in Miami and South Florida.
                </p>
              </div>
            </div>

            {/* Specialty Coatings */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/924672828.png"
                  alt="Specialty Coatings"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Speciality Coatings</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">When your commercial building needs a custom touch</p>
                <p className="text-gray-600 leading-relaxed">
                  Certain commercial settings may be more prone to hazards like heat, fire, spills, slips, water damage, corrosion, and contaminant buildup.
                  If yours is one of them, Triumph Painters can apply specialty coatings like insulators, waterproof membranes, elastomeric paint, and epoxy
                  to keep your space safe from what commonly threatens it.
                </p>
              </div>
            </div>

            {/* Drywall Patching, Taping, Repair, & Caulking */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3189386235.png"
                  alt="Drywall Patching, Taping, Repair, & Caulking"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Drywall Patching, Taping, Repair, & Caulking</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">We can clean up any problem areas</p>
                <p className="text-gray-600 leading-relaxed">
                  You won't get a smooth, even paint finish on drywall if it isn't secured properly or has holes, cracks, or dents in it. Triumph Painters
                  can fix up the flaws in your drywall surfaces before we paint them – including patching, taping, and caulking – so they end up with a uniform look.
                </p>
              </div>
            </div>

            {/* Stucco / Popcorn Ceiling Painting & Removal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/373689981.png"
                  alt="Stucco / Popcorn Ceiling Painting & Removal"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Stucco / Popcorn Ceiling Painting & Removal</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">For a fresher and refreshed look</p>
                <p className="text-gray-600 leading-relaxed">
                  There are many kinds of paints now that can change the look of stucco walls and popcorn ceilings. Triumph Painters have the tools and
                  know-how to get the painting results you want on stucco and popcorn ceilings, even if you just want a refresh and not a big overhaul.
                  We can also remove stucco and popcorn ceilings the right way so you aren't left cleaning up debris or fixing flaws before you start painting
                  the surfaces underneath.
                </p>
              </div>
            </div>

            {/* Line Painting & Marking */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/1476228118.png"
                  alt="Line Painting & Marking"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Line Painting & Marking</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Keep workers and customers safe and informed</p>
                <p className="text-gray-600 leading-relaxed">
                  Certain surfaces in your commercial space – such as your floors, and even some of your walls – may need special markings on them to warn
                  of safety hazards or communicate other information. Triumph Painters can customize your space's paint job to meet safety regulations and
                  be more accessible to your customers.
                </p>
              </div>
            </div>

            {/* Graffiti Removal & Anti-Graffiti Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3966337980.png"
                  alt="Graffiti Removal & Anti-Graffiti Painting"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Graffiti Removal & Anti-Graffiti Painting</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Stop graffiti from covering your paint job</p>
                <p className="text-gray-600 leading-relaxed">
                  Unwanted graffiti can be an unsightly nuisance that clashes with the look you want for your commercial building. As part of our Miami
                  commercial painting services, Triumph Painters can remove graffiti from your building's surfaces. We can also treat those surfaces with
                  anti-graffiti coating so the graffiti doesn't come back.
                </p>
              </div>
            </div>

            {/* Outdoor Patio, Bench, & Fence Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/238034766.png"
                  alt="Outdoor Patio, Bench, & Fence Painting"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Outdoor Patio, Bench, & Fence Painting</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Tackle tricky painting of exterior fixtures</p>
                <p className="text-gray-600 leading-relaxed">
                  There are two main challenges to painting exterior areas like patios, benches, and fences. The first is matching the paint, stain, and
                  tools you use to the materials each surface is made out of. The other is painting objects that are large, have many hard-to-reach nooks
                  and crannies, or both. Triumph Painters have the equipment and skills to handle these two challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Building Exterior Surface */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            COMMERCIAL BUILDING EXTERIOR SURFACE WE SPECIALIZE IN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brick Painting & Staining */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/1859394675.png"
                  alt="Brick Painting & Staining"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Brick Painting & Staining</h3>
                <p className="text-gray-600 leading-relaxed">
                  Brick is fairly simple to paint or stain, but can still be tough to work with if it's in places that are difficult to see or reach.
                  Then you might miss an area or not get an even finish, or potentially hurt yourself in a worst case scenario. Triumph Painters have
                  the equipment and experience for commercial painting in Miami to paint hard-to-reach patches of brick safely and thoroughly.
                </p>
              </CardContent>
            </Card>

            {/* Aluminium Siding Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/507780978.png"
                  alt="Aluminium Siding Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Aluminium Siding Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a metal that's non-porous and vulnerable to extreme temperature changes, aluminium siding can be tough to paint. Not all paints
                  stick to it effectively, and those that do can dry too fast in hot weather or too slow in cold weather. Let Triumph Painters pick
                  the right time and materials to paint your aluminium siding so you get a finish that resists flaking, cracking, and peeling.
                </p>
              </CardContent>
            </Card>

            {/* Vinyl Siding Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/1416161902.png"
                  alt="Vinyl Siding Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Vinyl Siding Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Like aluminium siding, vinyl siding can react strongly to extreme temperatures – especially if it's painted a dark colour that absorbs
                  heat from sunlight. This can warp the siding, which can cause the paint job to peel or crack. Luckily, Triumph Painters know what kinds
                  and colours of paints to use to keep this from happening.
                </p>
              </CardContent>
            </Card>

            {/* Vinyl Window Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/3068786101.png"
                  alt="Vinyl Window Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Vinyl Window Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vinyl windows need to be painted in a similar way to vinyl siding: with the right paints and lighter colours so they don't warp from
                  absorbing (or emitting) excess heat. Triumph Painters have the tools and skills to properly paint vinyl windows, avoiding paint jobs
                  that flake, peel, crack, or blister.
                </p>
              </CardContent>
            </Card>

            {/* Exterior Wood Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/1229130676.png"
                  alt="Exterior Wood Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Exterior Wood Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wooden objects and surfaces on the exterior of your building are exposed to harsher environmental conditions, and are sometimes made
                  of different kinds of wood, than those in the building's interior. Triumph Painters have the know-how to assess your structures and
                  what they have to stand up to, and then recommend a paint or stain job that will look good and last long.
                </p>
              </CardContent>
            </Card>

            {/* Exterior Stucco Painting */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/330995101/3700993548.png"
                  alt="Exterior Stucco Painting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Exterior Stucco Painting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stucco is becoming a popular exterior surface, particularly as new paints are developed that allow for additional design options.
                  Triumph Painters have extensive experience working with stucco – both interior and exterior – and can give you a radical new colour
                  scheme, a touch-up of what you already have, and anything in between.
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
            CONTACT US TODAY FOR A COMMERCIAL PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Choosing the Right Commercial Painting Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            CHOOSING THE RIGHT COMMERCIAL PAINTING COMPANY IN MIAMI
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Make Sure They Are Insured, Accredited, & Have Great Reviews
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Commercial is a broad category that includes both businesses and public institutions. So not all commercial paint jobs will be done the same way
                  or for the same purpose. Look around at different commercial paint contractors not only for reviews and testimonials on how professionally they work,
                  but also for photos and case studies on projects they've completed. See if you can find ones that are similar in scope to your space so you have a
                  more accurate idea of how well they will handle your project. Above all, ensure any contractors you're considering hiring have adequate insurance and
                  certifications to back up their work. Commercial painting tends to have a higher chance of things going wrong than residential painting, so you want
                  to be certain that you won't be held liable if an accident actually does happen.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Can Make Recommendations That Are Specifically Suited to Commercial Spaces
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  The best way to paint a commercial building depends heavily on what it's used for. For example, buildings with a lot of people coming and going may
                  want to focus more on pleasing aesthetics to get people to enter and stay in the space. Meanwhile, buildings that involve handling potentially hazardous
                  materials and machinery (such as kitchens and factories) will likely put more emphasis on safety features and markings to guard against accidents. Good
                  commercial painters should be able to assess a building's use cases and suggest relevant painting strategies.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Offer a Clear and Honest Pricing Model for Commercial Buildings & Areas
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Pricing commercial painting jobs can be difficult because there are many variables to them: how large the space is, what materials need to be worked with,
                  when work is scheduled, how many painters are working on the project, and so on. But any commercial painting companies in Miami should be able to work with
                  you to map out what your specific space will need, what it's going to cost, and why. There should be no surprises when you get your final bill.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                They Come Prepared With the Proper Tools For Commercial Jobs
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Painting commercial spaces can be very different from painting residential ones. Not only are they typically larger, but they also tend to contain more
                  unique surfaces, and have specific aesthetic and safety needs. That means painters need to come prepared with the equipment to work in high places, around
                  safety hazards, and with special materials.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Triumph Painters is Perfect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY TRIUMPH PAINTERS IS PERFECT FOR A COMMERCIAL PAINT JOB
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fully Insured & Certified</h3>
                <p className="text-gray-600 leading-relaxed">
                  Commercial painting tends to be higher-risk and higher-stakes than residential painting, so we know you want to protect your investment.
                  That's why every member of our commercial painting team is fully licensed and certified, and we back up all our work with comprehensive
                  liability insurance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Expert Commercial Building Painters</h3>
                <p className="text-gray-600 leading-relaxed">
                  We know commercial building painting in Miami isn't just about painting the interior or exterior of a business or institution. It's about
                  working around your particular area and schedule so your critical operations aren't disrupted. To that end, we can work on weekends or
                  outside business hours so you can keep running while we paint.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">$</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Custom Commercial Fair Pricing Model</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in transparency when it comes to how much a commercial paint job should cost. We'll ask the right questions about your space to
                  get the information we need to give you a thorough breakdown of what your project will cost. Paint, tools, labour, scheduling, team size –
                  we'll lay every cost out on the table for you.
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
                  Though we got our start in 2012 as residential painters, we grew over the years and began tackling office painting in Miami and all sorts
                  of commercial painting jobs. We even became trusted enough to be asked to do some of the renovations at major facilities like Florida
                  International University and Miami-Dade College!
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
            CONTACT US TODAY FOR A COMMERCIAL PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Commercial Painting Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHAT'S INVOLVED IN A COMMERCIAL PAINTING PROCESS?
          </h2>

          <p className="text-lg text-gray-600 mb-8">There are typically 7 stages to painting commercial areas:</p>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Plan With Your Painting Team",
                content: "Commercial painting jobs tend to be big projects that can take weeks or even months. So you need to plan ahead in terms of when you're going to paint each element that needs to be painted. For a building's interior, that means painting at times and in sequences that limit interference with normal business functions. For the exterior, it means painting at times when weather conditions aren't going to hamper painting work or threaten the paint job."
              },
              {
                number: "2",
                title: "Prepare Thoroughly",
                content: "Clear areas to be painted of obstacles, either by removing them entirely or isolating them in a place where they're out of the way. That includes taking anything off walls or ceilings that could block a painting surface or accidentally get paint on it. If using certain kinds of paints or working in enclosed spaces, you should also make sure the painting area is properly ventilated, and painters are equipped with proper protective equipment."
              },
              {
                number: "3",
                title: "Protect Non-Work Areas",
                content: "If there are surfaces and objects you don't want to get paint on, cover them with paper, plastic, towels, or sheets, and tape them down to secure them if need be. We recommend using quality cotton drop cloths on floors, as they absorb paint better and are safer to move around on. You should also put painter's tape or masking tape over parts of surfaces you don't want painted, especially if you're using an imprecise method like spray painting."
              },
              {
                number: "4",
                title: "Do Repairs and Cleaning",
                content: "Prep surfaces you're going to paint by patching cracks, holes, and dents in them and then sanding them down. Then clean those surfaces using whatever tools you need (pressure washers, scrapers, sponges, soap, cloths, etc.) to get rid of old paint, dirt, grease, mold, and so on. This helps the paint stick better for a more even finish, and also makes the space safer by getting rid of contaminants that could cause health problems."
              },
              {
                number: "5",
                title: "Prime the Painting Surfaces",
                content: "Get any protective gear and other safety equipment you need into the painting spaces, then coat the surfaces to be painted with primer. You may need to use different types and colours of primer, depending on what kinds of surfaces you're painting and what you want the finished designs to look like. Then let the primer dry."
              },
              {
                number: "6",
                title: "Do the Actual Painting",
                content: "Once the primer is applied, you can start applying the actual paint using the tools most appropriate for the job. For example, spray-painters work best on large surfaces where you want a flat finish and speed is more important than precision, especially if those surfaces are in hard-to-reach places. On the other hand, paintbrushes and rollers are better for tight spaces where sprayers may have missed spots or you want to be careful about where you get paint."
              },
              {
                number: "7",
                title: "Clean Up after Paint Dries",
                content: "Certain kinds of paint may take up to a couple of days to dry, especially if applied on large surfaces or in cooler environments. When the paint's done drying, remove any tape, protective coverings and other equipment brought into the area. Then move furniture and other objects removed or isolated from the painting area back where they were."
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
            MIAMI COMMERCIAL PAINTING FAQS
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What is the typical commercial painting cost per square foot in Miami?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for commercial painting jobs?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What does 'commercial painting' mean exactly, and what does it entail?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are there different approaches and commercial painting methods?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How long does commercial building painting take?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How do I prepare my commercial space for painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What types of tools are needed for commercial building painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Can't I just DIY my commercial painting job?
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
