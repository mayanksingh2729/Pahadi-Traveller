
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import Newsletter from '@/components/Newsletter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Destinations = () => {
  // Destination categories
  const categories = ["All", "Hill Stations", "Spiritual", "Adventure", "Wildlife"];

  // All destinations data
  const allDestinations = [
    {
      id: "valley-of-flowers",
      name: "Valley of Flowers",
      description: "A UNESCO World Heritage Site known for its meadows of endemic alpine flowers and variety of flora.",
      imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Chamoli, Uttarakhand",
      category: "Adventure"
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      description: "The 'Yoga Capital of the World' situated on the banks of the holy Ganges river, offering spiritual rejuvenation and adventure sports.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Dehradun, Uttarakhand",
      category: "Spiritual"
    },
    {
      id: "nainital",
      name: "Nainital",
      description: "A charming hill station built around a uniquely shaped lake and surrounded by mountains.",
      imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Kumaon, Uttarakhand",
      category: "Hill Stations"
    },
    {
      id: "mussoorie",
      name: "Mussoorie",
      description: "Known as the 'Queen of Hills', this popular hill station offers stunning views of the Himalayas.",
      imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Dehradun, Uttarakhand",
      category: "Hill Stations"
    },
    {
      id: "auli",
      name: "Auli",
      description: "A skiing destination with panoramic views of snow-capped Himalayan peaks including Nanda Devi.",
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Chamoli, Uttarakhand",
      category: "Adventure"
    },
    {
      id: "jim-corbett",
      name: "Jim Corbett National Park",
      description: "India's oldest national park known for its Bengal tigers, elephants and diverse wildlife.",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Nainital, Uttarakhand",
      category: "Wildlife"
    },
    {
      id: "kedarnath",
      name: "Kedarnath",
      description: "Home to one of the holiest Hindu temples dedicated to Lord Shiva, located among the magnificent Himalayan ranges.",
      imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Rudraprayag, Uttarakhand",
      category: "Spiritual"
    },
    {
      id: "haridwar",
      name: "Haridwar",
      description: "One of the seven holiest places for Hindus, famous for the evening Ganga Aarti on the ghats of the Ganges.",
      imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Haridwar, Uttarakhand",
      category: "Spiritual"
    },
    {
      id: "binsar",
      name: "Binsar Wildlife Sanctuary",
      description: "A wildlife sanctuary and heaven for bird watchers with panoramic views of the Himalayan peaks.",
      imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Almora, Uttarakhand",
      category: "Wildlife"
    },
    {
      id: "badrinath",
      name: "Badrinath",
      description: "One of the holiest pilgrimage sites in Hinduism, known for the Badrinath Temple dedicated to Lord Vishnu.",
      imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Chamoli, Uttarakhand",
      category: "Spiritual"
    },
    {
      id: "almora",
      name: "Almora",
      description: "A picturesque hill station known for its rich cultural heritage, scenic beauty, and panoramic view of the Himalayas.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Almora, Uttarakhand",
      category: "Hill Stations"
    }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        title="Explore Uttarakhand Destinations"
        subtitle="Discover the diverse landscapes, from snow-capped mountains to serene lakes and ancient temples"
      />

      <section className="section-padding">
        <div className="content-container">
          <p className="text-gray-600 mb-10 max-w-3xl">
            Uttarakhand offers a rich tapestry of destinations, each with its unique charm and experiences. 
            From spiritual havens to adventure hotspots, hill stations to wildlife sanctuaries, 
            explore the diverse offerings of this Himalayan state.
          </p>

          <Tabs defaultValue="All" className="mb-10">
            <TabsList className="mb-8 flex flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(category === "All" 
                    ? allDestinations 
                    : allDestinations.filter(dest => dest.category === category)
                  ).map((destination) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Destinations;
