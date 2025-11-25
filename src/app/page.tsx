"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Luxe Hotel"
          description="Experience ultimate comfort and hospitality in our premium five-star accommodations. Book your unforgettable stay with us today."
          tag="Your Perfect Getaway"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102457361-c32205hb.jpg"
          imageAlt="Luxury hotel lobby with modern design"
          imagePosition="right"
          buttons={[
            { text: "Book Now", href: "contact" },
            { text: "View Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Our Rooms"
          description="Choose from our carefully curated selection of luxurious rooms and suites designed for your comfort."
          tag="Premium Accommodations"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "room-1",
              name: "Deluxe Room",
              price: "$199/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102458137-oofow4iq.jpg",
              imageAlt: "Luxury deluxe bedroom with king bed",
              initialQuantity: 1
            },
            {
              id: "room-2",
              name: "Executive Suite",
              price: "$349/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102459123-rs2zqsb1.jpg",
              imageAlt: "Premium suite with separate lounge",
              initialQuantity: 1
            },
            {
              id: "room-3",
              name: "Standard Room",
              price: "$129/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102460367-xmjbx6za.jpg",
              imageAlt: "Comfortable standard room with twin beds",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSix
          title="World-Class Amenities"
          description="Discover our premium facilities designed to enhance your stay and provide ultimate relaxation."
          tag="Premium Services"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Luxury Spa",
              description: "Rejuvenate your mind and body with our full-service spa offering massages, facials, and wellness treatments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102461135-zmtj82oi.jpg"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Enjoy exquisite cuisine prepared by our award-winning chefs in our elegant dining establishment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102461847-mtn3v729.jpg"
            },
            {
              id: 3,
              title: "State-of-the-Art Fitness Center",
              description: "Stay fit during your stay with modern equipment, personal trainers, and group fitness classes available.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102462588-kz4kro9u.jpg"
            },
            {
              id: 4,
              title: "Outdoor Swimming Pool",
              description: "Relax by our heated infinity pool with cabanas, loungers, and complimentary poolside beverages.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102463364-nd2d4rfm.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Why Choose Luxe Hotel"
          description="Our proven track record of excellence and guest satisfaction speaks for itself."
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "25+",
              description: "Years of Hospitality Excellence"
            },
            {
              id: "2",
              value: "10,000+",
              description: "Happy Guests Annually"
            },
            {
              id: "3",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "4",
              value: "50+",
              description: "Award Wins & Recognitions"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from travelers who have experienced the Luxe Hotel difference."
          tag="Guest Reviews"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Blogger",
              company: "Wanderlust Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102464070-u78lnc1o.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Business Executive",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102464772-e40l4t6l.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Event Planner",
              company: "Celebrations & Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102465881-kdia9hna.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Hotel Critic",
              company: "Travel Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102466491-dhskz1tr.jpg",
              imageAlt: "Michael Thompson portrait"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              role: "Vacation Planner",
              company: "Dream Getaways",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102467180-e53fcark.jpg",
              imageAlt: "Lisa Anderson portrait"
            },
            {
              id: "6",
              name: "David Park",
              role: "Corporate Manager",
              company: "Global Business Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102468135-flwojsai.jpg",
              imageAlt: "David Park portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about bookings, amenities, and your stay with us."
          tag="Help & Support"
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102468780-xd8we9hi.jpg"
          imageAlt="Hotel reception desk with helpful staff"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations within 48 hours may incur charges."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all guests. Please arrange pickup at check-in."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome pets with a nightly fee of $25. Please inform us during booking so we can prepare pet-friendly accommodations."
            },
            {
              id: "4",
              title: "What time is check-in and check-out?",
              content: "Standard check-in is at 3 PM and check-out at 11 AM. Early check-in and late check-out are available upon request subject to availability."
            },
            {
              id: "5",
              title: "Is breakfast included?",
              content: "Complimentary breakfast is included with all room bookings. It is served daily from 6:30 AM to 10 AM in our main dining area."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Stay"
          title="Reserve Your Perfect Room"
          description="Get exclusive offers and updates delivered to your inbox. Join our loyalty program for special benefits and early access to promotions."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764102472204-yw3tl92u.jpg"
          imageAlt="Luxe Hotel exterior with modern architecture"
          mediaPosition="right"
          tagIcon={Heart}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. By subscribing, you agree to our Terms and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          copyrightText="© 2025 Luxe Hotel. All rights reserved."
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "amenities" },
                { label: "Spa & Wellness", href: "amenities" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Email: info@luxehotel.com", href: "#" },
                { label: "Phone: +1 (555) 123-4567", href: "#" },
                { label: "Address: 123 Luxury Ave, City, State", href: "#" },
                { label: "Book a Room", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}