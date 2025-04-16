"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function ImpactStories() {
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: "Central Park's Pet-Friendly Transformation",
      location: "New York City, NY",
      description: "What started as a small petition grew into a movement that transformed Central Park into a haven for pets with dedicated play areas, water stations, and pet-friendly events every weekend.",
      impact: "Over 50,000 pets and their owners now enjoy improved facilities each month.",
      image: "/placeholder-story1.jpg" // This would be replaced with actual images
    },
    {
      id: 2,
      title: "Paws on Main Street Initiative",
      location: "Portland, OR",
      description: "Local business owners came together to make Main Street shops and restaurants more welcoming to pets, with water bowls, treat stations, and pet-friendly seating areas.",
      impact: "Pet-friendly businesses reported a 30% increase in foot traffic and customer satisfaction.",
      image: "/placeholder-story2.jpg"
    },
    {
      id: 3,
      title: "Beach Access for All Paws",
      location: "San Diego, CA",
      description: "After years of limited beach access, our volunteers worked with city officials to designate pet-friendly beach zones with proper waste management and safety protocols.",
      impact: "Created 5 new pet-friendly beaches that serve over 10,000 pets annually.",
      image: "/placeholder-story3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-12">Impact Stories</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="relative h-64 md:h-80 bg-teal-100">
              {/* This would be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
                <span className="text-6xl">🏙️ 🐾</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{stories[activeStory].title}</h3>
                <p className="text-teal-100">{stories[activeStory].location}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4">{stories[activeStory].description}</p>
              
              <div className="bg-teal-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-teal-800 mb-2">Impact:</h4>
                <p className="text-teal-700">{stories[activeStory].impact}</p>
              </div>
              
              <div className="flex justify-center space-x-2">
                {stories.map((story, index) => (
                  <button 
                    key={story.id}
                    onClick={() => setActiveStory(index)}
                    className={`w-3 h-3 rounded-full ${index === activeStory ? 'bg-teal-600' : 'bg-gray-300'}`}
                    aria-label={`View story ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Have a Success Story?</h3>
            <p className="text-gray-600 mb-6">We'd love to hear how you've helped make your community more pet-friendly!</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}