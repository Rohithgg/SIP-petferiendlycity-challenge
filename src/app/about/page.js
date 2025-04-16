import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PawBuddy from "../../components/PawBuddy";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* About Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">About Us</h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">The Pet-Friendly City Initiative</h3>
              
              <p className="text-gray-700 mb-6">
                The Pet-Friendly City (PFC) initiative by CollegeTips.in is a nationwide campaign aimed at transforming 
                Indian cities into safe, welcoming environments for pets and stray animals.
              </p>
              
              <p className="text-gray-700 mb-6">
                We believe that a city that cares for its animals reflects the compassion and progress of its society.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Our Vision</h3>
              
              <p className="text-gray-700 mb-6">
                We envision a future where every Indian city is recognized as a pet-friendly destination, where animals 
                are treated with dignity and care, and where communities come together to ensure the welfare of all creatures.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Our Mission</h3>
              
              <p className="text-gray-700">
                Our mission is to create sustainable, inclusive urban environments that prioritize animal welfare through 
                education, advocacy, and community engagement. We work with local governments, businesses, and citizens 
                to implement pet-friendly policies and infrastructure that benefit both animals and humans alike.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* PawBuddy Chatbot */}
      <PawBuddy />
    </div>
  );
}