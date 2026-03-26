"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Feather, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Oppia"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Oppia"
      description="Artistry in every petal. Oppia brings seasonal beauty to your doorstep with bespoke floral arrangements for life's most precious moments."
      buttons={[
        {
          text: "View Collection",
          href: "#products",
        },
      ]}
      slides={[
        {
          imageSrc: "https://pixabay.com/get/gcd567ecc866b57bbb1a7a3d1974d7e104bd0efeb91da34728e6ca4677cf6aaeb95b201ff7cbd408af867ec5ce6c3cfc0e8fb8eb804284d54e27dbc60876bd1f8_1280.jpg",
          imageAlt: "Floral arrangement display",
        },
        {
          imageSrc: "https://pixabay.com/get/gf0e97b7821597f1a0ea3236e06b3c1d3d2be3e0f558a8dd29b868111b13ccfc4cd4d515c5a3fd4e04ed6cabd5ff9d13cd2c28bb62fb035423fcc3087b05d8aa2_1280.jpg",
          imageAlt: "Seasonal bouquet",
        },
        {
          imageSrc: "https://pixabay.com/get/g3bfe21d2389a460d7e491acca3214ec05661fc4d9faa3491795d3af352807805da3546bbd65352eb8a79f2588ff14e5ce3f303d8476dc87661410cedf800fd33_1280.jpg",
          imageAlt: "Rose arrangement",
        },
      ]}
      autoplayDelay={4000}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Rooted in Passion"
      description="At Oppia, we believe flowers are nature's most expressive language. Every arrangement we create is hand-selected and carefully composed to convey emotions and celebrate connections."
      subdescription="We specialize in sustainable floral design, working closely with local growers to ensure every bloom is as fresh as it is beautiful."
      icon={Feather}
      imageSrc="https://pixabay.com/get/ga4e1a94f808d3507e24e760103e55579908a77dc02a69b6b7aaa826be953ccb2ef42c3e831f1f3fc4c76c75e15676e6182d683c4fe3f646f5c2d5533322851a7_1280.jpg"
      imageAlt="Studio atmosphere"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Elegance",
          price: "$85",
          imageSrc: "https://pixabay.com/get/gf0e97b7821597f1a0ea3236e06b3c1d3d2be3e0f558a8dd29b868111b13ccfc4cd4d515c5a3fd4e04ed6cabd5ff9d13cd2c28bb62fb035423fcc3087b05d8aa2_1280.jpg",
        },
        {
          id: "2",
          name: "Wild Garden",
          price: "$120",
          imageSrc: "https://pixabay.com/get/g3bfe21d2389a460d7e491acca3214ec05661fc4d9faa3491795d3af352807805da3546bbd65352eb8a79f2588ff14e5ce3f303d8476dc87661410cedf800fd33_1280.jpg",
        },
        {
          id: "3",
          name: "Pastel Dreams",
          price: "$95",
          imageSrc: "https://pixabay.com/get/g34161833ceb82d40b43e1382524f65a1c9436e8f22da4a99839e1e635fd2980739c34640b8e509eb42b66875f87488f49cbab48ed687ef44ff00d8f9bce091b8_1280.jpg",
        },
      ]}
      title="Seasonal Collections"
      description="Discover our hand-crafted arrangements, designed to capture the essence of the season."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          role: "Wedding Client",
          testimonial: "Oppia created the most breathtaking arrangements for our big day. Truly magical.",
          imageSrc: "https://pixabay.com/get/g5e1a55d2098997a0d8a9daaedf798ef75c440983eef9c26c26a14d837ce9f78ac2456a25e1894f8807fed12404aca644b0dc8639feeb68b9d3683fcb32e940c6_1280.jpg",
        },
        {
          id: "2",
          name: "James L.",
          role: "Repeat Customer",
          testimonial: "The freshness and longevity of their flowers are unmatched. My go-to studio.",
          imageSrc: "https://pixabay.com/get/gf5fa5dd7067e364d59bfbcd6c0a197a0bf7c7d8f682c2e27c67cc66c2e10312a403875e37615a09a9008ea91b67eb0b767c6b1faae6a8a37cc114a155b2fca87_1280.jpg",
        },
        {
          id: "3",
          name: "Sarah P.",
          role: "Event Planner",
          testimonial: "Professional, creative, and always reliable. Highly recommend Oppia.",
          imageSrc: "https://pixabay.com/get/g4574bcf61fc5905261b0c4b75ed48eaac29f442741dc5f1489620d85f2f5b849894ca2fe1fd834c81c92bf102f568c55e19642ee35a31b71ce5c612b6ac2227c_1280.jpg",
        },
        {
          id: "4",
          name: "David R.",
          role: "Gift Giver",
          testimonial: "Every recipient is always delighted. Exceptional artistic touch.",
          imageSrc: "https://pixabay.com/get/g5d88f7007fd58862de21d55be66f83b2e6e7f5a0f208a226c9d4960cc620439832b74c5fdba1e5669d0119eb7840370eb5e1fad4dce4ce959b58d0c1940c5bfa_1280.jpg",
        },
      ]}
      title="Client Voices"
      description="See why our clients choose Oppia for their most important occasions."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Do you deliver?",
          content: "Yes, we offer local delivery across the city.",
        },
        {
          id: "faq2",
          title: "Can I request custom designs?",
          content: "Absolutely, contact us to discuss your vision.",
        },
      ]}
      ctaTitle="Let's Create Together"
      ctaDescription="Have a special request or event in mind? Contact our floral team today."
      ctaButton={{
        text: "Contact Us",
        href: "mailto:hello@oppia.com",
      }}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Oppia"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Shop",
              href: "#products",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Oppia Studio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
