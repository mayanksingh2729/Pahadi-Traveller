
import React from 'react';
import { CloudSun, TreeDeciduous, Mountain, MapPin } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Mountain className="h-10 w-10 text-mountain-600" />,
      title: "Majestic Himalayas",
      description: "Explore the breathtaking peaks and valleys of the world's most magnificent mountain range."
    },
    {
      icon: <TreeDeciduous className="h-10 w-10 text-forest-600" />,
      title: "Lush Forests",
      description: "Wander through dense alpine forests teeming with diverse flora and fauna."
    },
    {
      icon: <CloudSun className="h-10 w-10 text-spirit-500" />,
      title: "Serene Weather",
      description: "Experience pleasant summers and snow-covered winters in this heavenly climate."
    },
    {
      icon: <MapPin className="h-10 w-10 text-earth-600" />,
      title: "Sacred Sites",
      description: "Visit ancient temples and spiritual destinations nestled in scenic landscapes."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Visit Uttarakhand?</h2>
          <p className="text-gray-600">
            Known as "Land of the Gods," Uttarakhand offers an extraordinary blend of natural beauty, spiritual heritage, and adventure opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
