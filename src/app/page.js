import Hero from "../components/Hero";
import VolunteerForm from "../components/VolunteerForm";
import ImpactStories from "../components/ImpactStories";
import PetAdoptionCarousel from "../components/PetAdoptionCarousel";
import PawBuddy from "../components/PawBuddy";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Volunteer Form Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Volunteer With Us</h2>
            <VolunteerForm />
          </div>
        </section>
        
        {/* Impact Stories Section */}
        <ImpactStories />
        
        {/* Pet Adoption Carousel */}
        <PetAdoptionCarousel />
      </main>
      
      <Footer />
      
      {/* PawBuddy Chatbot */}
      <PawBuddy />
    </div>
  );
}
