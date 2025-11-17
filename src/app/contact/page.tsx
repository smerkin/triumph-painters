"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import { Phone, Mail, MapPin, Clock, Send, Home, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      projectType: '',
      address: '',
      message: ''
    })
    alert('Thank you for your quote request! We will contact you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              GET YOUR FREE PAINTING QUOTE TODAY
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Contact Triumph Painters for professional painting services in Miami and South Florida
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            CONTACT INFORMATION
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Phone</h3>
              <p className="text-gray-600 mb-2">Call for immediate assistance</p>
              <a href="tel:305-555-0123" className="text-accent font-semibold text-lg hover:underline">
                305-555-0123
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:info@triumphpainters.com" className="text-accent font-semibold hover:underline">
                info@triumphpainters.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Address</h3>
              <p className="text-gray-600 mb-2">Our Miami location</p>
              <p className="text-gray-700">1450 Brickell Bay Dr<br />Miami, FL 33131</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Emergency only</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              REQUEST A FREE QUOTE
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(305) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Painting</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="industrial">Industrial Painting</option>
                      <option value="epoxy">Epoxy Flooring</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select project type</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="both">Both Interior & Exterior</option>
                      <option value="cabinet">Cabinet Refinishing</option>
                      <option value="commercial-space">Commercial Space</option>
                      <option value="warehouse">Warehouse/Industrial</option>
                      <option value="epoxy-garage">Garage Epoxy</option>
                      <option value="epoxy-commercial">Commercial Epoxy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project location (city, state)"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Please describe your project, including square footage, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  REQUEST FREE QUOTE
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            AREAS WE SERVE
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center text-gray-600 mb-8">
              Triumph Painters proudly serves Miami-Dade, Broward, and surrounding areas within a 100-mile radius of Miami.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Miami-Dade County</h4>
                <p className="text-gray-600 text-sm">Miami, Coral Gables, Pinecrest, Homestead, Kendall</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Broward County</h4>
                <p className="text-gray-600 text-sm">Fort Lauderdale, Hollywood, Plantation, Davie</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Palm Beach County</h4>
                <p className="text-gray-600 text-sm">Boca Raton, Delray Beach, Wellington, Jupiter</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Monroe County</h4>
                <p className="text-gray-600 text-sm">Key Largo, Islamorada, Marathon, Key West</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            WHY CHOOSE TRIUMPH PAINTERS?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">24-Hour Response</h3>
              <p className="text-gray-600">We respond to all quote requests within 24 hours, often much sooner.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Free Estimates</h3>
              <p className="text-gray-600">All estimates are completely free with no obligation or hidden fees.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your complete protection.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            NEED IMMEDIATE ASSISTANCE?
          </h2>
          <p className="text-xl mb-8">Call us now for urgent painting needs or emergency repairs</p>
          <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            CALL 305-555-0123 NOW
          </Button>
        </div>
      </section>
    </div>
  )
}
