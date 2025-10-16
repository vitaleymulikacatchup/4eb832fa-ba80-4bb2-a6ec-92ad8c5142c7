"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "heroImage", url: "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." },
  { id: "featureImage1", url: "https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a homemade pizza topped with arugula, mozzarella, and tomatoes." },
  { id: "featureImage2", url: "https://images.pexels.com/photos/276147/pexels-photo-276147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A brightly illuminated menu board showcasing various food and drink options with prices in a lively indoor setting." },
  { id: "featureImage3", url: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A heartwarming moment between grandfather and grandson laughing and playing on a cozy sofa indoors." },
  { id: "contactImage", url: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About Us", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Experience the Best Pizza in Town"
            description="Join us for a slice of heaven with the freshest ingredients and authentic flavors."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[
              { text: "Explore Menu", href: "product" },
              { text: "Contact Us", href: "contact" },
            ]}
            className="bg-yellow-100"
            titleClassName="text-yellow-900"
            descriptionClassName="text-yellow-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Traditional Recipes", description: "Passed down through generations.", icon: CheckCircle },
              { title: "Cozy Atmosphere", description: "Feel at home in our warm setting.", icon: CheckCircle },
            ]}
            imageSrc={assetMap.find(a => a.id === "aboutImage")?.url}
            className="bg-yellow-100"
            bulletTitleClassName="text-yellow-900"
            bulletDescriptionClassName="text-yellow-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Margherita", price: "$12.99", imageSrc: assetMap.find(a => a.id === "featureImage1")?.url },
              { id: "2", name: "Pepperoni", price: "$14.99", imageSrc: assetMap.find(a => a.id === "featureImage2")?.url },
              { id: "3", name: "Vegetarian", price: "$11.99", imageSrc: assetMap.find(a => a.id === "featureImage3")?.url },
            ]}
            title="Our Menu"
            className="bg-yellow-100"
            cardNameClassName="text-yellow-900"
            cardPriceClassName="text-yellow-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="Reserve a table or order your favorite pizza for delivery."
            imageSrc={assetMap.find(a => a.id === "contactImage")?.url}
            className="bg-yellow-100"
            tagClassName="text-yellow-900"
            titleClassName="text-yellow-900"
            descriptionClassName="text-yellow-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                  { label: "Home", href: "hero" },
                  { label: "About Us", href: "about" },
                  { label: "Menu", href: "product" },
                  { label: "Contact Us", href: "contact" }
                ]}
            ]}
            logoText="Pizzeria"
            className="bg-yellow-100"
            logoClassName="text-yellow-900"
            itemClassName="text-yellow-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
