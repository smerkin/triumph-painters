import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { CheckCircle, Users, DollarSign, Award, MessageSquare, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-28 min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              MIAMI COMMERCIAL & RESIDENTIAL PAINTING EXPERTS
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Professional painting services throughout Miami-Dade, Broward, and surrounding areas
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/miami-painting-services-hero-background.png"
            alt="Professional painter in Miami"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            OUR COMMERCIAL & RESIDENTIAL PAINTING SERVICES
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-commercial-painting-contractors.png"
                  alt="Professional commercial painting contractors working on office building exterior in Miami"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: '40% 20%' }}
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">Commercial</h3>
                </div>
              </div>
            </Card>

            {/* Industrial */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-industrial-painting-services.png"
                  alt="Industrial painting in Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">Industrial</h3>
                </div>
              </div>
            </Card>

            {/* House Interior */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-interior-house-painting.jpg"
                  alt="Interior house painting in Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">House Interior</h3>
                </div>
              </div>
            </Card>

            {/* House Exterior */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-exterior-house-painting.webp"
                  alt="Exterior house painting in Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">House Exterior</h3>
                </div>
              </div>
            </Card>

            {/* Condo & Apartment */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-condos-painting.png"
                  alt="Condo painting in Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">Condo & Apartment</h3>
                </div>
              </div>
            </Card>

            {/* Epoxy Installation */}
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/miami-epoxy-floor-coating.jpg"
                  alt="Epoxy flooring installation in Miami"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-800">Epoxy Installation & Repair</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Triumph Painters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            WHY WORK WITH TRIUMPH PAINTERS?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Licensed & Insured */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  We're Licensed & Fully Insured
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protecting your Florida property shouldn't create additional stress about "what if" scenarios.
                  That's why our entire painting crew is licensed and bonded, and we maintain comprehensive
                  liability insurance coverage to provide you complete peace of mind during your project.
                </p>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  We Have 12+ Years of Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We established Triumph Painters in Miami in 2012 as residential painting specialists.
                  Since then, our exceptional craftsmanship has earned the confidence of homeowners and
                  businesses across South Florida. We've continuously enhanced our expertise and expanded
                  our capabilities to handle all types of commercial painting projects.
                </p>
              </div>
            </Card>

            {/* Fair Pricing */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  We Have Transparent & Fair Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nobody appreciates surprise "additional charges" on invoices, especially for significant
                  investments like painting projects. Our team collaborates with you to outline the exact
                  specifications of your project including materials, labor, equipment, and timeline.
                  We provide detailed, transparent cost breakdowns with clear explanations.
                </p>
              </div>
            </Card>

            {/* Outstanding Resume */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Exceptional Track Record in South Florida
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We've had the privilege of serving prestigious clients who trust us with painting and
                  maintaining their properties. Facilities including Florida International University,
                  Miami-Dade College, Jackson Health System, PortMiami, and the Adrienne Arsht Center
                  have relied on our services to keep their spaces looking professional and welcoming.
                </p>
              </div>
            </Card>

            {/* Expert Recommendations */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Knowledgeable & Professional Recommendations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every painting project has unique requirements, so the guidance you receive for yours
                  shouldn't be generic. Our experienced team understands the complexities of both
                  residential and commercial painting in Florida's climate, and can recommend the optimal
                  approach to achieve and maintain the results you want for your specific situation.
                </p>
              </div>
            </Card>

            {/* Quick & Efficient */}
            <Card className="p-8 border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Painting Completed Efficiently & Professionally
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that having painters in your home or business can feel disruptive.
                  That's why we coordinate with your schedule to work when it's most convenient for you.
                  We also complete all necessary preparation work efficiently to minimize our time in
                  your space while ensuring superior results.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            CONTACT US TODAY FOR A FREE PAINTING QUOTE
          </h2>
          <p className="text-xl mb-8">Call us at 305-555-0123</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            A MESSAGE FROM THE TRIUMPH PAINTERS FOUNDERS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
              <div className="lg:col-span-2">
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    When we founded Triumph Painters, we recognized a gap in the Miami market for a painting company that
                    prioritized not only exceptional workmanship but also delivering an outstanding customer experience.
                    Our commitment is to ensure that every project is executed with professionalism, courtesy, and efficiency.
                    We exclusively employ skilled Miami painters, and our clients can trust that they will be respectful,
                    reliable, and that all work will be completed to the highest standards.
                  </p>
                  <p>
                    At Triumph Painters, we strive to deliver superior painting services and experiences to all our
                    clients throughout Miami, Fort Lauderdale, and the greater South Florida region. We provide comprehensive
                    residential and commercial painting services, as well as specialized trades-related services tailored
                    to your specific needs. Every team member is committed to providing the exceptional service our customers
                    have come to expect, and we go above and beyond to ensure your complete satisfaction with your painting project.
                  </p>
                  <p>
                    We approach every residential and commercial painting project with the utmost seriousness and dedication,
                    and we guarantee you won't be disappointed with our results.
                  </p>
                  <p>
                    We take immense pride in the painting company that Triumph Painters has become, and we're excited about
                    what the future holds for us.
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold text-gray-800">Ara Kazarian and Simon Merkin</p>
                    <p className="text-gray-600">Founders, Triumph Painters</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/triumph-painters-miami-founder-carlos-rodriguez.jpg"
                    alt="Triumph Painters Founders"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
