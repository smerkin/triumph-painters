import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IndustrialPaintingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-600 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
              INDUSTRIAL PAINTING IN MIAMI & SOUTH FLORIDA
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/330995101/915659149.png"
            alt="Industrial painting project"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
            INDUSTRIAL PAINTERS IN MIAMI THAT SPECIALISE IN COMMERCIAL
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Painting an industrial building can be a huge challenge – it's a big investment that requires a lot of planning. As
                experts in industrial painting in Miami, Triumph Painters can help you work through the complexities to decide
                what's right for your space and make the process less intimidating. We can take care of things like:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Painting of commercial and industrial buildings</li>
                <li>Scheduled maintenance painting</li>
                <li>Drop-deck ceiling painting</li>
                <li>Specialty coating application</li>
                <li>Epoxy floor installation & repair</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                If you're a <Link href="/facility-painting" className="text-accent underline">facilities manager</Link> or are in charge of a{' '}
                <Link href="/commercial" className="text-accent underline">commercial painting project</Link>, talk to us about how we can
                upgrade your commercial space with a professional paint job while minimizing its downtime.
              </p>
            </div>

            <div className="relative">
              <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                Contact Us
              </div>
              <Image
                src="https://ext.same-assets.com/330995101/915659149.png"
                alt="Professional painter on a lift painting a warehouse exterior"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Industrial Buildings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            TYPES OF INDUSTRIAL BUILDINGS WE SPECIALIZE IN
          </h2>

          <div className="space-y-12">
            {/* Warehouses */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3160719899.png"
                  alt="Warehouse interior"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Warehouses</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Guard Against Inside Hazards and Outside Elements</p>
                <p className="text-gray-600 leading-relaxed">
                  Warehouses are large buildings where the interior walls, exterior walls, ceiling, and floor are often made of different materials, so you have to use
                  the right types and colours of paints to get long-lasting work that stands up to the elements, protecting the products and equipment inside the
                  warehouse. You also have to consider interior colour schemes that highlight safety hazards and improve visibility.
                </p>
              </div>
            </div>

            {/* Factories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/93374032.png"
                  alt="Factory interior"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Factories</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Keep Employees and Equipment Safe and Functional</p>
                <p className="text-gray-600 leading-relaxed">
                  Factories need to be painted with the right types of paint to resist mold, rust, corrosion, and other potential health hazards. Additionally, the right
                  colours of paint can improve visibility for safety, boost worker morale, and show off your factory's branding on public tours. Getting a professional,
                  long-lasting paint job helps keep your factory compliant with inspections, and can even limit the amount of maintenance your equipment needs.
                </p>
              </div>
            </div>

            {/* Production Plants */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/4292973616.png"
                  alt="Production plant"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Production Plants</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Protect Your Machines and Minimize Downtime</p>
                <p className="text-gray-600 leading-relaxed">
                  Like factories, manufacturing plants can reap several benefits if they're painted properly. These include resistance to fire, heat, corrosion, and
                  contaminants, greater energy efficiency by reducing the need for cooling systems, and a more attractive company image. Let professional industrial
                  painters do the job to minimize disruptions and downtime on the production line.
                </p>
              </div>
            </div>

            {/* Distribution Centres */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/343323413.png"
                  alt="Distribution centre"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Distribution Centres</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Help Maximize Order Fulfillment Efficiency</p>
                <p className="text-gray-600 leading-relaxed">
                  Distribution centres are hybrids of warehouses and factories: they're used for not only storing goods, but also processing them so they make it to the
                  right customers intact and on time. So getting a professional paint job in a distribution centre helps with many of the same things the other two types
                  of buildings need: keeping workers safe and productive, resisting weather and safety hazards, and keeping advanced machinery functioning longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR AN INDUSTRIAL PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Specialty Industrial Needs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WE CAN HELP WITH SPECIALTY INDUSTRIAL NEEDS
          </h2>

          <div className="space-y-12">
            {/* Epoxy Flooring */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/1194882526.png"
                  alt="Epoxy flooring installation"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Epoxy Flooring Installation & Repair</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Get More Value From Your Industrial Floor With Epoxy</p>
                <p className="text-gray-600 leading-relaxed">
                  Using epoxy coating for industrial building floors is often a long-term cost-effective choice, even if it requires a bit of upfront investment. This is
                  because when epoxy floors are installed by professionals – like us at Triumph Painters – they're naturally durable, simple to clean, and resist
                  contaminants and electricity. So they make it easy to protect your workers, equipment, and products without needing a lot of maintenance.
                </p>
              </div>
            </div>

            {/* Maintenance Schedules */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/3843501176.png"
                  alt="Maintenance painting schedule"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Maintenance Schedules</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">Use a Trustworthy Company for Repeat Work on a Schedule</p>
                <p className="text-gray-600 leading-relaxed">
                  Even the best industrial paint job has to be refreshed from time to time. If it isn't, it can't provide as much protection for your workers, equipment,
                  and other items inside the building. It also reflects badly on your brand and can drain your workers' motivation. A professional industrial painting
                  contractor can help you set up a schedule to do maintenance painting and keep your building in top shape.
                </p>
              </div>
            </div>

            {/* Drop-Deck Ceiling Painting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/1598436666.png"
                  alt="Drop-deck ceiling painting"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Drop-Deck Ceiling Painting</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">For Large Commercial Spaces</p>
                <p className="text-gray-600 leading-relaxed">
                  Large industrial and commercial buildings can have metal deck ceilings that leave exposed the underlying supports, light fixtures, HVAC ductwork,
                  and so on. Not only is it difficult to reach these high ceilings without a lift, but it can also be challenging to maneuver around all the exposed parts
                  to paint all the nooks and crannies. Let the professionals at Triumph Painters paint these roofs safely and thoroughly for you.
                </p>
              </div>
            </div>

            {/* Specialty Coatings */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image
                  src="https://ext.same-assets.com/330995101/1550067956.png"
                  alt="Specialty coatings application"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Speciality Coatings</h3>
                <p className="text-lg font-semibold text-gray-600 mb-4 italic">When You Need Something Custom for your Space</p>
                <p className="text-gray-600 leading-relaxed">
                  Industrial companies work with various equipment, materials, and substances that can present unique safety hazards. Knowing this, Triumph Painters can
                  paint your building and equipment with specialty coatings to meet your needs. If you need insulant coatings to protect against fire and heat, membranes
                  or elastomeric paint for waterproofing, or surfaces like epoxy to prevent corrosion and the buildup of other contaminants, we have you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            CONTACT US TODAY FOR AN INDUSTRIAL PAINTING QUOTE
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            HOW TO CHOOSE THE RIGHT INDUSTRIAL PAINTERS IN MIAMI
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Insured, Well-Reviewed, & Accredited in the Industry
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Industrial painting (and commercial painting in general) is often a large investment, so you want to make sure it's done properly. When shopping around for
                  painting contractors, look or ask for photos of completed industrial projects so you can see the quality of their work. You should also look or ask for reviews
                  and testimonials to see what customers thought of their professionalism. Most importantly though, you want to make sure any painting contractors you hire are
                  insured in case something goes wrong. This is especially important in industrial settings, where there tend to be more hazards that can end up hurting someone.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Recommendations Specifically Suited to Industrial Spaces
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Industrial buildings can serve many different functions, and can contain or be made up of several different materials. So what you paint and how you paint it can
                  depend on your objectives: are you looking to protect products, keep workers safe, or reduce the amount of maintenance your machines need? Good industrial painters
                  should be able to match paints and colours to the goals you have in mind for a space.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Clear & Honest Pricing Customized for Industrial Work
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  There are many variables that affect how much an industrial paint job will cost. A good painting contractor team should get the relevant information about your
                  particular project: how big your building is, what it's used for, what's inside it, what kinds of materials it's made out of, and what the overall layout is like.
                  They should then be able to walk you through what's needed for your project, how much it costs, and why.
                </p>
              </div>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Have the Proper Tools For Industrial Work Areas
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="p-6 bg-white">
                <p className="text-gray-600 leading-relaxed">
                  Industrial buildings can have many nooks, crannies, and high places that are difficult – if not outright dangerous – to paint. You don't want a job to be done
                  half-heartedly, and you definitely don't want to risk someone getting injured, because the painters you hired didn't have the right tools to reach those areas.
                  Make sure to give any contractor you approach as many details about the space you want painted as possible, and confirm they have the equipment to paint it safely
                  and thoroughly.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Why Choose Triumph Painters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHY CHOOSE TRIUMPH PAINTERS FOR INDUSTRIAL PAINTING?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Insured & Fully Licensed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Above all, painting should be done safely – industrial painting most of all. That's why our industrial painting team at Triumph Painters is entirely
                  licensed and backed up by comprehensive liability insurance on each project: to give you peace of mind when you're making a big investment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Expert Industrial Painting Contractors</h3>
                <p className="text-gray-600 leading-relaxed">
                  As industrial painters in Miami, we know the last thing you want is for a painting project to grind your operations to a halt. That's why our professional
                  team can work on interiors or exteriors as needed, and can come in on weekends or outside business hours – whatever will keep your business running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">$</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fair Painting Prices Specifically for Industrial</h3>
                <p className="text-gray-600 leading-relaxed">
                  Industrial painting is unique in that many things can affect how long a painting job takes, what materials need to be used for it, and ultimately how much it costs.
                  Our team of experts will take the time to explain the price of the paint job you want, what affects that cost, and how prices compare to competitors or doing the job yourself.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Stellar Industrial & Commercial Resume</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've spent over 12 years doing all sorts of painting jobs throughout the greater Miami area, building up both our skills and our reputation for quality commercial work.
                  That's why when major facilities like Florida International University and Miami-Dade College needed renovations, we were trusted enough to get the call!
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
            CONTACT US TODAY FOR AN INDUSTRIAL PAINTING QUOTE
          </h2>
          <p className="text-xl mb-6">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Industrial Painting Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b-2 border-accent pb-2">
            WHAT'S INVOLVED IN THE INDUSTRIAL PAINTING PROCESS?
          </h2>

          <p className="text-lg text-gray-600 mb-8">There are typically 7 stages to painting industrial spaces:</p>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Consult with Your Painters",
                content: "The industrial painting process is typically more complex than residential or other commercial painting. You have to think ahead regarding how to paint the building's exterior, as well as what you'll paint on the building's interior and how you'll do that. For example, if the building has machinery in it, will you be painting it directly or just painting around it? Discuss with the painting contractors you hire how to paint efficiently while minimizing disruptions to your work."
              },
              {
                number: "2",
                title: "Do Thorough Prep Work",
                content: "Industrial painting can be risky because of the heights, hazardous substances, and dangerous machinery that can be involved. So making sure the work area is safe first is paramount. That includes ensuring painters have proper ventilation and protective equipment while they're working. It also includes (if possible) moving things to be painted away from areas where they're difficult to work on, or from objects that could hamper paint drying or cause other dangers."
              },
              {
                number: "3",
                title: "Clean and Repair Surfaces",
                content: "You should always clean and prep surfaces you plan on painting, and that's especially important when painting in industrial settings. Use pressure-washers, sanders, scrapers, sponges, detergent, cloths, and anything else you need to clear away grease, dirt, mold, old paint, and other debris. This gets rid of the contaminants you're trying to protect against in the first place, and it also makes paint stick better (and machines run smoother)."
              },
              {
                number: "4",
                title: "Cover Areas You Won't Paint",
                content: "Use painter's tape or masking tape to cover surfaces and objects where you don't want paint to splatter. You can also use paper, plastic coverings, towels, and bedsheets to cover larger areas. If you'll be spray painting, remember to cover the surrounding area completely, as you won't have as much control over where the paint ends up."
              },
              {
                number: "5",
                title: "Prime Where You'll Paint",
                content: "After readying any necessary safety equipment, apply a coat of primer to the surfaces you'll be painting. This will help the paint stick better, which results in a paint job that lasts longer and better protects the surfaces it's coating. Remember that you may have to match types of primer to the materials your surfaces are made out of for best results. Also remember to give the primer enough time to dry."
              },
              {
                number: "6",
                title: "Apply the Actual Paint Coats",
                content: "Now you have to actually paint the surfaces you've primed. You can spray-paint larger surfaces where you want a more even finish, or where you can't otherwise reach safely. Meanwhile, you can use paintbrushes and rollers for small spaces with intricate surfaces, or to touch up areas a sprayer missed. Your painters may also suggest variations on and alternatives to these techniques."
              },
              {
                number: "7",
                title: "Let Paint Dry and Clean Up",
                content: "You'll need to let the surfaces you painted – especially any machinery – dry. Depending on the size of the surfaces and the kind of paint you used, this may take several days. You may not be able to use painted machinery or equipment during this time, which is why you should plan ahead and paint when you're not going to need it that often. Once an area is dry, remove the tape and other protective coverings from around the area."
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
            INDUSTRIAL SPACE PAINTING FAQS
          </h2>

          <div className="space-y-4">
            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What is the typical cost to paint industrial spaces in Miami?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are Triumph Painters insured for industrial painting jobs?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What is industrial painting exactly and what does it entail?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Are there different approaches or industrial painting methods?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How long does industrial building painting typically take?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                How do I prepare my industrial space for painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                What tools are needed for industrial painting?
                <ChevronDown className="w-5 h-5" />
              </summary>
            </details>

            <details className="border-2 border-accent rounded-lg">
              <summary className="p-4 bg-accent text-white font-semibold cursor-pointer flex items-center justify-between">
                Can't I just DIY my industrial painting job?
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
