import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import { Users, Mountain, Book, Image } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Mayank Negi",
      role: "Founder & Writer",
      bio: "A passionate explorer born and raised in Uttarakhand with a deep love for the mountains and local culture.",
      image: "/Mayank.jpg"
    },
    {
      name: "Suraj Singh Verma",
      role: "Travel Photographer",
      bio: "Captures the essence of Uttarakhand through her lens, specializing in landscape and cultural photography.",
      image: "/Suraj.jpg"
    },
    {
      name: "Dinesh Bhardwaj",
      role: "Adventure Guide",
      bio: "An experienced trekker who has explored every corner of Uttarakhand and loves sharing hidden gems with travelers.",
      image: "/Dinesh.jpg"
    },
    {
      name: "Charu Rajput",
      role: "Cultural Expert",
      bio: "Researches and writes about the rich cultural heritage, festivals, and traditions of Uttarakhand.",
      image: "/Charu.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="About Himalayan Wanderlust"
        subtitle="Our journey, mission, and the team behind showcasing Uttarakhand's beauty"
      />

      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Himalayan Wanderlust was born from a deep love for Uttarakhand and a desire to share its extraordinary beauty with the world. What began as personal travel journals and photographs gradually evolved into a comprehensive guide for travelers seeking authentic experiences in this Himalayan paradise.
              </p>
              <p className="text-gray-700 mb-4">
                Having been raised among these mountains, we witnessed how mainstream travel narratives often missed the true essence of Uttarakhand—its lesser-known trails, the warmth of its people, ancient traditions, and the spiritual energy that permeates every corner.
              </p>
              <p className="text-gray-700">
                We created this platform to bridge this gap, offering insights that go beyond tourist brochures and popular spots, inviting travelers to experience Uttarakhand the way locals cherish it.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mountain landscape" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-mountain-100 rounded-lg hidden lg:block"></div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Mountain className="h-10 w-10 text-forest-600 mr-4" />
                  <h3 className="text-xl font-bold">Showcase Natural Beauty</h3>
                </div>
                <p className="text-gray-600">
                  To capture and present the diverse landscapes of Uttarakhand, from snow-capped peaks to lush valleys, crystal-clear lakes to roaring rivers, bringing the natural majesty of the region to life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Book className="h-10 w-10 text-mountain-600 mr-4" />
                  <h3 className="text-xl font-bold">Preserve Cultural Heritage</h3>
                </div>
                <p className="text-gray-600">
                  To document and share the rich cultural traditions, ancient folklore, and spiritual practices that make Uttarakhand a living museum of Himalayan heritage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Image className="h-10 w-10 text-spirit-500 mr-4" />
                  <h3 className="text-xl font-bold">Inspire Sustainable Travel</h3>
                </div>
                <p className="text-gray-600">
                  To promote responsible tourism practices that respect the delicate mountain ecosystems and support local communities, ensuring Uttarakhand's beauty endures for generations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-10 w-10 text-earth-600 mr-4" />
                  <h3 className="text-xl font-bold">Connect Travelers & Locals</h3>
                </div>
                <p className="text-gray-600">
                  To bridge the gap between visitors and locals, facilitating meaningful cultural exchanges that enrich the travel experience and benefit Uttarakhand communities.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-52 object-cover object-center"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-forest-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
