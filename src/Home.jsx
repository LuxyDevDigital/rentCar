import SearchFilter from "./components/SearchFilter";
import "./Home.css";
import HomeSection from "./components/HomeSection";
import BrandCard from "./components/BrandCard";
import CarCard from "./components/CarCard";
import TestimonialCard from "./components/TestimonialCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <Header />
        <div className="hero-content">
          <SearchFilter />

          <div className="hero-text">
            <h1 className="hero-title">
              50 Vehicles
              <br />
              Available
            </h1>
            <div className="hero-buttons">
              <button className="btn-primary">View Inventory</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Brands */}
      <HomeSection
        title={"Explore Our Premium Brands"}
        linkLabel={"Show All Brands →"}
        linkPath={"#"}>
        {[
          { logo: "/audi-logo.jpg", name: "Audi" },
          { logo: "/bmw-logo.jpg", name: "BMW" },
          { logo: "/ford-oval-logo.jpg", name: "Ford" },
          { logo: "/mercedes-benz-logo.jpg", name: "Mercedes Benz" },
          { logo: "/peugeot-logo.jpg", name: "Peugeot" },
          { logo: "/volkswagen-logo.jpg", name: "Volkswagen" },
        ].map((brand) => (
          <BrandCard key={brand.name} logo={brand.logo} name={brand.name} />
        ))}
      </HomeSection>
      {/* Recently Added */}
      <HomeSection
        title={"Recently Added"}
        linkLabel={" View All →"}
        linkPath={"#"}>
        {[
          {
            image: "/blue-nissan-suv.jpg",
            title: "New GLC - 2023",
            characteristics: ["50 Miles", "Petrol", "Automatic"],
            price: "MAD 850/Day",
            detailsPath: "#",
            specialOffer: "New",
          },
          {
            image: "/brown-ford-transit.jpg",
            title: "Ford Transit - 2021",
            characteristics: ["2500 Miles", "Diesel", "Manual"],
            price: "MAD 220/Day",
            detailsPath: "#",
            specialOffer: "Low mileage",
          },
          {
            image: "/blue-c-class.jpg",
            title: "C-Class - 2023",
            characteristics: ["50 Miles", "Petrol", "Automatic"],
            price: "MAD 1500/Day",
            detailsPath: "#",
            specialOffer: "greate Price",
          },
          {
            image: "/jeep-renegade.png",
            title: "Jeep Renegade M 2023",
            characteristics: ["15 Miles", "Petrol", "CVT"],
            price: "MAD 4000/Day",
            detailsPath: "#",
          },
        ].map((Car) => (
          <CarCard
            key={Car.title}
            image={Car.image}
            title={Car.title}
            characteristics={Car.characteristics}
            price={Car.price}
            detailsPath={Car.detailsPath}
            specialOffer={Car.specialOffer}
          />
        ))}
      </HomeSection>
      {/* Testimonials */}
      <HomeSection title={"What our customers say"}>
        {[
          {
            title: "Great Work",
            description:
              "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't go on our original designs.",
            authorName: "Leslie Alexander",
            authorRole: "Facebook",
            authorImage: "/leslie-alexander-portrait.jpg",
          },
          {
            title: "Awesome Design",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            authorName: "Floyd Miles",
            authorRole: "Designer",
            authorImage: "/floyd-miles-portrait.jpg",
          },
          {
            title: "Good Job",
            description:
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
            authorName: "Dianne Russell",
            authorRole: "Marketing",
            authorImage: "/dianne-russell-portrait.jpg",
          },
        ].map((testimonial) => (
          <TestimonialCard
            key={testimonial.title}
            title={testimonial.title}
            description={testimonial.description}
            authorName={testimonial.authorName}
            authorRole={testimonial.authorRole}
            authorImage={testimonial.authorImage}
          />
        ))}
      </HomeSection>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-images">
          <img src="/white-audi-suv.jpg" alt="White Audi SUV" />
          <img src="/mountain-car.jpg" alt="Car in mountains" />
          <img src="/yellow-jeep.jpg" alt="Yellow Jeep" />
        </div>
        <div className="contact-info">
          <h2>Have More Questions ? Don't Hesitate To Reach Us</h2>
          <p>
            123 Queensberry Street, North
            <br />
            Melbourne VIC3051, Australia
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
