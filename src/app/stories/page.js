import ImpactStories from "../../components/ImpactStories";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PawBuddy from "../../components/PawBuddy";

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Impact Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Our Impact Stories</h2>
            <ImpactStories />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* PawBuddy Chatbot */}
      <PawBuddy />
    </div>
  );
}