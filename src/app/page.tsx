"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Linkedin, Mail, MessageCircle, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Azure Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Hospitality"
          description="Indulge in world-class accommodations, exceptional service, and unforgettable moments at our premium hotel destination."
          tag="5-Star Hotel"
          tagIcon={Award}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "View Rooms", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant modern design"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Azure Hotel"
          description={[
            "Nestled in the heart of the city, Azure Hotel represents the pinnacle of luxury hospitality. Our commitment to excellence ensures every guest experiences unparalleled comfort and service.",
            "With meticulously designed suites, world-class amenities, and personalized attention to detail, we create memorable experiences that exceed expectations."
          ]}
          buttons={[
            { text: "Learn More", href: "feature" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Premium Amenities"
          description="Discover our world-class facilities designed to enhance your stay with luxury, comfort, and convenience."
          tag="Facilities"
          tagIcon={Star}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body with our full-service spa featuring massage therapy, wellness treatments, and relaxation lounges.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa and wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our award-winning restaurant featuring gourmet cuisine and premium wine selection.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant dining room"
            },
            {
              title: "Business Center",
              description: "State-of-the-art business facilities with meeting rooms, conference spaces, and professional services for corporate travelers.",
              imageSrc: "https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel business center and meeting room"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed suites and rooms, each designed with comfort and sophistication in mind."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Suite",
              price: "$349",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious deluxe suite bedroom",
              initialQuantity: 1
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$749",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant presidential suite with premium amenities",
              initialQuantity: 1
            },
            {
              id: "ocean-view",
              name: "Ocean View Room",
              price: "$279",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel room with stunning ocean view",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Azure Hotel for their luxury accommodation needs."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Executive",
              company: "Global Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Wanderlust Media",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Creative Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Event Coordinator",
              company: "Premier Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Thompson"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Our dedicated hospitality professionals are committed to making your stay exceptional with personalized service and attention to detail."
          tag="Our Staff"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Mitchell",
              role: "General Manager",
              description: "Over 15 years of luxury hospitality experience, dedicated to ensuring every guest receives exceptional service and memorable experiences.",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Mitchell",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/alexandra-mitchell" }
              ]
            },
            {
              id: "2",
              name: "James Parker",
              role: "Chief Concierge",
              description: "Expert local knowledge and personalized service specialist, ensuring guests discover the best experiences our destination has to offer.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Parker",
              socialLinks: [
                { icon: Mail, url: "mailto:concierge@azurehotel.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Stay"
          description="Contact us to book your luxury accommodation or inquire about our premium services and amenities."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Azure Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "feature" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Special Offers", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}