"use client"
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="/volunteer" className="text-gray-300 hover:text-teal-300 transition-colors">Volunteer</a></li>
              <li><a href="/stories" className="text-gray-300 hover:text-teal-300 transition-colors">Impact Stories</a></li>
              <li><a href="/adopt" className="text-gray-300 hover:text-teal-300 transition-colors">Adopt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.youtube.com/channel/UCcbf5sZkxsBGYj9Dr7K9QEA" className="text-gray-300 hover:text-teal-300 transition-colors">YouTube</a></li>
              <li><a href="https://www.instagram.com/collegetips.in/" className="text-gray-300 hover:text-teal-300 transition-colors">Instagram</a></li>
              <li><a href="https://x.com/CollegeTips_in" className="text-gray-300 hover:text-teal-300 transition-colors">Twitter</a></li>
              <li><a href="https://facebook.com/collegetips.in" className="text-gray-300 hover:text-teal-300 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-center">Our Hub</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Bhopal Office</h4>
              <p className="text-gray-300 text-sm">Third Floor, Above Bread & Better, Near Shiyoy Complex, Gulmohar, Bhopal, Madhya Pradesh 462039</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Mumbai Office</h4>
              <p className="text-gray-300 text-sm">74 Technopark, MIDC Gate no 2, Seepz, Andheri East, Mumbai, Maharashtra 400069</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Delhi Office</h4>
              <p className="text-gray-300 text-sm">1112, Surya kiran building, Connaught Place, New Delhi, 110001</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Pune Office</h4>
              <p className="text-gray-300 text-sm">First Floor, Creaticity Mall, Opposite Golf Course, Shastrinagar, Yerawada, Pune 411006</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Indore Office</h4>
              <p className="text-gray-300 text-sm">The One, RNT Marg, Indore, Madhya Pradesh 452001</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-teal-300">Upcoming Cities</h4>
              <p className="text-gray-300 text-sm">RAIPUR, JAIPUR, GWALIOR, AHEMEDABAD & GOA<br/>HUNGARY (International Hub)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-300 mb-4">CollegeTips.in - a venture of CollegeTips Ed. Tech. Media Pvt. Ltd.</p>
          <h4 className="font-semibold mb-3 text-teal-300">Connect With Us</h4>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com/collegetips.in" className="text-gray-300 hover:text-teal-300 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/collegetips.in/" className="text-gray-300 hover:text-teal-300 transition-colors">Instagram</a>
            <a href="https://www.youtube.com/channel/UCcbf5sZkxsBGYj9Dr7K9QEA" className="text-gray-300 hover:text-teal-300 transition-colors">YouTube</a>
            <a href="https://x.com/CollegeTips_in" className="text-gray-300 hover:text-teal-300 transition-colors">Twitter</a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Rohith Gona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}