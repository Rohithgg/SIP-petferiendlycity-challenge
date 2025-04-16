"use client"
import { useState } from 'react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    rolePreference: '',
    experience: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        city: '',
        rolePreference: '',
        experience: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Join Our Volunteer Team</h2>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Thank you for volunteering!</strong>
          <p className="block sm:inline"> We'll be in touch soon about how you can help make our city more pet-friendly.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City *</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label htmlFor="rolePreference" className="block text-gray-700 font-medium mb-2">Role Preference *</label>
          <select 
            id="rolePreference" 
            name="rolePreference" 
            value={formData.rolePreference}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select a role</option>
            <option value="event-coordinator">Event Coordinator</option>
            <option value="pet-ambassador">Pet Ambassador</option>
            <option value="social-media">Social Media Manager</option>
            <option value="community-outreach">Community Outreach</option>
            <option value="fundraising">Fundraising</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Previous Experience</label>
          <select 
            id="experience" 
            name="experience" 
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select your experience level</option>
            <option value="none">No previous experience</option>
            <option value="some">Some experience</option>
            <option value="experienced">Experienced</option>
            <option value="professional">Professional in this field</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer?</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}