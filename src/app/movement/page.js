import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PawBuddy from "../../components/PawBuddy";
import VolunteerForm from "../../components/VolunteerForm";

export default function MovementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Join Our Movement Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Join Our Movement</h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Be Part of the Change</h3>
              
              <p className="text-gray-700 mb-6">
                Become a volunteer and help us create pet-friendly spaces in your city. Your contribution, 
                no matter how small, can make a significant difference in the lives of animals and the 
                communities they live in.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-teal-700">What Volunteers Do</h3>
              
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
                <li>Participate in community awareness programs to educate the public about animal welfare</li>
                <li>Help organize adoption drives to find loving homes for abandoned and rescued animals</li>
                <li>Assist in feeding programs for stray animals in various neighborhoods</li>
                <li>Advocate for pet-friendly policies with local businesses and government bodies</li>
                <li>Support rescue operations and emergency response for animals in distress</li>
                <li>Contribute to fundraising efforts for animal welfare projects</li>
              </ul>
              
              <p className="text-gray-700 mb-8">
                No special skills are required to volunteer - just a love for animals and a willingness to help. 
                We provide all necessary training and support to ensure that your volunteering experience is 
                rewarding and impactful.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-center text-teal-700 mb-8">Ready to Join? Fill out the form below!</h3>
            <VolunteerForm />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* PawBuddy Chatbot */}
      <PawBuddy />
    </div>
  );
}