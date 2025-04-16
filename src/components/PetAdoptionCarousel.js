"use client"
import { use, useState } from 'react';
import Image from 'next/image';

export default function PetAdoptionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample pet data - in a real app, this would come from an API
  const pets = [
    {
      id: 1,
      name: 'Luna',
      type: 'Dog',
      breed: 'Border Collie Mix',
      age: '2 years',
      description: 'Luna is an energetic and intelligent dog who loves to play fetch and learn new tricks. She gets along well with other dogs and would thrive in an active household.',
      personality: ['Playful', 'Smart', 'Energetic'],
      image: '/placeholder-pet1.jpg' // This would be replaced with actual images
    },
    {
      id: 2,
      name: 'Oliver',
      type: 'Cat',
      breed: 'Tabby',
      age: '3 years',
      description: 'Oliver is a laid-back cat who enjoys lounging in sunny spots and gentle pets. He\'s quiet, independent, and would make a perfect companion for a calm home.',
      personality: ['Calm', 'Affectionate', 'Independent'],
      image: '/placeholder-pet2.jpg'
    },
    {
      id: 3,
      name: 'Bella',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '1 year',
      description: 'Bella is a friendly and gentle puppy who loves everyone she meets. She\'s great with children and other pets, and is eager to please her humans.',
      personality: ['Friendly', 'Gentle', 'Loyal'],
      image: '/placeholder-pet3.jpg'
    },
    {
      id: 4,
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Siamese',
      age: '5 years',
      description: 'Whiskers is a talkative and social cat who enjoys being the center of attention. He\'s playful, curious, and will keep you entertained with his antics.',
      personality: ['Vocal', 'Social', 'Curious'],
      image: '/placeholder-pet4.jpg'
    },
    {
      id: 5,
      name: 'Max',
      type: 'Dog',
      breed: 'Beagle',
      age: '4 years',
      description: 'Max is a sweet and gentle dog with a nose for adventure. He loves going for walks and exploring new scents. He\'s good with children and other dogs.',
      personality: ['Sweet', 'Curious', 'Friendly'],
      image: '/placeholder-pet5.jpg'
    }
  ];

  const nextPet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const prevPet = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pets.length) % pets.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-4">Find Your Perfect Companion</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These loving animals are looking for their forever homes. Each has their own unique personality and is ready to bring joy to your life.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Pet Card */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="md:flex">
              {/* Pet Image */}
              <div className="md:w-1/2 h-64 md:h-auto relative bg-teal-100">
                {/* Using the placeholder images */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={pets[currentIndex].image}
                    alt={`${pets[currentIndex].name} - ${pets[currentIndex].breed}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pets[currentIndex].type}
                </div>
              </div>
              
              {/* Pet Info */}
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-teal-800">{pets[currentIndex].name}</h3>
                  <span className="text-gray-600 text-sm">{pets[currentIndex].age}</span>
                </div>
                <p className="text-gray-600 mb-4">{pets[currentIndex].breed}</p>
                
                <p className="text-gray-700 mb-4">{pets[currentIndex].description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-teal-700 mb-2">Personality:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pets[currentIndex].personality.map((trait, index) => (
                      <span 
                        key={index} 
                        className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Inquire About {pets[currentIndex].name}
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevPet}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white hover:bg-gray-100 text-teal-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Previous pet"
          >
            ←
          </button>
          <button 
            onClick={nextPet}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white hover:bg-gray-100 text-teal-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Next pet"
          >
            →
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {pets.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'}`}
                aria-label={`View pet ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to see more pets available for adoption?</p>
          <a 
            href="#" 
            className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-3 px-6 rounded-full transition-colors border-2 border-teal-600 shadow-lg hover:shadow-xl inline-block"
          >
            View All Available Pets
          </a>
        </div>
      </div>
    </section>
  );
}