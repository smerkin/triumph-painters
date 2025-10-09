import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InteriorPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              INTERIOR HOUSE PAINTING SERVICES IN MIAMI
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/1630270605.webp"
            alt="Interior painting project"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            INTERIOR PAINTERS IN MIAMI YOU CAN TRUST IN YOUR HOME
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Triumph Painters are your experts for interior house painting services in Miami and the surrounding area. We
                offer fast, friendly, and professional service at competitive prices for all sorts of interior painting tasks. These include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Wall painting</li>
                <li>Trim and door painting</li>
                <li>Staircase staining and varnishing</li>
                <li>Staircase stringer and riser painting</li>
                <li>Ceiling painting</li>
                <li>Wallpaper removal</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                We're also fully licensed and have liability insurance for each project, so you can stop stressing about your renovation project and trust that we'll take care of everything smoothly.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/2336757005.png"
                alt="Paint roller and bucket in home interior"
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

      {/* House Interior Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOUSE INTERIOR AREAS WE SPECIALIZE IN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1169308186.webp"
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
                src="https://ext.same-assets.com/330995101/3320098255.png"
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
                src="https://ext.same-assets.com/330995101/3526059868.webp"
                alt="Bathrooms"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Bathrooms</h3>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3656355598.webp"
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
                src="https://ext.same-assets.com/330995101/2109132653.webp"
                alt="Basements"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Basements</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/4078096962.webp"
                alt="Ceilings"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Ceilings</h3>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3070396540.webp"
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
                src="https://ext.same-assets.com/330995101/1248905644.webp"
                alt="Doors"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Doors</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3308892056.webp"
                alt="Dining Rooms"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Dining Rooms</h3>
              </div>
            </div>

            {/* Row 4 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1901350660.webp"
                alt="Home Office"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Home Office</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/1222315249.webp"
                alt="Nurseries"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Nurseries</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/2179151433.webp"
                alt="Hallways"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Hallways</h3>
              </div>
            </div>

            {/* Row 5 */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/2735585729.webp"
                alt="Staircases"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Staircases</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3428084373.webp"
                alt="Foyers & Entrances"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Foyers & Entrances</h3>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/330995101/3189003317.webp"
                alt="Garages"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                <h3 className="font-semibold text-gray-800">Garages</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior House Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            INTERIOR HOUSE SERVICES BEYOND PAINTING
          </h2>

          <div className="space-y-12">
            {/* Drywall Patching */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3058639561.png"
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
                  src="https://ext.same-assets.com/330995101/3883700395.png"
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
                  src="https://ext.same-assets.com/330995101/537849833.png"
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
                  src="https://ext.same-assets.com/330995101/1385806977.png"
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
                  src="https://ext.same-assets.com/330995101/2380044725.png"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO CHOOSE AN INTERIOR PAINTER
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Insured, Accredited, & Well-Reviewed
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  You want painters to be insured and safety-accredited so that if something goes wrong during a project – like someone gets hurt or your property gets damaged – you're not responsible for cleaning up the mess. However, you should also seek to lower the chances of something going wrong in the first place by picking painters who can prove they know what they're doing. That means they provide photos of finished interior paint jobs, as well as testimonials from clients on how professionally they completed projects.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Expert Interior Painting Recommendations
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  The painters you hire shouldn't just paint the interior of your home – especially if you don't know exactly what you're looking for to begin with. Instead, they should work with you to understand the spaces you want painted and what kind of look or results you're trying to achieve. From there, they can make suggestions on how best to get a finished product that's done quickly and efficiently, looks great, and doesn't break the bank.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Clear & Honest Home Painting Pricing
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  No homeowner looking to hire painting contractors wants to be lured in by seemingly competitive rates, only to find out that hidden costs – such as for prep work, materials, and travel – end up comprising the bulk of the bill! Professional painters should be upfront in telling you exactly what you're paying for, including providing an itemized breakdown of costs based on the information you give them about your project's particular circumstances.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Using the Right Tools for Interior Painting
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  When painting, both the look and quality of the work you end up with depends on what tools are used. Do a little research beforehand and ask any painting contractors you approach whether they have the necessary tools to do the job the way you want it done. Not only will this give you a finished product that's closer to what you envisioned, but it will also help the work last longer and require less maintenance over time.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY CHOOSE TRIUMPH PAINTERS FOR YOUR INTERIOR HOUSE PAINTING?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">We're Fully Licensed & Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our professional interior painting team at Triumph Painters is fully licensed and certified, so we're committed to carry out all our painting jobs as safely as possible. We also back up all of our projects with comprehensive liability insurance, so you're covered if a problem does happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Interior House Painting Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  We got our start in 2012 as residential painting specialists, so believe us when we say that we know our stuff when it comes to painting home interiors. We have the advice and know-how to get you a home interior paint job that meets your aesthetics, schedule, and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">$</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fair & Honest Home Painting Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  We know painting your home is an investment, both aesthetically and economically. That's why our knowledgeable painting team will assess your interior painting project's specifics, and provide an estimate based on them for an efficient job that gives you the best value for your money.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Stellar Painting Resume in South Florida</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've been doing interior painting in Miami and the surrounding area since 2012. Since then, we've expanded our painting services and built up a stellar portfolio of high-profile jobs. One such job was part of renovations for major facilities like Florida International University and Miami-Dade College!
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

      {/* Interior Painting Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            INTERIOR HOUSE PAINTING PROCESS
          </h2>

          <p className="text-lg text-gray-600 mb-8">There are 6 stages to painting interior areas:</p>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Prepare the work areas",
                content: "The first step is to get the areas you want to paint ready to start working in. This means moving or removing furniture and fixtures that could get in your way. It also means applying painter's tape and laying down drop cloths to protect the areas you don't want to get paint on."
              },
              {
                number: "2",
                title: "Remove wallpaper if necessary",
                content: "If a wall you want to paint has wallpaper on it, you need to remove that first. You should do this carefully – perhaps hiring a professional painting team (like us!) to do it for you – as a botched job can result in pieces of paper or adhesive stuck to the underlying wall surface. This extends your prep time, as you have to remove these as well."
              },
              {
                number: "3",
                title: "Repair and clean surfaces",
                content: "You should also patch and sand any cracks, holes, or dents in any of the surfaces you're painting so that the paint will adhere properly for a smooth finish. Similarly, you should clean the surfaces you plan to paint so that dirt, dust, mold, and other contaminants don't get stuck in the paint."
              },
              {
                number: "4",
                title: "Caulk trim and baseboards",
                content: "If you have trim or baseboards around the walls you want to paint, you should caulk them to seal them to the walls (unless you plan on removing them before you paint and then re-attaching them afterward). This helps prevent them from becoming unstuck from the walls, which exposes gaps between the old wall color and the new one."
              },
              {
                number: "5",
                title: "Prime surfaces to be painted",
                content: "Apply primer to the surfaces you want to paint. If you want to dramatically change the color of a particular surface, or are aiming to paint it a particularly deep color, try using a primer that's pre-tinted to a similar color (a paint store can do this for you). This can make it easier to get the color you want without applying as many coats of paint."
              },
              {
                number: "6",
                title: "Paint in the right order",
                content: "If you're painting all of the components of a room, it's best to paint them in a specific order to minimize the chance of making mistakes that are difficult to fix. Generally, you should paint the trim first, then paint the ceiling. Paint the walls next, and save the baseboards for last."
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            INTERIOR HOME PAINTING FAQS
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What are the rates for painting the interior of a house?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for interior house painting jobs?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How long does interior home painting take?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What are the right tools needed for interior home painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Can't I just DIY my interior house paint job?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What do I have to do to prepare my home for painting?
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
