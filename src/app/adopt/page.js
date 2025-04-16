import PetAdoptionCarousel from "../../components/PetAdoptionCarousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PawBuddy from "../../components/PawBuddy";

export default function AdoptPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Pet Adoption Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Adopt a Pet</h2>
            <PetAdoptionCarousel />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* PawBuddy Chatbot */}
      <PawBuddy />
    </div>
  );
}