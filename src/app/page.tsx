"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/19130050/pexels-photo-19130050.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Tantalizing selection of gourmet pizzas with fresh toppings in Mexico City's vibrant dining scene." },
  { "id": "product-1", "url": "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { "id": "product-2", "url": "https://images.pexels.com/photos/7315010/pexels-photo-7315010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of friends sharing a large pizza at home, capturing a casual dining moment." },
  { "id": "product-3", "url": "https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of friends sharing pizza and beer at a table indoors in a casual setting." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Pizzeria"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-red-100 text-red-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Pizzeria"
            description="Discover our wide selection of delicious pizzas made with fresh ingredients."
            imageSrc="https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Order Now", href: "product" }] }
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 bg-red-100 text-red-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="Our Story"
            description={[
              "At Pizzeria, we prioritize authentic flavors and quality ingredients.",
              "Join us for a slice of tradition."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
            imageSrc="https://images.pexels.com/photos/19130050/pexels-photo-19130050.png?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24 bg-red-100 text-red-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "Pizzeria", name: "Pepperoni Pizza", price: "$12.99", rating: 5, reviewCount: "100", imageSrc: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", brand: "Pizzeria", name: "Veggie Pizza", price: "$11.99", rating: 4.5, reviewCount: "80", imageSrc: "https://images.pexels.com/photos/7315010/pexels-photo-7315010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", brand: "Pizzeria", name: "Margherita Pizza", price: "$10.99", rating: 4.8, reviewCount: "60", imageSrc: "https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-red-100 text-red-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Visit Our Pizzeria"
            description="Find out how to visit us or get in touch for your pizza cravings."
            imageSrc="https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            mediaPosition="right"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-red-100 text-red-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [ { label: "Home", href: "hero" }, { label: "About Us", href: "about" } ] },
              { title: "Menu", items: [ { label: "Pizza Selection", href: "product" }, { label: "Specials", href: "product" } ] }
            ]}
            logoSrc="/brand/logowhite.svg"
            logoWidth={120}
            logoHeight={40}
            copyrightText="© 2025 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
