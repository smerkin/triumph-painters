# How to Create a New Page in Triumph Painters

This guide will help you create a new page/section for the Triumph Painters website.

## Quick Steps

1. **Create the directory structure**
   ```bash
   mkdir -p src/app/your-page-name
   ```

2. **Create the page file**
   Create `src/app/your-page-name/page.tsx` with the following template:

   ```tsx
   import { Button } from "@/components/ui/button"
   import { Card, CardContent } from "@/components/ui/card"
   import Header from "@/components/Header"
   import Image from "next/image"
   import Link from "next/link"

   export default function YourPageName() {
     return (
       <div className="min-h-screen">
         <Header />

         {/* Hero Section */}
         <section className="relative bg-gray-600 text-white py-16 lg:py-20">
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-4xl">
               <div className="bg-accent px-6 py-3 inline-block rounded text-white font-semibold mb-6">
                 YOUR PAGE TITLE IN UPPERCASE
               </div>
             </div>
           </div>
           <div className="absolute inset-0">
             <Image
               src="/images/your-hero-image.webp"
               alt="Your page description"
               fill
               className="object-cover"
             />
           </div>
         </section>

         {/* Main Description Section */}
         <section className="py-16 bg-white">
           <div className="container mx-auto px-4">
             <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-accent pb-2">
               YOUR MAIN HEADING
             </h1>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               <div>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   Your main description text goes here...
                 </p>

                 <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                   <li>Service item 1</li>
                   <li>Service item 2</li>
                   <li>Service item 3</li>
                 </ul>
               </div>

               <div className="relative">
                 <div className="bg-accent text-white p-4 text-center font-semibold absolute top-4 left-4 z-10 rounded">
                   Contact Us
                 </div>
                 <Image
                   src="/images/your-side-image.webp"
                   alt="Your image description"
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
               CONTACT US TODAY FOR A QUOTE
             </h2>
             <p className="text-xl mb-6">Call us at 305-555-0123</p>
             <Link href="/contact">
               <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
                 Request a quote
               </Button>
             </Link>
           </div>
         </section>
       </div>
     )
   }
   ```

3. **Add to navigation (optional)**
   If you want the page to appear in the header navigation, edit `src/components/Header.tsx` and add a link:
   ```tsx
   <Link href="/your-page-name" className="text-gray-700 hover:text-primary font-medium">
     Your Page Name
   </Link>
   ```

4. **Add images**
   Place your hero image in `public/images/` directory (e.g., `your-hero-image.webp`)

## Example: Creating a "Service Areas" Page

```bash
# 1. Create directory
mkdir -p src/app/service-areas

# 2. Create page.tsx (use the template above)

# 3. Add to Header.tsx navigation links
```

## Page Structure Pattern

All pages follow this structure:
- **Header** - Navigation component (always included)
- **Hero Section** - Full-width image with title overlay
- **Main Description Section** - Two-column layout with content and image
- **Content Sections** - Additional sections with cards, lists, etc.
- **CTA Section** - Call-to-action with contact form button

## Key Components

- `Header` - Navigation component (import from `@/components/Header`)
- `Button` - UI button component (import from `@/components/ui/button`)
- `Card`, `CardContent` - UI card components (import from `@/components/ui/card`)
- `Image` - Next.js Image component for optimized images
- `Link` - Next.js Link component for internal navigation

## Styling

The project uses Tailwind CSS with these key colors:
- Primary: `text-primary` (deep blue #1e3a8a)
- Accent: `bg-accent` (orange #ea580c)
- Container: `container mx-auto px-4`

## Testing

After creating your page:
1. Run `bun run dev` to start the development server
2. Navigate to `http://localhost:3000/your-page-name`
3. Check responsive design on mobile/tablet/desktop



