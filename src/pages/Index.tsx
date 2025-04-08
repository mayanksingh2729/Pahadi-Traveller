
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import DestinationCard from '@/components/DestinationCard';
import BlogCard from '@/components/BlogCard';
import TestimonialSection from '@/components/TestimonialSection';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Featured destinations data
  const featuredDestinations = [
    {
      id: "valley-of-flowers",
      name: "Valley of Flowers",
      description: "A UNESCO World Heritage Site known for its meadows of endemic alpine flowers and variety of flora.",
      imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Chamoli, Uttarakhand"
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      description: "The 'Yoga Capital of the World' situated on the banks of the holy Ganges river, offering spiritual rejuvenation and adventure sports.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Dehradun, Uttarakhand"
    },
    {
      id: "nainital",
      name: "Nainital",
      description: "A charming hill station built around a uniquely shaped lake and surrounded by mountains.",
      imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Kumaon, Uttarakhand"
    }
  ];

  // Featured blog posts data
  const featuredBlogPosts = [
    {
      id: "trekking-valley-of-flowers",
      title: "Trekking Guide: Valley of Flowers",
      excerpt: "Everything you need to know about trekking to the magical Valley of Flowers in Uttarakhand, from preparation to the best time to visit.",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2023",
      author: "Vikram Singh",
      category: "Trekking"
    },
    {
      id: "spiritual-journey-rishikesh",
      title: "A Spiritual Journey Through Rishikesh",
      excerpt: "Explore the spiritual side of Rishikesh beyond its reputation as an adventure hub, with visits to ancient temples and ashrams.",
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2023",
      author: "Ananya Joshi",
      category: "Spirituality"
    },
    {
      id: "hidden-gems-kumaon",
      title: "Hidden Gems of the Kumaon Region",
      excerpt: "Discover lesser-known destinations in the Kumaon region that offer serene beauty away from the tourist crowds.",
      imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2023",
      author: "Rohan Negi",
      category: "Exploration"
    }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Discover the Mystical Beauty of Uttarakhand"
        subtitle="Journey through the majestic Himalayas, sacred rivers, and ancient temples of Dev Bhoomi"
        ctaText="Begin Your Journey"
        ctaLink="/destinations"
      />

      <FeatureSection />

      {/* Featured Destinations Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Destinations</h2>
              <p className="text-gray-600">Explore the most breathtaking places in Uttarakhand</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/destinations" className="hidden md:flex">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id}
                id={destination.id}
                name={destination.name}
                description={destination.description}
                imageSrc={destination.imageSrc}
                location={destination.location}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Uttarakhand Section */}
      <section className="section-padding bg-mountain-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Land of Gods</h2>
              <p className="text-gray-700 mb-4">
                Uttarakhand, nestled in the lap of the Himalayas, is a land of extraordinary beauty and spiritual significance. Known as "Dev Bhoomi" or the Land of Gods, this northern Indian state is blessed with snow-capped mountains, crystal-clear rivers, lush forests, and ancient temples.
              </p>
              <p className="text-gray-700 mb-4">
                From the sacred banks of the Ganges in Rishikesh to the high-altitude meadows of Valley of Flowers, Uttarakhand offers diverse landscapes that captivate the heart and soul of every traveler.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you seek adventure, spiritual enlightenment, or simply wish to bask in the glory of nature, Uttarakhand welcomes you with open arms and unforgettable experiences.
              </p>
              <Button asChild className="bg-mountain-600 hover:bg-mountain-700">
                <Link to="/about">
                  Learn More About Uttarakhand
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Uttarakhand Landscape" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-forest-100 rounded-lg hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-spirit-100 rounded-lg hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Featured Blog Posts Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Adventures</h2>
              <p className="text-gray-600">Stories and guides from our Uttarakhand explorations</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/blog" className="hidden md:flex">
                Read All Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post) => (
              <BlogCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                date={post.date}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/blog">
                Read All Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;
