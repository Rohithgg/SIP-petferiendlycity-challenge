import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PawBuddy from "../../components/PawBuddy";

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Initiatives Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Our Initiatives</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">Awareness Drives</h3>
                <p className="text-gray-700">
                  We conduct regular awareness campaigns to educate the public about responsible pet ownership, 
                  animal welfare, and the importance of creating pet-friendly spaces. These drives include 
                  workshops, seminars, and community events that bring together animal lovers and advocates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">Public Policy Shift</h3>
                <p className="text-gray-700">
                  We work closely with local governments and policymakers to advocate for pet-friendly 
                  legislation and infrastructure. This includes proposing amendments to existing laws, 
                  developing guidelines for pet-friendly public spaces, and creating frameworks for 
                  animal welfare in urban planning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">Joint Efforts</h3>
                <p className="text-gray-700">
                  We collaborate with animal welfare organizations, veterinary associations, and other 
                  stakeholders to create a unified approach to animal care in cities. By pooling resources 
                  and expertise, we can achieve greater impact and reach more communities across India.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">Providing Resources</h3>
                <p className="text-gray-700">
                  We develop and distribute resources such as guides for pet-friendly businesses, 
                  directories of animal care services, and educational materials about animal welfare. 
                  These resources help both pet owners and non-pet owners navigate and contribute to 
                  a more pet-friendly urban environment.
                </p>
              </div>
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