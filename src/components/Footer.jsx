import React from "react";
import "./footer.css";
import FooterSection from "./FooterSection";
import SpecialeFooterSection from "./SpecialeFooterSection";
const Footer = ({}) => {
  return (
    <div className="footer">
      <FooterSection
        title="Company"
        links={[
          { path: "/about", label: "About Us" },
          { path: "/blog", label: "Blog" },
          { path: "/services", label: "Services" },
          { path: "/faq", label: "FAQ" },
          { path: "/terms", label: "Terms" },
          { path: "contact", label: "Contact Us" },
        ]}
      />
      <FooterSection
        title="Quick Links"
        links={[
          { path: "/get-in-touch", label: "Get in Touch" },
          { path: "/help-center", label: "Help Center" },
          { path: "/live-chat", label: "Live Chat" },
          { path: "/how-it-works", label: "How it Works" },
        ]}
      />
      <FooterSection
        title="Our Brands"
        links={[
          { path: "/Toyota", label: "Toyota" },
          { path: "/Porsche", label: "Porsche" },
          { path: "/Audi", label: "Audi" },
          { path: "/BMW", label: "BMW" },
          { path: "/Ford", label: "Ford" },
          { path: "/Nissan", label: "Nissan" },
          { path: "/Peugeot", label: "Peugeot" },
          { path: "/Volkswagen", label: "Volkswagen" },
        ]}
      />
        <FooterSection
        title="Vehicles Types"
        links={[
          { path: "/Sedan", label: "Sedan" },
          { path: "/Hatchback", label: "Hatchback" },
          { path: "/Suv", label: "Suv" },
          { path: "/Hybrid", label: "Hybrid" },
          { path: "/Electric", label: "Electric" },
          { path: "/Coupe", label: "Coupe" },
          { path: "/Truck", label: "Truck" },
          { path: "/Convertible", label: "Convertible" },
        ]}
      />
      <SpecialeFooterSection />
    </div>
  );
};

export default Footer;
